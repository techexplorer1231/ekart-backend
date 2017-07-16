import request from 'supertest';
import express from '../../services/express';
import routes, { Dimension } from '.';

const app = () => express(routes);

let dimension;

beforeEach(async () => {
  dimension = await Dimension.create({});
});

test('POST /dimensions 201', async () => {
  const { status, body } = await request(app()).post('/').send({ unit: 'test' });
  expect(status).toBe(201);
  expect(typeof body).toEqual('object');
  expect(body.unit).toEqual('test');
});

test('GET /dimensions 200', async () => {
  const { status, body } = await request(app()).get('/');
  expect(status).toBe(200);
  expect(Array.isArray(body)).toBe(true);
});

test('GET /dimensions/:id 200', async () => {
  const { status, body } = await request(app()).get(`/${dimension.id}`);
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(dimension.id);
});

test('GET /dimensions/:id 404', async () => {
  const { status } = await request(app()).get('/123456789098765432123456');
  expect(status).toBe(404);
});

test('PUT /dimensions/:id 200', async () => {
  const { status, body } = await request(app()).put(`/${dimension.id}`).send({ unit: 'test' });
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(dimension.id);
  expect(body.unit).toEqual('test');
});

test('PUT /dimensions/:id 404', async () => {
  const { status } = await request(app()).put('/123456789098765432123456').send({ unit: 'test' });
  expect(status).toBe(404);
});

test('DELETE /dimensions/:id 204', async () => {
  const { status } = await request(app()).delete(`/${dimension.id}`);
  expect(status).toBe(204);
});

test('DELETE /dimensions/:id 404', async () => {
  const { status } = await request(app()).delete('/123456789098765432123456');
  expect(status).toBe(404);
});
