import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import {Typography} from "@material-ui/core";

hydrate(
  <BrowserRouter>
    <App appDomain={(window as any).appDomain} analyticsTrackingId={(window as any).gaTrackingId}/>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
