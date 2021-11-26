import React from "react";
import { Container, Grid } from "@mui/material";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoldSpan = styled.span`
  font-weight: bold;
`

const BasicInfo = ({ content }) => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={8}>
          <BoldSpan>{content["ADDRESS"]}</BoldSpan> {`${content["CITY"]} ${content["STATE OR PROVINCE"]} ${content["ZIP OR POSTAL CODE"]}`}
        </Grid>
        <Grid item xs={8}>
          {content["PRICE"]} {content["BEDS"]} {content["BATHS"]} {content["SQUARE FEET"]} 
        </Grid>
      </Grid>
    </Container>
  );
}

BasicInfo.propTypes = {
  content: PropTypes.object,
}

export default BasicInfo;