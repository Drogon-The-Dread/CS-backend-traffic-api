const express = require('express');
const app = express();
const trafficRoute = require('./routes/trafficRoutes');
const healthRoute = require('./routes/healthRoutes');


app.use(trafficRoute);
app.use(healthRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
