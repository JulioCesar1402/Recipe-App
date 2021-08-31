import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkEmailAndPass = (e, p) => {
    const validEmail = /^[a-z]+@[a-z]+\.[com]{3,}$/i;
    const passLength = 6;
    return validEmail.test(e) && p.length > passLength;
  };

  const setLocalStorage = (emailUser) => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email: emailUser }));
  };

  return (
    <div className="login-body">
      <input
        type="email"
        data-testid="email-input"
        id="email-input"
        placeholder="Email"
        onChange={ ({ target }) => setEmail(target.value) }
        className="login-email"
      />

      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={ ({ target }) => setPassword(target.value) }
        className="login-password"
      />

      <Link to="/explorar">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ email && password ? !(checkEmailAndPass(email, password)) : true }
          onClick={ () => setLocalStorage(email) }
          className="login-btn"
        >
          <b>Let&apos;s eat</b>
        </button>
      </Link>
    </div>
  );
}
