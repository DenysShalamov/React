import React from 'react';
import './userInfo.scss';
import Avatar from './Avatar';

const UserInfo = (props) => {
  console.log(props.user);
  return (
    <div className="user-info">
      <Avatar user= {props.user}/>
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;