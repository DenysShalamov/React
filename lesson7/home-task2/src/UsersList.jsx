import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  state = {
    usersPerPage: 3,
    currentPage: 1,
    startIndex: 0,
    endIndex: 3,
  };

  goNextHandler = () => {
    this.setState({
      startIndex: this.state.startIndex + 3,
      endIndex: this.state.endIndex + 3,
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrevHandler = () => {
    this.setState({
      startIndex: this.state.startIndex - 3,
      endIndex: this.state.endIndex - 3,
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const userList = this.props.users.slice(
      this.state.startIndex,
      this.state.endIndex,
    );

    const { users } = this.props;
    const { currentPage, usersPerPage } = this.state;
    return (
      <div>
        <Pagination
          goPrev={this.goPrevHandler}
          goNext={this.goNextHandler}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={usersPerPage}
        />

        <ul className="users">
          {userList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
