import React from 'react';
import './goodButton.scss';

const GoodButton = () => {
  return (
    <button className="fancy-button" onClick={() => alert('Good Job!')}>
      Click me!
    </button>
  );
};

export default GoodButton;
