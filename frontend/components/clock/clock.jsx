import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import clockStyles from "./clockStyles";

import AnalogClock, { Themes } from "react-analog-clock";

class Clock extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.spacing}>
        <AnalogClock width={200} theme={Themes.lime} />
      </div>
    );
  }
}

Clock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(clockStyles)(Clock);