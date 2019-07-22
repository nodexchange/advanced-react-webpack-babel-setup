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
    return (
      <form method="" action="">
        <Input hasLabel="true" htmlFor="textInput" label="Text input" required="true" type="text" />

        <Input hasLabel="true" htmlFor="emailInput" label="Email input" required="true" type="email" />

        <Input
          hasLabel="true"
          htmlFor="numberInput"
          label="Number input"
          required="true"
          type="number"
          min="0.5"
          max="100"
          step="0.5"
        />

        <Input hasLabel="true" htmlFor="passwordInput" label="Password input" required="true" type="password" />

        <Select
          hasLabel="true"
          htmlFor="select"
          label="Select"
          options="one, two, three, option four, five"
          required="true"
        />

        <Datalist
          hasLabel="true"
          htmlFor="datalist"
          label="Datalist"
          options="Chrome, Edge, Firefox, Internet Explorer, Opera, Safari, Vivaldi"
          required="true"
        />

        <Textarea hasLabel="true" htmlFor="textarea" label="Textarea" required="true" />

        <Checkbox hasLabel="true" htmlFor="checkbox" label="Checkbox" required="true" />

        <Radio hasLabel="true" htmlFor="radioOne" label="Radio one" name="radios" required="true" />

        <Radio hasLabel="true" htmlFor="radioTwo" label="Radio two" name="radios" required="true" />

        <Button type="submit" value="submit" text="Send form" />
      </form>
    );
  }
}

export default NewEvent;
