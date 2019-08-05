/* eslint-disable react/prefer-stateless-function */
/* global API_PORT */
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
    console.log(`[PORT] :  ${API_PORT}`);
    // console.log(`[IP] :  ${host.docker.internal}`);
    // const apiUrl = `https://host.docker.internal:${API_PORT}/`;
    const apiUrl = `https://localhost:${API_PORT}/`;
    // const apiUrl = `https://0.0.0.0:${API_PORT}/`;
    // const apiUrl = `http://172.17.0.1:${API_PORT}/`;
    // const apiUrl = `http://172.26.0.1:${API_PORT}/`;
    // const apiUrl = `http://172.26.0.2:${API_PORT}/`;
    fetch(apiUrl)
      .then(response => {
        console.log(`::: > ${response}`);
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
            <h1>Timeline</h1>
            <img src={img} alt="webpack test" />
            {timelineItems}
          </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
