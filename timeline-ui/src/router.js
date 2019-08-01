/* eslint-disable react/display-name */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { About, AddEventIcon, Contact, Header, Navigation, Timeline, Users, NewEvent } from './components';

const routes = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Header />
      <Navigation />
      <AddEventIcon />
      <div>
        <Route path="/" exact component={Timeline} />
        <Route path="/new-event/" exact component={NewEvent} />
        <Route path="/users/" exact component={Users} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
};

export default routes;
