import React from 'react';

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.testVar = '';
    this.addNewEventHandler = this.addNewEventHandler.bind(this);
  }

  addNewEventHandler() {
    console.log(`ACTION : ${this.testVar}`);
  }

  render() {
    return <h1>NewEvent</h1>;
  }
}

export default NewEvent;
