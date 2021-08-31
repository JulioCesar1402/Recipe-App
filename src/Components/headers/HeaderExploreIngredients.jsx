import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Headers.css';

function HeaderExploreIngredients() {
  return (
    <header
      className="header-exploreIngredients"
    >
      <Link to="/perfil">
        <button
          type="button"
          className="btn-remove-style"
        >
          <i className="bx bx-user bx-md header-icon" />
        </button>
      </Link>
      <h1 data-testid="page-title">Explorar Ingredientes</h1>
    </header>
  );
}

export default HeaderExploreIngredients;
