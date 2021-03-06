import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';
import { withStyles } from '@material-ui/core/styles';

import SearchContainer from './SearchContainer';
import Controls from './Controls';
import LoadingContainer from './LoadingContainer';

import { mapStyles } from './mapStyles';


class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {},
      showingInfoWindow: false,
      showingMarker: false,
      searchDisplay: -10,
      activeMarker: {},
      selectedPlace: {},
      zoom: 3,
      ref: ''
    };
  }

  fetchPlace = (place, map) => {
    const loc = place.geometry.location;
    const viewPort = place.geometry.viewport;

    if (loc) {
      const center = { lat: loc.lat(), lng: loc.lng() };
      this.setState({ center });
    }

    if (viewPort) {
      map.fitBounds(viewPort);
      const zoom = map.getZoom();
      this.setState({ zoom });
    } else {
      map.setCenter(loc);
      map.setZoom(13);
      const zoom = map.getZoom();
      this.setState({ zoom });
    }

    this.setState({ showingMarker: true, selectedPlace: place });
  }

  onSearchClick = () => {
    if (this.state.ref) this.clearTextField(this.state.ref);
    const disp = this.state.searchDisplay === 0 ? -10 : 0;
    this.setState(state => ({
      searchDisplay: disp
    }));
  };

  clearTextField = (ref, e) => {
    const thisRef = ref;
    thisRef.current.value = '';
  };

  onHomeClick = () => {
    const initial = MapContainer.INITIAL;
    this.setState(state => ({
      center: initial.center,
      zoom: initial.zoom,
      showingMarker: false,
      selectedPlace: {},
      showingInfoWindow: false
    }));
  };

  saveRef = ref => {
    this.setState({ ref });
  };

  onMarkerClick = (props, marker) => {
    this.setState(state => ({
      activeMarker: marker,
      showingInfoWindow: !state.showingInfoWindow
    }));
  };

  render() {
    MapContainer.INITIAL = { center: { lat: 41.2044, lng: 74.7661 }, zoom: 3 };
    const {
      center,
      showingInfoWindow,
      searchDisplay,
      showingMarker,
      activeMarker,
      selectedPlace,
      zoom
    } = this.state;

    const { classes, google } = this.props;

    let [lat, lng] = ['', ''];

    if (selectedPlace.geometry) {
      [lat, lng] = [
        selectedPlace.geometry.location.lat(),
        selectedPlace.geometry.location.lng()
      ];
    }

    return (
      <div className={classes.mainComp}>
        <div className={classes.mapComponent}>
          <Map
            google={google}
            zoom={zoom}
            initialCenter={MapContainer.INITIAL.center}
            center={center}
            style={{ borderRadius: '10px' }}
          >
            <SearchContainer
              changeHandler={this.fetchPlace}
              center={center}
              searchDisplay={searchDisplay}
              clickHandler={this.clearTextField}
              saveRef={this.saveRef}
            />
            <Controls
              onSearchClick={this.onSearchClick}
              onHomeClick={this.onHomeClick}
            />
            <Marker
              visible={showingMarker}
              position={center}
              onClick={this.onMarkerClick}
              icon={{
                url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
                anchor: new google.maps.Point(12, 32),
                scaledSize: new google.maps.Size(24, 32)
              }}
            />
            <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
              <div>
                <h1>{selectedPlace.formatted_address}</h1>
                <p>
                  lat:
                  <span>{lat}</span>
                </p>
                <p>
                  lon:
                  <span>{lng}</span>
                </p>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

MapContainer.propTypes = {
  classes: PropTypes.shape.isRequired,
  google: PropTypes.shape.isRequired
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfqtT00nvDXnjmYMkiYynVqalHjKpkNG4',
  libraries: ['places'],
  v: '3.30',
  LoadingContainer
})(withStyles(mapStyles)(MapContainer));
