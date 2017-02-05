import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';

import { browserHistory } from 'react-router';

import 'bootstrap/scss/bootstrap.scss';
import './styles/Base.scss';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
