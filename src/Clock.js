import React from 'react';
import FormattedDate from './FormattedDate.js';
import Counter from './Counter.js';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);

    setInterval(()=> {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // setState call tell React that state was changed
    this.setState((prevState, props) => ({
      date: new Date()
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
        <Counter value={this.state.counter} />
      </div>
    );
  }
}

