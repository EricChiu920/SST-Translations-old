/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const options = [
  { value: 'alchemist', text: 'The Novice Alchemist\'s store', as: Link, to: '/novels/alchemist' },
  { value: '2', text: 'Second Novel', as: Link, to: '/novels/2' },
];

class Teasers extends Component {
  state = {
    value: '',
  }

  getValue = (event, { value }) => {
    this.setState({ value });
  }

  close = () => {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    const { value } = this.state;

    history.push(`/novels/${value}`);
  }

  render() {
    return (
      <Dropdown placeholder="Teasers" fluid selection search options={options} onChange={this.getValue} onClose={this.close} />
    );
  }
}

export default withRouter(Teasers);
