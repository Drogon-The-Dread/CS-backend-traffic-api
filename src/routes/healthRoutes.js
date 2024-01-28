const express = require('express');
const router = express.Router();

const health = async (req, res) => {
  res.status(200).json({ status: 'Health: OK' });
};

router.get('/health', health);

module.exports = router;
