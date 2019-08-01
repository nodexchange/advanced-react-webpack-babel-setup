import React from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';

import PlusIcon from './plus-icon.svg';
import './AddEventIcon.css';

const AddEventIcon = () => {
  return (
    <div id="add-event-icon">
      <Link to="/new-event">
        <SVG src={PlusIcon} />
      </Link>
    </div>
  );
};

export default AddEventIcon;
