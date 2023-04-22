import React from "react";
import { Link } from 'react-router-dom';

export const LoginForm = () =>
  <div className="container">
    <form method="post" className="login-form">
      <div className="credentials">
        <input type="email" className="credentials-input" placeholder="E-mail" />
        <input type="password" className="credentials-input" placeholder="Hasło" />
        <Link to="/" className="forgotten-pwd">Zapomniałeś hasła?</Link>
        <div className="register">
          Nie masz konta?<Link to="/" className="register-link">Zarejestruj się</Link>
        </div>
      </div>
      <div className="login-btn">
        <input type="submit" value="Zaloguj się" className="login-btn-text" />
      </div>
    </form>
  </div>