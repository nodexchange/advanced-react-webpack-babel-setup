// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import Routes from './router';

const App = ({ title }) => <Routes title={title} />;

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
