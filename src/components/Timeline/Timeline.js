/* eslint-disable react/prefer-stateless-function */
/* global __EVENTS_API__ */
import React from 'react';
import img from '../../img/logo-oup.png';
import { TimelineItem } from '../index';

class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    fetch(__EVENTS_API__)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { scrollTop } = event.srcElement.body;
    const itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({
      transform: itemTranslate,
    });
  }

  render() {
    const { data } = this.state;
    const timelineItems = [];
    if (data) {
      data.events.forEach(event => {
        timelineItems.push(<TimelineItem key={event.ts} {...event} />);
      });
    }
    const { transform } = this.state;
    console.log(transform);

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
