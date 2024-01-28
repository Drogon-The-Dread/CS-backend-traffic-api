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

  it('should get data with custom limit', async () => {
    const response = await request(app).get('/api/data?limit=10');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(10); 
  });

  it('should get data with default limit when limit not specified', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(5); 
  });

  it('should handle database query errors', async () => {
    const originalQueryFunction = require('../../src/config/db').query;
    require('../../src/config/db').query = jest.fn(() => {
      throw new Error('Database error');
    });

    const response = await request(app).get('/api/data');
    
    require('../../src/config/db').query = originalQueryFunction;

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Internal Server Error');
  });
});
