import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.isOnline,
    };
  }

  render() {
    return this.state.status ? <Online /> : <Offline />;
  }
}

export default Status;
