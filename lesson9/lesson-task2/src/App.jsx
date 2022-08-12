import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
  createUser = userData => {
    event.preventDefault();
    console.log(userData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
