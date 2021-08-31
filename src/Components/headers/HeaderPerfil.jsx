import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Headers.css';

function HeaderPerfil() {
  return (
    <header
      className="header-perfil"
    >
      <Link to="/perfil">
        <button
          type="button"
          className="btn-remove-style"
        >
          <i className="bx bx-user bx-md header-icon-active" />
        </button>
      </Link>
      <h1 data-testid="page-title">Perfil</h1>
    </header>
  );
}

export default HeaderPerfil;
