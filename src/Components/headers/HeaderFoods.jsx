import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import '../../css/Headers.css';

function HeaderFoods() {
  const [searchBar, getSearchBar] = useState(false);
  return (
    <header
      className="header-foods"
    >
      <Link to="/perfil">
        <button
          type="button"
          className="btn-remove-style"
        >
          <i className="bx bx-user bx-md header-icon" />
        </button>
      </Link>
      <h1 data-testid="page-title">Comidas</h1>
      <button
        type="button"
        onClick={ () => (searchBar ? getSearchBar(false) : getSearchBar(true)) }
        className="btn-remove-style"
      >
        {
          !searchBar
            ? <i className="bx bx-search bx-md header-icon" />
            : <i className="bx bxs-search bx-md header-icon" />
        }
      </button>
      {
        searchBar && <SearchBar />
      }
    </header>
  );
}

export default HeaderFoods;
