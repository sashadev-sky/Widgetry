import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocationIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../Card/Card';

import { extractData, dateConverter } from '../../util/weather_utils';

import { weatherStyles } from './weatherStyles';
import { primaryColor } from '../colors';

import img1 from '../../../public/weather.webp';


const useStyles = makeStyles(weatherStyles);

let description;
let main;
let sunrisetime;
let sunsettime;
let timerID;

export function Content(props) {
  const {
    locSupport,
    setSupport,
    weatherData,
    weatherSupport
  } = props;

  const classes = useStyles();

  const getDate = () => new Date();

  const [date, setDate] = useState(getDate);

  const noWeatherData = () => {
    switch (locSupport) {
      case true:
        return (
          <Card className={classes.root}>
            <img className={classes.imgCard} src={img1} alt='Card-img' />
            <div className={classes.imgCardOverlay}>
              <div className={classes.loader}>
                <CircularProgress
                  color={primaryColor}
                  className={classes.progress}
                />
              </div>
            </div>
          </Card>
        );
      case false:
        return (
          <div className={classes.message}>
            <span className={classes.messageText}>
              Please enable location services
            </span>
          </div>
        );
      default:
        return (
          <Card className={classes.root}>
            <img className={classes.imgCard} src={img1} alt='Card-img' />
            <div className={classes.buttonBackdrop}>
              <Button className={classes.button} onClick={setSupport}>
                Fetch Weather
              </Button>
            </div>
          </Card>
        );
    }
  };

  const noWeatherSupport = () => <div>Error fetching weather :(</div>;

  const parseWeatherData = () => {
    const myobj = extractData(weatherData);
    if (myobj.a) { description = myobj.a; }
    if (myobj.b) { main = myobj.b; }
    sunsettime = myobj.c;
    sunrisetime = myobj.d;
  };

  useEffect(() => {
    if (locSupport) { timerID = setInterval(() => tick(), 1000); }
    return () => {
      if (timerID) { clearInterval(timerID); }
    };
  }, [locSupport]);

  const tick = () => setDate(getDate());

  const { weekday, month, day } = dateConverter(date);

  if (!weatherData) { return noWeatherData(); }
  if (!weatherSupport) { return noWeatherSupport(); }
  parseWeatherData();

  return (
    <Card className={classes.root}>
      <img className={classes.imgCardBg} src={img1} alt='Card-img' />
      <div className={classes.imgCardOverlay}>
        <LocationIcon className={classes.locIcon} />
        <h4 className={classes.cardTitle}>{weatherData.name}</h4>
        <div className={classes.cardBody}>
          <p>
            {weekday}
            ,
            {' '}
            {month}
            {' '}
            {day}
          </p>
          <div className={classes.cardMiddleSection}>
            <p>
              {main}
              {' '}
              {description}
            </p>
          </div>
          <div className={classes.cardSection}>
            <p>
              Sunrise:
              {' '}
              {sunrisetime}
            </p>
            <p>
              Sunset:
              {' '}
              {sunsettime}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

Content.defaultProps = {
  locSupport: '',
  weatherData: '',
  weatherSupport: ''
};

Content.propTypes = {
  locSupport: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setSupport: PropTypes.func.isRequired,
  weatherData: PropTypes.shape,
  weatherSupport: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
