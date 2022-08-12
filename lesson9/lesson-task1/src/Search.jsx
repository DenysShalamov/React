import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  onChangeValueInput = event => {
    this.setState({
      value: event.target.value,
    });
  };

  onSearchBtn = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.onSearchBtn}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.onChangeValueInput}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
