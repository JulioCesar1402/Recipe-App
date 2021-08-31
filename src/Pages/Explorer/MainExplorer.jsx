import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderExplore from '../../Components/headers/HeaderExplore';
import LowerMenu from '../../Components/footer/LowerMenu';

export default function MainExplorer({ history }) {
  return (
    <div>
      <HeaderExplore history={ history } title="Explorar" />
      <div className="explore-body">
        <Link to="/explorar/comidas">
          <button
            data-testid="explore-food"
            name="food"
            type="button"
            className="btn-remove-style text btn-1"
          >
            <b>Explorar Comidas</b>
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            data-testid="explore-drinks"
            name="drinks"
            type="button"
            className="btn-remove-style text"
          >
            <b>Explorar Bebidas</b>
          </button>
        </Link>
      </div>
      <footer>
        <LowerMenu />
      </footer>
    </div>
  );
}

MainExplorer.propTypes = {
  history: PropTypes.shape().isRequired,
};
