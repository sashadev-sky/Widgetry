# React Widgetry

- Fully responsive set of reusable components made with React 

- Integrates various APIs onto a single platform for a user to have available at their fingertips

- User-centered design that includes crowd-pleasing features
such as parallax scrolling and a subtly matching color palette. 

Environment Setup:
  - React
  - Node
  - Babel
  - Webpack

## Clock Widget

- Analog clock component

## Tabs Widget 

- Interactive tabs widget that updates panes

- Useful for storing quick summaries or notes

## Calculator Widget

- Supports basic arithmetic operations

## Weather Widget

- Uses the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to update the weather based on the user's current location

- Uses the XMLHttpRequest object to make asynchronous HTTP requests to the [OpenWeatherMap API](https://openweathermap.org/)

- Follows the W3C standard to only access user location upon user gesture


<details><summary><strong>Geolocation API</strong></summary>

On a very basic level:

  1. Check if Geolocation is supported:

  ```JavaScript
  if ("geolocation" in navigator) { 
  // geolocation is available 
  } else {
  // geolocation IS NOT available
  }
  ```

  2. If supported, run the `getCurrentPosition()
  ` method asynchronously. If not, display a message to the user

  3.  If the `getCurrentPosition()` method is successful, it returns a `Position` object to the function specified in the parameter (cb)

  4. The cb function references a `Coordinates` obj on the passed `Position` obj to access the `latitude` and `longitude` properties

  </details>

## Explore Widget:

- Uses a wrapper to integrate the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) with React.

- Uses the [Google Places API](https://developers.google.com/places/web-service/intro) to allow dynamic querying of cities all over the world on an interactive and responsive map. 

- Does not start off in your current location - it's meant for looking around

- Standard Google map Features implemented:
  
  - Autocomplete functionality for queries

  - Location markers corresponding with information windows containing location data

- Additional Custom features extending the API: 

  - Customized UI layer

  - Ability to toggle search bar for a full map view

  - Home button to always return the map to a set origin 

<br>

#### React Concepts (Personal Use)
<hr>

<details>

<summary>Higher-Order Components (HOCs)</summary> <br>

> "Concretely, a higher-order component is a function that takes a component and returns a new component."

</details>

<br>

<details>

<summary>Typechecking with PropTypes</summary> <br>

> "React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property."

</details>

<br>

- React with JSS for more powerful, declarative styling


##### 1. Clock:

- Lifecycle methods


##### 2. Tabs: 

- Extracting components

- Lists and Keys


##### 3. Calculator:

- Lifting state up

- Controlled inputs

##### 4. Explore:

- Refs

- Integrating third-party libraries


