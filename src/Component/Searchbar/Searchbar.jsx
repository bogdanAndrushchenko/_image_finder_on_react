import { Component } from 'react';
import PropTypes from 'prop-types';

import './Searchbar.scss';

class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;