import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import twitter from '../img/Twitter_Logo_Black.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={logo}
              alt="voidcluster"
              style={{ width: '40px', height: '80px' }}
            />
          </figure>
        </Link>
        <a className="navbar-item" href="https://github.com/rdela/voidcluster">
          <span className="icon">
            <img src={github} alt="GitHub" />
          </span>
        </a>
        <a className="navbar-item" href="https://twitter.com/voidcluster">
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
        <Link className="navbar-item" to="/t/">
          tags
        </Link>
        <Link className="navbar-item" to="/p/about">
          about
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
