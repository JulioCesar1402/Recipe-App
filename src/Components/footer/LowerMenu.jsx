import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LowerMenu.css';
import '../../css/Main.css';

const LowerMenu = () => {
  const [activeWine, setActiveWine] = useState(false);
  const [activeCompass, setActiveCompass] = useState(true);
  const [activeDish, setActiveDish] = useState(false);
  const { pathname } = window.location;

  const handleGetTitle = () => {
    switch (pathname) {
    case '/comidas':
      setActiveWine(false);
      setActiveCompass(false);
      setActiveDish(true);
      break;
    case '/explorar':
      setActiveWine(false);
      setActiveCompass(true);
      setActiveDish(false);
      break;
    case '/bebidas':
      setActiveWine(true);
      setActiveCompass(false);
      setActiveDish(false);
      break;
    default:
      setActiveWine(false);
      setActiveCompass(false);
      setActiveDish(false);
    }
  };

  useEffect(() => handleGetTitle(), []);

  return (
    <footer data-testid="footer" className="fixed-bar">
      <Link to="/bebidas" title="wine">
        {
          activeWine
            ? <div className="bx bxs-coffee-togo footer-icon-active bx-md" title="wine" />
            : <div className="bx bx-coffee-togo footer-icon bx-md" title="wine" />
        }
      </Link>
      <Link to="/explorar" title="compass">
        {
          activeCompass
            ? <i className="bx bxs-compass footer-icon-active bx-md" title="compass" />
            : <i className="bx bx-compass footer-icon bx-md" title="compass" />
        }
      </Link>
      <Link to="/comidas" title="Dish">
        {
          activeDish
            ? <i className="bx bxs-dish footer-icon-active bx-md" title="Dish" />
            : <i className="bx bx-dish footer-icon bx-md" title="Dish" />
        }
      </Link>
    </footer>
  );
};

export default LowerMenu;

LowerMenu.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
