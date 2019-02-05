
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import mapStyles from "./mapStyles";

import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingContainer = props => (
  <div className={props.classes.maploader}>
    <CircularProgress />
  </div>
);

export default withStyles(mapStyles)(LoadingContainer);
