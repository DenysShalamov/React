import React from 'react';
import moment from 'moment';
import './profile.scss';

function Profile(userData) {
  const birthDate = moment(userData.user.birthDate).format('DD MMM YY');
  return (
    <div className="profile">
      <h2 className="profile__name">
        {userData.user.firstName} {userData.user.lastName}
      </h2>
      <div className="profile__birth">
        Was born {birthDate} in {userData.user.birthPlace}
      </div>
    </div>
    
  )
};

export default Profile;