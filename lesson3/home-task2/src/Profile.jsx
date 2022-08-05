import React from 'react';
import moment from 'moment';
import './profile.scss';

function Profile(props) {
  const dateBirth = moment(props.userData.birthDate).format('DD MMM YY');
  return (
    <div className="profile">
      <h2 className="profile__name">
        {props.user.firstName} {props.userData.lastName}
      </h2>
      <div className="profile__birth">
        Was born {dateBirth} in {props.userData.birthPlace}
      </div>
    </div>
    
  )
};

export default Profile;