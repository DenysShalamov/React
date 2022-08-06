import React from 'react';
import './goodButton.scss';

class GoodButton extends React.Component {
  handleClick(event) {
    console.log(event);
    alert(event.target.textContent);
  }
  render() {
    return <button className="fancy-button" onClick={this.handleClick}>Click me!</button>;
  }
}
export default GoodButton;
