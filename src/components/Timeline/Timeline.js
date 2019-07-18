/* eslint-disable react/prefer-stateless-function */
/* global __EVENTS_API__ */
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
    fetch(__EVENTS_API__)
      .then(response => response.json())
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
