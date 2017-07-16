import request from 'supertest-as-promised';
import express from '../../services/express';
import routes, { Weight } from '.';

const app = () => express(routes);

let weight;

beforeEach(async () => {
  weight = await Weight.create({});
});

test('POST /weights 201', async () => {
  const { status, body } = await request(app()).post('/').send({ unit: 'test' });
  expect(status).toBe(201);
  expect(typeof body).toEqual('object');
  expect(body.unit).toEqual('test');
});

test('GET /weights 200', async () => {
  const { status, body } = await request(app()).get('/');
  expect(status).toBe(200);
  expect(Array.isArray(body)).toBe(true);
});

test('GET /weights/:id 200', async () => {
  const { status, body } = await request(app()).get(`/${weight.id}`);
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(weight.id);
});

test('GET /weights/:id 404', async () => {
  const { status } = await request(app()).get('/123456789098765432123456');
  expect(status).toBe(404);
});

test('PUT /weights/:id 200', async () => {
  const { status, body } = await request(app()).put(`/${weight.id}`).send({ unit: 'test' });
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(weight.id);
  expect(body.unit).toEqual('test');
});

test('PUT /weights/:id 404', async () => {
  const { status } = await request(app()).put('/123456789098765432123456').send({ unit: 'test' });
  expect(status).toBe(404);
});

test('DELETE /weights/:id 204', async () => {
  const { status } = await request(app()).delete(`/${weight.id}`);
  expect(status).toBe(204);
});

test('DELETE /weights/:id 404', async () => {
  const { status } = await request(app()).delete('/123456789098765432123456');
  expect(status).toBe(404);
});
