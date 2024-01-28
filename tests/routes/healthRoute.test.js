const request = require('supertest');
const express = require('express');
const app = express();

const healthRoute = require('../../src/routes/healthRoutes');

app.use('/', healthRoute);

describe('/health route', () => {
  it('should respond with a 200 status and "Health: OK"', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({ status: 'Health: OK' });
  });
});
