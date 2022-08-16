import React from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class Page extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`).then(response =>
      response.json().then(userData => {
        this.setState({
          userData,
        });
      }),
    );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default Page;
