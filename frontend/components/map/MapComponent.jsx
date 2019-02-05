import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import SearchContainer from "./searchContainer";
import Controls from "./controls";
import LoadingContainer from "./loadingContainer"

import { withStyles } from "@material-ui/core/styles";

import mapStyles from "./mapStyles";

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
      ref: '',
      mapStyle: { borderRadius: "10px" }
    };
  }

  onMapReady = (map, google) => {
    MapWrapper({ map, google });
  }

  fetchPlace(place, map) {
    let loc = place.geometry.location;
    let viewPort = place.geometry.viewport;

    if (loc) {
      let center = { lat: loc.lat(), lng: loc.lng() };
      this.setState({ center });
    }

    if (viewPort) {
      map.fitBounds(viewPort);
      let zoom = map.getZoom();
      this.setState({ zoom })
    }
    else {
      map.setCenter(loc);
      map.setZoom(13);
      let zoom = map.getZoom();
      this.setState({ zoom })
    }

    this.setState({ showingMarker: true });
  }

  onSearchClick = () => {
    if (this.state.ref) this.clearTextField(this.state.ref);
    let disp = this.state.searchDisplay === 0 ? -10 : 0
    this.setState(state => ({ 
      searchDisplay: disp
    }));
  }

  clearTextField = (ref, e) => {
    let thisRef = ref
    thisRef.current.value = ''
  }

  onHomeClick = () => {
    let initial = MapContainer.INITIAL;
    this.setState(state => ({ 
      center: initial.center, 
      zoom: initial.zoom, 
      showingMarker: false, 
      selectedPlace: {}, 
      showingInfoWindow: false 
    }));
  }

  saveRef = (ref) => {
    this.setState({ ref })
  }

  onMarkerClick = (props, marker) => {
    this.setState(state => ({
      activeMarker: marker,
      showingInfoWindow: !state.showingInfoWindow
    }));
  };

  render() {
    MapContainer.INITIAL = { center: { lat: 41.2044, lng: 74.7661 }, zoom: 3, };
    const {
      center,
      showingInfoWindow,
      searchDisplay,
      showingMarker,
      activeMarker,
      selectedPlace,
      zoom,
      mapStyle
    } = this.state;

    let [lat, lng] = ["", ""];

    if (selectedPlace.geometry) {
      [lat, lng] = [
        selectedPlace.geometry.location.lat(),
        selectedPlace.geometry.location.lng()
      ];
    }

    return (
      <div 
        className={this.props.classes.mainComp}
      >
        <div 
          className="mapComponent" 
          style={{ 
            position: "relative", 
            height: "500px", 
            width: "80%", 
            bordeRadius: "20px" 
          }}
        >
          <Map 
            google={this.props.google} 
            zoom={zoom} 
            initialCenter={MapContainer.INITIAL.center} 
            center={center}
            onReady={this.onMapReady}
            style={mapStyle}
          >
            <SearchContainer 
              changeHandler={this.fetchPlace.bind(this)} 
              center={center} 
              searchDisplay={searchDisplay}
              clickHandler={this.clearTextField.bind(this)}
              saveRef={this.saveRef.bind(this)}
            />
            <Controls
              onSearchClick={this.onSearchClick.bind(this)}
              onHomeClick={this.onHomeClick.bind(this)} 
            />
            <Marker 
              visible={showingMarker}
              position={center} 
              onClick={this.onMarkerClick} 
              icon={{ 
                url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png", 
                anchor: new google.maps.Point(12, 32), 
                scaledSize: new google.maps.Size(24, 32) 
              }} 
            />
            <InfoWindow 
              marker={activeMarker} 
              visible={showingInfoWindow}
            >
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

export const MapWrapper = ({...props }) => (
  <Map google={props.google} visible={false}>
    {props.children}
  </Map>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyCfqtT00nvDXnjmYMkiYynVqalHjKpkNG4",
  libraries: ["places"],
  v: "3.30",
  LoadingContainer: LoadingContainer
})(withStyles(mapStyles)(MapContainer));


