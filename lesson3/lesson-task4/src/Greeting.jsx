import React from 'react';
import moment from 'moment';
import './greeting.scss';

function Greeting(props) {
  const age = moment().format('YYYY') - moment(props.birthDate).format('YYYY');
  return (
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
</div>
  )
}

export default Greeting;