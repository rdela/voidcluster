import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="voidcluster" style={{ width: '40px', height: '80px' }} />
          </figure>
        </Link>
        <a className="navbar-item" href="https://github.com/rdela/voidcluster">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
        <Link className="navbar-item" to="/about">
          about
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
