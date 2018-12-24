import React, { Component } from "react";
import PropTypes from "prop-types";

import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

export class SearchContainer extends Component {
  constructor(props) {
    super(props);
      this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.props.saveRef(this.inputRef);
    this.attachAutocomplete(this.inputRef.current);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps.map) {
      this.attachAutocomplete(this.inputRef.current);
    }
  }

  attachAutocomplete = (htmlEl) => {
    let opts = { types: ["(cities)"] };
    let pl = new google.maps.places.Autocomplete(htmlEl, opts);
    pl.addListener("place_changed", () => {
      let place = pl.getPlace();

      if (!place.geometry) return;

      this.props.changeHandler(place, this.props.map);
    });
  };

  // prevent default action in case the user hits enter
  handleSubmit = e => e.preventDefault();

  render() {
    const { searchDisplay, classes, clickHandler } = this.props;
  
    return (
      <div className="sidebar" role="search" style={{ zIndex: `${searchDisplay}` }}>
        <Paper className={classes.root} >
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              ref={this.inputRef} 
              placeholder="Enter a city name" 
              className="searchInput" 
              role="combobox"
              aria-label="search"
              aria-autocomplete="list"
              aria-controls="search-results"
            />
              <IconButton 
                aria-label="clear" 
                className={classes.button} 
                onClick={(e) => clickHandler(this.inputRef, e)}>
              <ClearIcon className={classes.icon} />
              </IconButton>
            <Divider className={classes.divider} />
            </form>
          </Paper> 
      </div>
    );
  }
}

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    width: 275,
    position: "absolute",
    height: 59,
    ["@media (max-width:550px)"]: {
      width: 205,
      bottom: 33,
      left: 5
    }
  },
  button: {
    padding: "10px",
    top: "16px",
    right: "15px",
    position: "absolute",
    ["@media (max-width:450px)"]: {
      right: "10px"
    }
  },
  icon: {
    fontSize: "15px"
  },
  divider: {
    width: 200,
    height: 2,
    margin: 2,
    position: "relative",
    bottom: "-47px",
    left: "21px",
    font: "900",
    color: "gray",
    ["@media (max-width:600px)"]: {
      width: "130px"
    },
    ["@media (max-width:450px)"]: {
      width: 135
    }
  }
};

SearchContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchContainer);
