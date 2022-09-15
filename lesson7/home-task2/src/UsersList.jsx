import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  state = {
    usersPerPage: 3,
    currentPage: 1,
  };

  goNextHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrevHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const { currentPage, usersPerPage } = this.state;
    const indexTo = currentPage * usersPerPage;
    const userList = this.props.users.slice(
      indexTo - usersPerPage,
      usersPerPage,
    );

    const { users } = this.props;

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
