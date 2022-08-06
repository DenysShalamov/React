import React, { Component } from 'react';
import './counter.scss';

// const Counter = () => {
//   return (
//     <div className="counter">17</div>
//   )
// }
let counter = 0;

setInterval(() => {
  counter += 1;
}, 1000);

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    }

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
      counter += 1;
    }, props.interval);
  }
  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
