import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/Root';

import './reset.css';
import './index.css';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  ReactDOM.render(<Root />, root);
});
