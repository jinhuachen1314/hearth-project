import React from "react";
import PropTypes from 'prop-types';
import { Grid } from "@mui/material";
import { Box, styled } from "@mui/system";

const GreySpan = styled("span")({
  color: "grey",
});

const Table = ({ content, header }) => {
  return (
    <Box>
      <h1>{header}</h1>
      <Grid columns={4} container spacing={1}>
        {Object.keys(content).map((key, idx) => {
          return (
            <Grid columns={4} container key={idx} xs={2}>
              <Grid item style={{ textAlign: "left" }} xs={2}>
                <GreySpan>{key}</GreySpan>
              </Grid>
              <Grid item style={{ textAlign: "right" }} xs={2}>
                {content[key]}
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