import React from "react";
import PropTypes from 'prop-types';
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const GreySpan = styled("span")({
  color: "grey",
});

const Table = ({ content, header }) => {
  return (
    <Box sx={{ width: "800px", margin: "auto" }}>
      <h2>{header}</h2>
      <Grid columnSpacing={10} columns={2} container>
        {Object.keys(content).map((key, idx) => {
          return (
            <Grid item key={idx} xs={1}>
              <Grid container>
                <Grid item style={{ textAlign: "left" }} xs={1}>
                  <GreySpan>{key}</GreySpan>
                </Grid>
                <Grid item style={{ textAlign: "right" }} xs={1}>
                  {content[key]}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

Table.propTypes = {
  content: PropTypes.object,
  header: PropTypes.string,
}

export default Table;