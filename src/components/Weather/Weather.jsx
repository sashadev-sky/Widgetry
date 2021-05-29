import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Content } from './Content';
import { weatherStyles } from './weatherStyles';

import { toQueryString } from '../../util/weather_utils';


class Weather extends Component {
  state = {
    locData: '',
    locSupport: '',
    weatherData: '',
    weatherSupport: ''
  }

  setLocSupport = () => {
    if ('geolocation' in navigator) {
      this.setState({ locSupport: true }, () => {
        this.locateMe();
      });
    } else {
      this.setState({ locSupport: false });
    }
  }

  locateMe = () => {
    navigator.geolocation.getCurrentPosition(this.setLocation, () => {
      this.setState({ locSupport: false });
    });
  }

  setLocation = locData => {
    this.setState({ locData, locSupport: true }, () => {
      this.pollWeather();
    });
  }

  pollWeather = () => {
    const reqUrl = this.buildRequestUrl();
    this.sendRequestUrl(reqUrl);
  }

  buildRequestUrl = () => {
    const { locData } = this.state;
    let url = 'https://api.openweathermap.org/data/2.5/weather?';
    const [lat, lon] = [locData.coords.latitude, locData.coords.longitude];

    url += toQueryString({ lat, lon });
    // this is a free api key
    const apiKey = '7d76a2fe8b283b85014d6ca60b8a369d';
    url += `&APPID=${apiKey}`;
    return url;
  }

  setWeatherState = (xmlhttp, boolean) => {
    const data = boolean ? xmlhttp.responseText : xmlhttp.statusText;
    const parsedData = JSON.parse(data);
    this.setState({
      weatherData: parsedData,
      weatherSupport: boolean
    });
  }

  sendRequestUrl = reqUrl => {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = () => {
      if (xmlhttp.readyState === 4) {
        const boolean = xmlhttp.status === 200;
        this.setWeatherState(xmlhttp, boolean);
      }
    };

    xmlhttp.onerror = () => {
      const boolean = false;
      this.setWeatherState(xmlhttp, boolean);
    };

    xmlhttp.open('GET', reqUrl, true);
    xmlhttp.send();
  }

  render() {
    const { locSupport, weatherData, weatherSupport } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.spacing}>
        <Content
          weatherData={weatherData}
          locSupport={locSupport}
          setSupport={this.setLocSupport}
          weatherSupport={weatherSupport}
        />
      </div>
    );
  }
}

Weather.propTypes = {
  classes: PropTypes.shape.isRequired
};

export default withStyles(weatherStyles)(Weather);
