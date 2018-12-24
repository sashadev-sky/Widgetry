import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import AnalogClock, { Themes } from "react-analog-clock";

class Clock extends React.Component {

  render() {
    return (
      <div className="clockComponent">
        <AnalogClock width={200} theme={Themes.lime} />
      </div>
    );
  }
}

const styles = {
  spacing: {
    margin: "15px auto",
    marginTop: "20px"
  }
};

Clock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Clock);