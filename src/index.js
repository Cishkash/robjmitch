import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// Import routes
import Routes from './Routes.js';

// Import styles
import 'bootstrap/scss/bootstrap.scss';
import './styles/Base.scss';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
