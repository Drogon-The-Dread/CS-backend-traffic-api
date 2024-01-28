const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost', 
  database: 'traffic_data',
  password: 'postgres',
});

module.exports = pool;
