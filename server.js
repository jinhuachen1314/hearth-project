const express = require('express');
const app = express();
const HouseList = require('./HouseList');

const list = new HouseList();

app.use(async (req, res, next) => {
  if (list.isEmpty()) list.getHousesFromCSV();
  next();
});

// Search endpoint
app.get('/', (req, res) => {
  res.send(list.houses);
});

app.get('/search', (req, res) => {
  console.log(req.query);
  console.log(list.houses)
  // Get results here.
  res.send({ hey: "yes" });
});

const port = 5000;

app.listen(port, () => console.log(`start ${port}`));