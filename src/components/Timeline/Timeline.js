/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import img from '../../img/wordpress.png';

class Timeline extends React.Component {
  render() {
    return (
      <div>
        <h1>Timeline</h1>
        <img src={img} alt="webpack test" />
      </div>
    );
  }
}

export default Timeline;
