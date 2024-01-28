const request = require('supertest');
const express = require('express');
const app = express();

const trafficRoutes = require('../../src/routes/trafficRoutes');

app.use('/api', trafficRoutes);

describe('Traffic Routes', () => {
  it('should get data from /data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
  });
});
