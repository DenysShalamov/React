import React from 'react';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.handleOpen}>
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
  }
}

export default Expand;
