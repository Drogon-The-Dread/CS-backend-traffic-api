const db = require('../config/db');

const getData = async (req, res) => {
  try {
    const limit = req.query.limit || 5; 
    const query = `SELECT * FROM traffic_data LIMIT ${limit}`;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getData,
};
