import React from 'react';

export default class CustomComponent extends React.Component {
  render() {
    return <h1 className="header">Hello! {this.props.title} </h1>
  }
}
