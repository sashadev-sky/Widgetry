import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const style = {
  grid: {
    marginTop: '30px',
    marginLeft: '15px',
    marginRight: '15px',
    minHeight: '1px',
    paddingLeft: '15px',
    paddingRight: '15px',
    position: 'relative',
    '@media (max-width:768px)': {
      flexBasis: '75%'
    }
  }
};

function GridItem({ ...props }) {
  const {
    classes, children, className, ...rest
  } = props;
  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ''
};

GridItem.propTypes = {
  classes: PropTypes.shape.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default withStyles(style)(GridItem);
