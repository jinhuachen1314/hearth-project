const express = require('express');
const app = express();
const HouseList = require('./HouseList');
const list = new HouseList();

/**
 * Initialize house list.
 */
app.use(async (req, res, next) => {
  if (list.isEmpty()) list.getHousesFromCSV();
  next();
});

/**
 * Get addresses of the houses.
 */
app.get('/address', (req, res) => {
  const addresses = list.houses.map(house => house["ADDRESS"]);
  res.send(addresses);
});

/**
 * House search endpoint.
 */
app.get('/search', (req, res) => {
  const { address } = req.query;
  const house = list.houses.find(house => {
    return house.ADDRESS === address;
  });

  res.send({ result: house });
});

const port = 5000;

app.listen(port, () => console.log(`start ${port}`));