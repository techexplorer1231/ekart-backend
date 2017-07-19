import request from 'supertest-as-promised';
import express from '../../services/express';
import routes, { Category } from '.';

const app = () => express(routes);

let category;

beforeEach(async () => {
  category = await Category.create({});
});

test('POST /categories 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ type: 'test', name: 'test', description: 'test', slug: 'test', status: 'test' });
  expect(status).toBe(201);
  expect(typeof body).toEqual('object');
  expect(body.type).toEqual('test');
  expect(body.name).toEqual('test');
  expect(body.description).toEqual('test');
  expect(body.slug).toEqual('test');
  expect(body.status).toEqual('test');
});

test('GET /categories 200', async () => {
  const { status, body } = await request(app()).get('/');
  expect(status).toBe(200);
  expect(Array.isArray(body)).toBe(true);
});

test('GET /categories/:id 200', async () => {
  const { status, body } = await request(app()).get(`/${category.id}`);
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(category.id);
});

test('GET /categories/:id 404', async () => {
  const { status } = await request(app()).get('/123456789098765432123456');
  expect(status).toBe(404);
});

test('PUT /categories/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${category.id}`)
    .send({ type: 'test', name: 'test', description: 'test', slug: 'test', status: 'test' });
  expect(status).toBe(200);
  expect(typeof body).toEqual('object');
  expect(body.id).toEqual(category.id);
  expect(body.type).toEqual('test');
  expect(body.name).toEqual('test');
  expect(body.description).toEqual('test');
  expect(body.slug).toEqual('test');
  expect(body.status).toEqual('test');
});

test('PUT /categories/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ type: 'test', name: 'test', description: 'test', slug: 'test', status: 'test' });
  expect(status).toBe(404);
});

test('DELETE /categories/:id 204', async () => {
  const { status } = await request(app()).delete(`/${category.id}`);
  expect(status).toBe(204);
});

test('DELETE /categories/:id 404', async () => {
  const { status } = await request(app()).delete('/123456789098765432123456');
  expect(status).toBe(404);
});
