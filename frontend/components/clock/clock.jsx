import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import AnalogClock, { Themes } from "react-analog-clock";

class Clock extends React.Component {

  render() {
    return (
      <div className={this.props.classes.spacing}>
        <AnalogClock width={200} theme={Themes.lime} />
      </div>
    );
  }
}

const styles = {
  spacing: {
    marginLeft: "-15px",
    marginTop: "30px",
    ["@media (max-width:599px)"]: {
      marginLeft: "25%",
    },
    ["@media (max-width:460px)"]: {
      marginLeft: "20%",
    }
  }
};

Clock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Clock);