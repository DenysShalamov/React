import React from 'react';
import moment from 'moment';
import './profile.scss';

function Profile(userData) {
  const dateBirth = moment(userData.userData.birthDate).format('DD MMM YY');
  return (
    <div className="profile">
      <h2 className="profile__name">
        {userData.userData.firstName} {userData.userData.lastName}
      </h2>
      <div className="profile__birth">
        Was born {dateBirth} in {userData.userData.birthPlace}
      </div>
    </div>
    
  )
};

export default Profile;