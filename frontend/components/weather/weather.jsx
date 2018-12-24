import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { toQueryString } from "../../util/weather_utils";

import Content from "./content";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locData: "",
      locSupport: "",
      weatherData: "",
      weatherSupport: ""
    };

    this.setLocSupport = this.setLocSupport.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.pollWeather = this.pollWeather.bind(this);
  }

  setLocSupport() {
    if ("geolocation" in navigator) {
      this.setState({ locSupport: true }, () => {
        this.locateMe();
      });
    } else {
      this.setState({ locSupport: false });
    }
  }

  locateMe() {
    navigator.geolocation.getCurrentPosition(this.setLocation, () => {
      this.setState({ locSupport: false });
    });
  }

  setLocation(locData) {
    this.setState({ locData, locSupport: true }, () => {
      this.pollWeather();
    });
  }

  pollWeather() {
    let reqUrl = this.buildRequestUrl();
    this.sendRequestUrl(reqUrl);
  }

  buildRequestUrl() {
    let { locData } = this.state;
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    let [lat, lon] = [locData.coords.latitude, locData.coords.longitude];

    url += toQueryString({lat, lon});
    // this is a free api key
    const apiKey = "7d76a2fe8b283b85014d6ca60b8a369d";
    url += `&APPID=${apiKey}`;
    return url;
  }

  setWeatherState(xmlhttp, boolean) {
    const data = boolean ? xmlhttp.responseText : xmlhttp.statusText;
    const parsedData = JSON.parse(data);
    this.setState({
      weatherData: parsedData,
      weatherSupport: boolean
    });
  }

  sendRequestUrl(reqUrl) {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = () => {
      if (xmlhttp.readyState === 4) {
        const boolean = xmlhttp.status === 200 ? true : false;
        this.setWeatherState(xmlhttp, boolean);
      }
    };

    xmlhttp.onerror = () => {
      const boolean = false;
      this.setWeatherState(xmlhttp, boolean);
    };

    xmlhttp.open("GET", reqUrl, true);
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

const styles = {
  spacing: {
    margin: "30px 15px",
    marginTop: "0",
    maxWidth: "350px"
  }
};

Weather.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Weather);
