import React, { useEffect, useState } from 'react';
import GoogleMapReact from "google-map-react";
import { Box, styled } from '@mui/system';
import PropTypes from 'prop-types';

const DEFAULT_CENTER = [37.733795, -122.446747];
const DEFAULT_ZOOM = 14;

const MarkerDiv = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "18px",
  height: "18px",
  border: "2px solid #fff",
  borderRadius: "100%",
  userSelect: "none",
  transform: "translate(-50%, -50%)",
  backgroundColor: "red",
});

const Marker = (props) => {
  return (
    <MarkerDiv />
  );
}

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

const MAP_PROP_TYPES = {
  lat: PropTypes.string,
  lng: PropTypes.string,
};

SimpleMap.propTypes = MAP_PROP_TYPES;

export default SimpleMap;