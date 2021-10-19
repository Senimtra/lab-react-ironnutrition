// #########################################
// ##  Iteration 4: Implement search bar  ##
// #########################################

import React from 'react';

class SearchBar extends React.Component {
  handleInputs = (event) => {
    const updatedString = event.target.value;
    this.props.onUpdateSearch(updatedString);
  };

  render() {
    return (
      <div id="search-bar">
        <form>
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
