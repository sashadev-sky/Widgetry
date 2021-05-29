import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { mapStyles } from './mapStyles';


const LoadingContainer = props => (
  <div className={props.classes.maploader}>
    <CircularProgress />
  </div>
);

LoadingContainer.propTypes = {
  classes: PropTypes.shape.isRequired
};

export default withStyles(mapStyles)(LoadingContainer);
