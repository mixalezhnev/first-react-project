import React from 'react';
import Search from './Search.js';
import EmployersList from './EmployersList.js';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: this.props.initialItems
    }
  }

  render() {
    let text = this.state.text;
    let filteredEmployers = this.state.items.filter((employer) => {
      return employer.name.includes(text) ||
             employer.email.includes(text);
    });

    return (
      <div className="container">
        <Search text={this.state.text} onTextChange={this.changeText} />
        <EmployersList items={filteredEmployers} />
      </div>
    );
  }

  changeText(newText) {
    this.setState({
      text: newText
    })
  }

  static propTypes = {
    initialItems: React.PropTypes.array
  }
}
