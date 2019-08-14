/* eslint-disable react/display-name */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Navigation, SignIn, Dashboard } from './components';

const routes = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navigation />
      <div>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard/" component={Dashboard} />
      </div>
    </Router>
  );
};

export default routes;
