import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggleStatus);
    window.addEventListener('offline', this.onToggleStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onToggleStatus);
    window.removeEventListener('offline', this.onToggleStatus);
  }

  onToggleStatus = event => {
    this.setState({
      status: event.type,
    });
  };

  render() {
    return (
      <div
        className={
          this.state.status === 'online' ? 'status' : 'status status_offline'
        }
      >
        {this.state.status}
      </div>
    );
  }
}

export default ConnectionStatus;
