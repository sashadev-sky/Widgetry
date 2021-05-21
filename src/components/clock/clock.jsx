import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AnalogClock, { Themes } from 'react-analog-clock';

import { clockStyles } from './clockStyles';

const Clock = props => {
  const { classes } = props;
  return (
    <div className={classes.spacing}>
      <AnalogClock width={200} theme={Themes.lime} />
    </div>
  );
};

Clock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(clockStyles)(Clock);
