const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

class HouseList {  
  constructor() {
    this.getHousesFromCSV();
  }

  async getHousesFromCSV(fileName) {
    this.houses = await this.parseCSVPromise(fileName);
  }

  parseCSVPromise(fileName = 'redfin_2021-11-15-18-48-58.csv') {
    return new Promise(resolve => {
      let result = [];
      fs.createReadStream(path.resolve(__dirname, '.', fileName))
          .pipe(csv.parse({ headers: true }))
          .on('error', error => console.error(error))
          .on('data', data => result.push(data))
          .on('end', () => resolve(result));
    });
  }

  isEmpty() {
    return this.houses.length === 0;
  }

  clearHouses() {
    this.houses = [];
  }
}

module.exports = HouseList;