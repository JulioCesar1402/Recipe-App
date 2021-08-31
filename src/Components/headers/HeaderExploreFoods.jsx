import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Headers.css';

function HeaderExploreFoods() {
  return (
    <header
      className="header-exploreFoods"
    >
      <Link to="/perfil">
        <button
          type="button"
          className="btn-remove-style"
        >
          <i className="bx bx-user bx-md header-icon" />
        </button>
      </Link>
      <h1 data-testid="page-title">Explorar Comidas</h1>
    </header>
  );
}

export default HeaderExploreFoods;
