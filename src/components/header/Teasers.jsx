/* eslint-disable no-console */
import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [{ key: 'abc', value: 'abc', text: 'abc' }, { key: 'bcd', value: 'bcd', text: 'bcd' }];

class Teasers extends Component {
  getSelection = (event, { value }) => {
    console.log(value);
    const name = event.target.textContext;
    console.log(name);
  }

  render() {
    return (
      <Dropdown className="dropdownClass" text="Teasers" button selection search options={options} onChange={this.getSelection()} />
    );
  }
}

export default Teasers;
