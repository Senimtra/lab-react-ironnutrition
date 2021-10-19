// #########################################
// ##  Iteration 4: Implement search bar  ##
// #########################################

import React from 'react';

class SearchBar extends React.Component {
  handleInputs = (event) => {
    const updatedString = event.target.value;
    this.props.onUpdateSearch(updatedString);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div id="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            value={this.props.searchString}
            placeholder="Search for foods"
            onChange={this.handleInputs}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
