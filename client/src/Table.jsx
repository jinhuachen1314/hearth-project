import React from "react";
import PropTypes from 'prop-types';
import { Container, Grid } from "@mui/material";
import styled from 'styled-components';

const GreySpan = styled.span`
  color: grey;
`

const Table = ({ content, header }) => {
  return (
    <Container>
      <h1>{header}</h1>
      <Grid columns={6} container spacing={1}>
        {Object.keys(content).map((key, idx) => {
          return (
            <Grid item key={idx} xs={3}>
              <Grid columns={4} container >
                <Grid item style={{ textAlign: "left" }} xs={2}>
                  <GreySpan>{key}</GreySpan>
                </Grid>
                <Grid item style={{ textAlign: "right" }} xs={2}>
                  {content[key]}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

Table.propTypes = {
  content: PropTypes.object,
  header: PropTypes.string,
}

export default Table;