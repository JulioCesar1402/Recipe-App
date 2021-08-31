import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar';
import '../../css/Headers.css';

function HeaderExploreFoodsOrigin() {
  const [searchBar, getSearchBar] = useState(false);
  return (
    <header
      className="header-foodsOrigin"
    >
      <Link to="/perfil">
        <button
          type="button"
          className="btn-remove-style"
        >
          <i className="bx bx-user bx-md header-icon" />
        </button>
      </Link>
      <h1 data-testid="page-title">Explorar Origem</h1>
      <button
        onClick={ () => (searchBar ? getSearchBar(false) : getSearchBar(true)) }
        type="button"
      >
        <img
          src={ searchIcon }
          data-testid="search-top-btn"
          alt="explore search"
          width="30px"
          height="30px"
        />
      </button>
      {
        searchBar && <SearchBar />
      }
    </header>
  );
}

export default HeaderExploreFoodsOrigin;
