/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

// import CdIconSvg from '../../img/cd-icon-location.svg';

const TimelineItem = ({ title, date, link, picture, sponsors }) => {
  const details = {};
  if (link) {
    details.link = (
      <a target="_blank" href="{link}" className="cd-timeline__read-more">
        Détails
      </a>
    );
  }
  if (picture) {
    details.pict = (
      <span className="cd-timeline__date">
        <img className="logo" alt="" src="./img/{picture}" />
      </span>
    );
  }
  if (sponsors) {
    details.sponsors = <img className="logo" alt="sponsor logo" src="./img/{name}.png" />;
  }

  return (
    <div>
      <div className="cd-timeline__block js-cd-block">
        <div className="ts {{{ ts }}}" />
        <div className="cd-timeline__img cd-timeline__img--location js-cd-img">
          {/* <span dangerouslySetInnerHTML={{ __html: CdIconSvg }} /> */}
        </div>
        <div className="cd-timeline__content js-cd-content">
          <h2>{title}</h2>
          <p>{title}</p>
          {details.link}
          <span className="cd-timeline__date">{date}</span>
          {details.pict}
          <span className="cd-timeline__date">{details.sponsors}</span>
        </div>
      </div>
    </div>
  );
};
TimelineItem.defaultProps = {
  sponsors: '',
};
TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  sponsors: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default TimelineItem;
