/* eslint-disable react/prefer-stateless-function */
/* global API_PORT, API_IP, API_URL, NODE_ENV */
import React from 'react';
import './Timeline.css';

import img from '../../img/logo-oup.png';
import { TimelineItem } from '../index';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const url = API_URL || 'https://localhost';
    console.log(`[PORT] :  ${API_PORT}`);
    console.log(`[API_IP] :  ${API_IP}`);
    console.log(`[NODE_ENV] :  ${NODE_ENV}`);
    console.log(`[API_URL] :  ${API_URL}`);
    const apiUrl = `${url}:${API_PORT}/`;
    fetch(apiUrl)
      .then(response => {
        console.log('::: ', response);
        return response.json();
      })
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    const timelineItems = [];
    if (data) {
      data.events.forEach(event => {
        timelineItems.push(<TimelineItem key={event.ts} {...event} hidden />);
      });
    }
    return (
      <section className="cd-timeline js-cd-timeline">
        <div className="cd-timeline__container">
          <div>
            <h1>{`Timeline  ${NODE_ENV}`}</h1>
            <img src={img} alt="webpack test" />
            {timelineItems}
          </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
