import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import GridContainer from "../../assets/jss/Grid/GridContainer";
import GridItem from "../../assets/jss/Grid/GridItem";

import Calculator from "./calculator/calculator";
import Weather from "./weather/weather";
import Clock from "./clock/clock";
import Tabs from "./tabs/tabs";

const panes = [
  {
    id: 1,
    title: "React",
    content:
      "JS library for building UIs. Declarative, Virtual DOM, Diffing Algorithm, one-way binding, JSX. Manages efficient re-rendering, a task left to the developer to handle in jQuery."
  },
  {
    id: 2,
    title: "JSX",
    content:
      "XML-like syntax extension to ECMAScript, intended to be transpiled into std. JS. Defines a concise & familiar syntax for defining tree structures with attributes. Visual aid, helps prevent XSS attacks."
  },
  {
    id: 3,
    title: "jQuery",
    content:
      "JS library that builds on top of the DOMs functionality (wrapper). Interface for DOM manipulation is standardized and simpler than the traditional browser DOM API ."
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, children, className, ...other } = this.props;

    return (
      <Paper className={classNames(classes.root, className)} {...other}>
        <GridContainer>
          <div className="wrap">
            <GridItem xs={12} sm={3} md={3}>
              <Clock />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Tabs panes={panes} />
            </GridItem>
            <Weather />
            <Calculator xs={12} sm={12} md={12} />
          </div>
        </GridContainer>
      </Paper>
    );
  }
}

const styles = {
  root: {
    position: "relative",
    top: -20,
    padding: "20px"
  }
};

App.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(App);
