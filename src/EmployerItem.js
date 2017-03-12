import React from 'react';

export default class EmployerItem extends React.Component {
  render() {
    return (
      <li className="contact-list__item">
        <span> Name: {this.props.name} </span>
        <span> Email: {this.props.email} </span>
      </li>
    );
  }
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  }
}
