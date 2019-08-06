import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'TEST .STILL WORKS? with Webpack and Babel';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

if (module.hot) {
  if (module.hot.accept) {
    module.hot.accept();
  }
}
