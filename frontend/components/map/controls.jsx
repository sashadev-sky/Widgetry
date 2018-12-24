import React from 'react';
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import Divider from "@material-ui/core/Divider";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { classes, onSearchClick, onHomeClick } = this.props;
    return (
      <Paper className={classes.root} >
      <IconButton aria-label="Search" onClick={() => onSearchClick()}>
        <SearchIcon className={classes.icon} />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton onClick={() => onHomeClick()}>
          <HomeIcon className={classes.icon2} />
      </IconButton>
      </Paper>
    );
  }
} 

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 100,
    position: "relative",
    left: `43%`,
    height: 36,
    top: 10,
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
    borderTopLeftRadius: "2px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "2px",
    ["@media (max-width:1000px)"]: {},
    ["@media (max-width:600px)"]: {
      transform: "rotate(90deg)",
      left: "-6%",
      position: "absolute",
      top: 117
    },
    ["@media (max-width:450px)"]: {
      left: "-8%"
    },
    ["@media (max-width:350px)"]: {}
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  icon: {
    color: green[600],
    ["@media (max-width:600px)"]: {
      transform: "rotate(-90deg)"
    }
  },
  icon2: {
    color: blue[600],
    ["@media (max-width:600px)"]: {
      transform: "rotate(-90deg)"
    }
  }
};

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Controls);




