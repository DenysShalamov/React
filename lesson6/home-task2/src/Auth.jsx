import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      loading: false,
    };
  }

  handlerLogin = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        status: true,
        loading: false,
      });
    }, 2000);
  };

  handlerLogout = () => {
    this.setState({
      status: false,
    });
  };

  render() {
    if (this.state.loading) {
      return <Spinner size="25px" />;
    }
    return this.state.status ? (
      <Logout onLogout={this.handlerLogout} />
    ) : (
      <Login onLogin={this.handlerLogin} />
    );
  }
}

export default Auth;
