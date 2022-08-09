import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    }
  }

  changeStatus() {
    this.setState(precState => ({
      status: !precState.status,
    }))
  };
  render() {
    return (
      <div 
        className="toggler"
        onClick={() => this.changeStatus()}
      >
        {this.state.status ? 'On' : 'Off'}
      </div>
    )
  }
}

export default Toggler;