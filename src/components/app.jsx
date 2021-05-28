import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Calculator from './Calculator/Calculator';
import Clock from './Clock/Clock';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import MapContainer from './Map/MapComponent';
import Parallax from './Parallax/Parallax';
import TabsContainer from './Tabs/TabsContainer';
import Weather from './Weather/Weather';


const App = props => {
  const { classes, children, className, ...other } = props;
  return (
    <GridContainer className={classNames(classes.root, className)} {...other}>
      <Parallax>
        <Paper>
          <div className={classes.wrap}>
            <GridItem xs={12} sm={3} md={3}>
              <Clock />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <TabsContainer />
            </GridItem>
            <Weather />
            <Calculator xs={12} sm={12} md={12} />
          </div>
        </Paper>
      </Parallax>
      <MapContainer />
    </GridContainer>
  );
};

const styles = {
  root: {
    position: 'relative',
    top: -20,
    padding: 20,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

App.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(App);
