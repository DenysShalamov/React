import React from 'react';

const Expand = ({ title, children, onChange, isOpen }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onChange}>
          {isOpen ? (
            <i className="fa-solid fa-arrow-up"></i>
          ) : (
            <i className="fa-solid fa-arrow-down"></i>
          )}
        </button>
      </div>
      {isOpen ? <div className="expand__content">{children}</div> : null}
    </div>
  );
};

export default Expand;
