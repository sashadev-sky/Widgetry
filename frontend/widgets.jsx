import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather'

const panes = [
  { title: '1', content: 'I am tab #1' },
  { title: '2', content: 'I am tab #2' },
  { title: '3', content: 'I am tab #3' }
];

function Root() {
  return(
    <div>
      <Clock />
      <Tabs panes={panes} />
      <Weather />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});