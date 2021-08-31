import React from 'react';
import { Link } from 'react-router-dom';
import HeaderPerfil from '../Components/headers/HeaderPerfil';
import LowerMenu from '../Components/footer/LowerMenu';

const User = () => {
  if (localStorage.getItem('user')) {
    return (
      <div>
        <HeaderPerfil />
        <div className="user-body">
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="profile-done-btn"
              className="btn-remove-style btn-1-user"
            >
              <b>Receitas Feitas</b>
            </button>
          </Link>
          <Link to="/receitas-favoritas">
            <button
              type="button"
              data-testid="profile-favorite-btn"
              className="btn-remove-style btn-2-user"
            >
              <b>Receitas Favoritas</b>
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              data-testid="profile-logout-btn"
              onClick={ () => localStorage.clear() }
              className="btn-remove-style btn-3-user btn-2-user-font"
            >
              <b>Sair</b>
            </button>
          </Link>
        </div>
        <LowerMenu />
      </div>
    );
  } return (
    <div>
      <HeaderPerfil />
      <div>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button type="button" data-testid="profile-favorite-btn">
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
      </div>
      <LowerMenu />
    </div>
  );
};

export default User;
