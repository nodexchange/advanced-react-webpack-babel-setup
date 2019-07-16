/* eslint-disable react/display-name */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Users from './components/Users';
import Contact from './components/Contact';
import About from './components/About';

const routes = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Users} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
};

export default routes;
