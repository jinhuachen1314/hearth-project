# hearth-project
 
## Overview
Hearth-project is a search system that helps user to search home by address and retrieve its information. It aims to provide basic search feature and user-interface design as it's an interview process of Hearth. 

## Getting Started
With a simple user-interface, user can simply enter search query, or open the dropdown menu to select any address. User would need to click on the search button to fetch more details of the home and there's no result when user's search query isn't one of the options. Home info is displayed in a grid system where information is categorized. Lastly, user is able to clear result and get more information of the home by clicking on the underlined link.

![Alt Text](https://media.giphy.com/media/40r9H6OkmbZDBDjYJH/giphy.gif)
![Alt Text](https://media.giphy.com/media/pddA73vaxLppPyfGuU/giphy.gif)

## Installation
Install dependencies on both ends.

Navigate to the root (.) that contains server side's dependencies.
```
cd . 
npm install --save
```

Navigate to the `client` directory that contains client side's dependencies
```
cd client
npm install --save
```

Start the program by running both ends.
Server side
```
npm run server
```

Client side
```
npm run start
```

## Technologies
`Node.js` / `Express.js` / `React.js` / `material-ui` / `fast-csv`/ `google-map-react`

Backend:
- Create customized class and initialize an instance to store the houses such that data is presisted once it's parsed from csv file. Use `fast-csv` package to parse csv file.
 ```javascript
 // HouseList.js
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
  
  ... Rest of the file
  ```
  ```javascript
  // server.js
  const express = require('express');
  const app = express();
  const HouseList = require('./HouseList');
  const list = new HouseList(); // Create house list instance.

  /**
   * Initialize house list.
   */
  app.use(async (req, res, next) => {
    if (list.isEmpty()) list.getHousesFromCSV();
    next();
  });
  ```
- Send the address list to the frontend when app is loaded.
```javascript
// server.js
/**
 * Get addresses of the houses.
 */
app.get('/address', (req, res) => {
  const addresses = list.houses.map(house => house["ADDRESS"]);
  res.send(addresses);
});
```
- Get user's search query and send back response.
```javascript
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
```

Frontend
- The page is organzied with this structure. 
  - `SearchContainer`
    - `AutoComplete`
    - `SearchResult`
      - `BasicInfo`
      - `Table`
      - `SimpleMap`
- Return homes that their addresses are similar to user's input, use `material-ui`'s `AutoComplete` Component.
```javascript
<AutoComplete 
  options={option} // Address list
  renderInput={
    params => {
      return (
      <TextField 
        {...params}
        label="Search Address"
      />
    )}
  }
/>
```
- Display info dynamically with reusable component
```javascript
return (
    <Stack>
      <BasicInfo content={basic_info} />
      <Table 
        content={home_facts} 
        header="Home Facts" 
      />
      <Table 
        content={price_insights} 
        header="Price Insights" 
      />
      <Table 
        content={open_house_times}
        header="Open House Times"
      />
      <SimpleMap
        lat={parseFloat(result["LATITUDE"])}
        lng={parseFloat(result["LONGITUDE"])} 
      />
    </Stack>
  );
```
- UI with `matreial-ui`'s `Box`, `Grid` components.
- Import google map with `google-map-react` package, and dynamically re-center map with home address.
```javascript
import GoogleMapReact from "google-map-react";

const SimpleMap = ({ lat, lng }) => {
  const [center, setCenter] = useState(DEFAULT_CENTER);

  useEffect(() => {
    setCenter([lat, lng]);
  }, [lat, lng]);

  return (
    <Box style={{ height: "300px", width: "800px", margin: "20px auto 0" }}>
      <GoogleMapReact 
        center={center}
        zoom={DEFAULT_ZOOM}
      > 
        <Marker 
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
    </Box>
  );
}
```
