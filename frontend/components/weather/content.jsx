import React from 'react';
import PropTypes from "prop-types";

import { extractData, dateConverter } from '../../util/weather_utils'

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import LocationIcon from "@material-ui/icons/LocationOn";
import Card from "../../../assets/jss/Card/Card";

import weatherStyles from "./weatherStyles";

let description;
let main;
let sunrisetime;
let sunsettime;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  noWeatherData = () => {
    const { locSupport, classes, setSupport } = this.props;
    switch (locSupport) {
      case true:
        return (
          <Card className={classes.root}>
            <img
              className={classes.imgCard}
              src="../../../assets/imgs/background.png"
              alt="Card-img"
            />
            <div className={classes.imgCardOverlay}>
              <div className={classes.loader}>
                <CircularProgress color="primary" className={classes.progress}/>
              </div>
            </div>
          </Card >
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
            <img
              className={classes.imgCard}
              src="../../../assets/imgs/background.png"
              alt="Card-img"
            />
            <div className={classes.buttonBackdrop}>
              <Button
                className={classes.button}
                variant="contained"
                color="default"
                onClick={() => setSupport()}
              >
                Fetch Weather
              </Button>
            </div>
          </Card>
        );
    }
  };

  noWeatherSupport = () => <div>Error fetching weather :(</div>;

  parseWeatherData = () => {
    let myobj = extractData(this.props.weatherData);
    if (myobj.a) description = myobj.a;
    if (myobj.b) main = myobj.b;
    sunsettime = myobj.c;
    sunrisetime = myobj.d;
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let date = new Date();
    this.setState({ date });
  }

  render() {
    const { classes, weatherData, weatherSupport } = this.props;
    const { date } = this.state;
    const { weekday, month, day } = dateConverter(date);

    if (!weatherData) {
      return this.noWeatherData();
    } else if (!weatherSupport) {
      return this.noWeatherSupport();
    } else {
      this.parseWeatherData();
    }

    return (
      <Card className={classes.root}>
        <img
          className={classes.imgCard}
          src="../../../assets/imgs/background.png"
          alt="Card-img"
        />
        <div className={classes.imgCardOverlay}>
          <LocationIcon className={classes.locIcon} />
          <h4 
            className={classes.cardTitle}>
            {weatherData.name}
          </h4>
          <div className={classes.cardBody}>
            <p>{weekday} - {month} {day}</p>
          <div className={classes.cardMiddleSection}>
            <p>{main} {description}</p>
          </div>
          <div className={classes.cardSection}>
            <p>Sunrise: {sunrisetime}</p>
            <p>Sunset: {sunsettime}</p>
            <p>Feels like: {main}</p>
          </div>
        </div>
        </div>
      </Card>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(weatherStyles)(Content);