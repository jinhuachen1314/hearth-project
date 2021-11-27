import React from "react";
import { Container, Grid } from "@mui/material";
import PropTypes from 'prop-types';
import { styled } from "@mui/system";

const BoldSpan = styled("span")({
  fontWeight: "bold",
  padding: 0,
});

const TextSpan = styled("span")({
  fontSize: "1.375rem",
  fontWeight: "600",
  lineHeight: "2rem",
});

const GreyDiv = styled("div")({
  color: "grey",
});

const BasicInfo = ({ content }) => {
  const addressStr = (
    <>
      <BoldSpan>{content["ADDRESS"]}</BoldSpan>, {content["CITY"]}, {content["STATE OR PROVINCE"]} {content["ZIP OR POSTAL CODE"]}
    </>
  );

  return (
    <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "600px" }}>
      <Grid container spacing={1}>
        <Grid item style={{ padding: 0 }}>
          {addressStr}
        </Grid>
        <Grid columns={14} container>
          <Grid item style={{ textAlign: "left" }} xs={5}>
            <TextSpan>{content["PRICE"]}</TextSpan>
          </Grid>
          <Grid item style={{ textAlign: "left" }} xs={3}>
            <TextSpan>{content["BEDS"]}</TextSpan>
            <GreyDiv>Beds</GreyDiv>
          </Grid>
          <Grid item style={{ textAlign: "left" }} xs={3}>
            <TextSpan>{content["BATHS"]}</TextSpan>
            <GreyDiv>Baths</GreyDiv>
          </Grid>
          <Grid item style={{ textAlign: "left" }} xs={3}>
            <TextSpan>{content["SQUARE FEET"]}</TextSpan>
            <GreyDiv>Sq Ft</GreyDiv>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

BasicInfo.propTypes = {
  content: PropTypes.object,
}

export default BasicInfo;