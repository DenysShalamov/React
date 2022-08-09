import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  handlerLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handlerLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {
          this.state.isLoggedIn
          ? (<Logout onLogout={this.handlerLogout} />)
          : (<Login onLogin={this.handlerLogin} />)
        }
      </div>
    );
  }
}

export default Auth;
