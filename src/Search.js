import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <input
        type='text'
        placeholder='search'
        value={this.props.text}
        onChange={this.handleTextChange}
       />
    );
  }

  handleTextChange = (event) => {
    this.props.onTextChange(event.target.value);
  }

  static propTypes = {
    text: React.PropTypes.string
  }
}
