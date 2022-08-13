import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const newUserList = this.props.users.filter(user =>
      user.name.toLowerCase().includes(this.state.value.toLowerCase()),
    );
    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={newUserList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {newUserList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
