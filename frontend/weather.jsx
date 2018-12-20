import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    //your code here
  }

  componentDidMount() {
    // this method is called after the component is rendered onto the DOM
    // and fetches items from the API to be rendered as a list
    // $.ajax({
    //   url: '/items',
    //   success: items => this.setState({ items });
    // });
  }

  render(){
    return (
      <div>
        <h1>Weather</h1>
         { /* your code will replace this */ }
      </div>
    );
  }
}

export default Weather;