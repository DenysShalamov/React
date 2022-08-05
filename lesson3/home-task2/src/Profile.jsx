import React from 'react';
import moment from 'moment';

function Profile(userData) {
  const birthDate = moment(userData.user.birthDate).format('DD MMM YY');
  return (
    <>
      <div className="profile__name">{userData.user.firstName} {userData.user.lastName}</div>
      <div className="profile__birth">Was born {birthDate} in {userData.user.birthPlace}</div>
    </>
    
  )
};

export default Profile;