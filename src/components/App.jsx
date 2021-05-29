import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { Calculator } from './Calculator/Calculator';
import Clock from './Clock/Clock';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import MapContainer from './Map/MapComponent';
import NoteTabs from './NoteTabs/NoteTabs';
import Weather from './Weather/Weather';


const appStyles = {
  root: {
    position: 'relative'
  },
  wrap: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

const useStyles = makeStyles(appStyles);

export const App = () => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer className={classes.root}>
        <Paper>
          <div className={classes.wrap}>
            <GridItem xs={12} sm={3} md={3}>
              <Clock />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <NoteTabs />
            </GridItem>
            <Weather />
            <Calculator xs={12} sm={12} md={12} />
          </div>
        </Paper>
      </GridContainer>
      <MapContainer />
    </div>
  );
};
