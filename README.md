# React Widgetry

- Set of reusable components made with React

- Integrates various APIs onto a single platform for a user to have available at their fingertips

- User-centered and fully responsive design

---

## Environment

- React 16.14.0 (Framework)

- Node 16.2.0 (Environment)

- npm 7.13.0 (Package Manager)

- Webpack 5.x (Bundler)

- Babel 7.x (Transpiler)

---

## Setup

In the project directory, you can run:

**Development**

* `npm install` - Install dependencies

* `npm start` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

**Production**

* `npm run build` - Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified.

* `npm run serve` - Serves the production build.

---

## Components

### Clock Widget

- Analog clock component

### Tabs Widget

- Interactive tabs widget that updates panes

- Useful for storing quick summaries or notes

### Calculator Widget

- Supports basic arithmetic operations

### Weather Widget

- Uses the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to update the weather based on the user's current location

- Uses the XMLHttpRequest object to make asynchronous HTTP requests to the [OpenWeatherMap API](https://openweathermap.org/)

- Follows the W3C standard to only access user location upon user gesture

<details><summary><strong>Geolocation API</strong></summary>

On a very basic level:

  1. Check if Geolocation is supported:

  ```JavaScript
  if ('geolocation' in navigator) {
  // geolocation is available
  } else {
  // geolocation IS NOT available
  }
  ```

  2. If supported, run the `getCurrentPosition()` method asynchronously. If not, display a message to the user

  3. If the `getCurrentPosition()` method is successful, it returns a `Position` object to the function specified in the parameter (cb)

  4. The cb function references a `Coordinates` obj on the passed `Position` obj to access the `latitude` and `longitude` properties

  </details>

### Explore Widget

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

---

## Styling

Dependencies:

- `@material-ui/core` 4.11.4 (Styling)

- `@material-ui/icons` 4.11.2 (Icons)

- `clsx` 1.1.1

### Material-UI's  `withStyles` & `makeStyles`

Material-UI provides React components for faster and easier web development.

It is built with a CSS-in-JS solution, specifically **JSS** (**JavaScript Style Sheets**) - a high performance JavaScript to CSS compiler which works at runtime and server-side.

This project uses their **`withStyles`** function as part of their Higher-order component API.

<ul><li><details><summary>Example - by calling <code><b>withStyles(styles)(MyComponent)</b></code>, you’re returning a new component that has a <code><b>classes</b></code> property. </summary>

```Javascript
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //...
  },
};

function HigherOrderComponent(props) {
  const { classes } = props;
  return <Button className={classes.root}>Higher-order component</Button>;
};

HigherOrderComponent.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
```

</li></ul></details>

Moving towards the pattern of using functional components and hooks, some componenents that already rely on state hooks leverage Material-UI style hooks with **`makeStyles()`**.

The **`useStyles()`** hook is built using the **`makeStyles()`** function—which takes the exact same styles argument as **`withStyles()`**.

<ul><li><details><summary>Example - by calling <code><b>useStyles()</b> </code>within the component, you have your <code><b>classes</b></code>object </summary>:

```Javascript
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    //...
  },
};

const useStyles = makeStyles(styles);

export function Hook(props) {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
};
```

</details></li></ul>

### clsx's `clsx`

`clsx` is a tiny utility for constructing `className` strings conditionally, making it easier to concatenate classes.

It is a faster & smaller drop-in replacement for the `classnames` module, which it shares almost an identical API with.

react-widgets uses it to create clean `className` declarations with the **`clsx`** function.

<details><summary>Example - this syntax means that some class will only be applied if a given condition evaluates to true.</summary>

```Javascript
import React from 'react';
import clsx from 'clsx';

const menuStyle = clsx({
  [classes.root] : true, //always applies
  [classes.menuOpen] : open //only when open === true
});

return (
  <div className={menuStyle}>
    {children}
  </div>
);
```

</details>

<details><summary>Example 2 - another common use case is to achieve cleaner string interpolation.</summary>

<br>

Instead of

```Javascript
<div className={`${classes.foo} ${classes.bar} ${classes.baz}`} />
```

You can use it like this

```Javascript
const { foo, bar, baz } = classes
<div className={clsx(foo, bar, baz)} />
```

</details>

---

## Typechecking

**`prop-types`**: nodejs library to set properties for components

<details><summary>Example</summary>

```Javascript
import PropTypes from 'prop-types';

class ComponentName extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

ComponentName.propTypes = {
  name: PropTypes.string
};

```

</details>

---

### Concepts (Personal Use)

---

<details>
  <summary>Event Listeners</summary>
  <br/>
  Using ES6 arrow functions allows us to define event listeners inside of components without having to do
  <code>this.listenerName = this.listenerName.bind(this);</code>
</details>

<details>
  <summary>JSS</summary>
  <br/>
  Using React with JSS for more powerful, declarative styling
</details>

<details>
  <summary>Higher-Order Components (HOCs)</summary>
  <br/>
  > "Concretely, a higher-order component is a function that takes a component and returns a new component."
</details>

<details>
  <summary>Typechecking with PropTypes</summary>
  <br/>
  > "React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property."
</details>

##### 1. Clock

- Lifecycle methods

##### 2. Tabs

- Extracting components

- Lists and Keys

##### 3. Calculator

- Lifting state up

- Controlled inputs

##### 4. Explore

- Refs

- Integrating third-party libraries
