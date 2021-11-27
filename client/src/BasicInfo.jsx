import React from "react";
import { Grid, Link } from "@mui/material";
import PropTypes from 'prop-types';
import { styled } from "@mui/system";

const URL_KEY = "URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)";

const BoldSpan = styled("span")({
  fontWeight: "bold",
  padding: 0,
});

const TextDiv = styled("div")({
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
    <Grid container sx={{ width: "500px", margin: "20px auto 0", textAlign: "left" }}>
      <Grid item>
        {addressStr} 
      </Grid>
      <Grid container style={{ justifyContent: "space-between"}}>
        <Grid item>
          <TextDiv>{content["PRICE"]}</TextDiv>
          <Link href={content[URL_KEY]}>Go to detail page</Link>
        </Grid>
        <Grid item>
          <TextDiv>{content["BEDS"]}</TextDiv>
          <GreyDiv>Beds</GreyDiv>
        </Grid>
        <Grid item>
          <TextDiv>{content["BATHS"]}</TextDiv>
          <GreyDiv>Baths</GreyDiv>
        </Grid>
        <Grid item>
          <TextDiv>{content["SQUARE FEET"]}</TextDiv>
          <GreyDiv>Sq Ft</GreyDiv>
        </Grid>
      </Grid>
    </Grid>
  );
}

BasicInfo.propTypes = {
  content: PropTypes.object,
}

export default BasicInfo;