import React, { Component } from "react";
import PropTypes from "prop-types";

import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import mapStyles from "./mapStyles";

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
      <div className={classes.sidebar} role="search" style={{ zIndex: `${searchDisplay}` }}>
        <Paper className={classes.searchBar} >
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              ref={this.inputRef} 
              placeholder="Enter a city name" 
              className={classes.searchInput}
              role="combobox"
              aria-label="search"
              aria-autocomplete="list"
              aria-controls="search-results"
            />
              <IconButton 
                aria-label="clear" 
                className={classes.clearButton} 
                onClick={(e) => clickHandler(this.inputRef, e)}>
              <ClearIcon className={classes.clearicon} />
              </IconButton>
            <Divider className={classes.searchBarDivider} />
            </form>
          </Paper> 
      </div>
    );
  }
}

export default withStyles(mapStyles)(SearchContainer);
