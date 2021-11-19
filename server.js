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
  const { address } = req.query;

  const house = list.houses.find(house => {
    return house.ADDRESS === address;
  });

  res.send({ result: house });
});

const port = 5000;

app.listen(port, () => console.log(`start ${port}`));