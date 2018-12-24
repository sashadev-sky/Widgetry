import React from 'react';
import PropTypes from "prop-types";

import { extractData, dateConverter } from '../../util/weather_utils'

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import LocationIcon from "@material-ui/icons/LocationOn";
import Card from "../../../assets/jss/Card/Card";
import imageCardStyles from "../../../assets/jss/imageCardStyles";

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
          <div className={classes.loader}>
            <CircularProgress color="primary" className={classes.progress} />
          </div>
        );
      case false:
        return <div>Please enable location services</div>;
      default:
        return (
          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="default"
              onClick={() => setSupport()}
            >
              Fetch Weather
            </Button>
          </div>
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
          src="../../screenshots/pic2.png"
          alt="Card-img"
        />
        <div className={classes.imgCardOverlay}>
          <LocationIcon className={classes.locIcon} />
          <h4 
            className={classes.cardTitle}>
            {weatherData.name}
          </h4>
          <div className={classes.cardSection}>
            <p className="innerDates">{weekday} - {month} {day}</p>
          </div >
          <div className={classes.cardBody}>
            <p>{main} {description}</p>
          </div>
          <div className={classes.cardSection}>
            <p>Sunrise: {sunrisetime}</p>
            <p>Sunset: {sunsettime}</p>
            <p>Feels like: {main}</p>
          </div>

        </div>
      </Card>
    );
  }
}

// css injected into the DOM
const styles = theme => ({
  root: {
    color: "white",
    fontSize: "15px"
  },
  loader: {
    marginLeft: "20px",
    marginTop: "20px",
    width: "450px"
  },
  ...imageCardStyles,
  progress: {
    margin: theme.spacing.unit * 4
  },
  locIcon: {
    margin: "0px 5px",
    width: "30px",
    height: "32px",
    ["@media (max-width:600px)"]: {
      width: "26px",
      height: "26px"
    }
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginTop: "10px",
    marginLeft: "-10px"
  }
});

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);