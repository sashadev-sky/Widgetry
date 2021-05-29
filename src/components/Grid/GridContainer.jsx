import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const style = {
  grid: {
    alignContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    width: 'auto'
  }
};

function GridContainer({ ...props }) {
  const {
    classes, children, className, ...rest
  } = props;
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ''
};

GridContainer.propTypes = {
  classes: PropTypes.shape.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default withStyles(style)(GridContainer);
