import request from 'supertest-as-promised';
import express from '../../services/express';
import routes, { Price } from '.';

const app = () => express(routes);

let price;

beforeEach(async () => {
  price = await Price.create({});
});

test('POST /prices 201', async () => {
  const { status, body } = await request(app()).post('/').send({ currency: 'test' });
  expect(status).toBe(201);
  expect(typeof body).toEqual('object');
  expect(body.currency).toEqual('test');
});

test('GET /prices 200', async () => {
  const { status, body } = await request(app()).get('/');
  expect(status).toBe(200);
  expect(Array.isArray(body)).toBe(true);
});

test('GET /prices/:id 200', async () => {
  const { status, body } = await request(app()).get(`/${price.id}`);
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(price.id);
});

test('GET /prices/:id 404', async () => {
  const { status } = await request(app()).get('/123456789098765432123456');
  expect(status).toBe(404);
});

test('PUT /prices/:id 200', async () => {
  const { status, body } = await request(app()).put(`/${price.id}`).send({ currency: 'test' });
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(price.id);
  expect(body.currency).toEqual('test');
});

test('PUT /prices/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ currency: 'test' });
  expect(status).toBe(404);
});

test('DELETE /prices/:id 204', async () => {
  const { status } = await request(app()).delete(`/${price.id}`);
  expect(status).toBe(204);
});

test('DELETE /prices/:id 404', async () => {
  const { status } = await request(app()).delete('/123456789098765432123456');
  expect(status).toBe(404);
});
