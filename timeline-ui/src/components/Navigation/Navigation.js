/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link to="/">Webpack Timeline</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/contact/">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
