import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { mapStyles } from './mapStyles';


const LoadingContainer = props => (
  <div className={props.classes.maploader}>
    <CircularProgress />
  </div>
);

export default withStyles(mapStyles)(LoadingContainer);
