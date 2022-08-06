import React from 'react';
import './goodButton.scss';

const GoodButton = () => {
  return (
    <button className="fancy-button" onClick={() => alert('Good job!')}>
      Click me!
    </button>
  );
};

export default GoodButton;
