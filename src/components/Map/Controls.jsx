import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';

import { mapStyles } from './mapStyles';


const Controls = props => {
  const { classes, onSearchClick, onHomeClick } = props;
  return (
    <Paper className={classes.root}>
      <IconButton aria-label='Search' onClick={() => onSearchClick()}>
        <SearchIcon className={classes.icon} />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton onClick={() => onHomeClick()}>
        <HomeIcon className={classes.icon2} />
      </IconButton>
    </Paper>
  );
};

Controls.propTypes = {
  classes: PropTypes.shape.isRequired,
  onHomeClick: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired
};

export default withStyles(mapStyles)(Controls);
