import * as React from 'react';

import logo from '../assets/falco-icon.svg'
import './Topbar.css'

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="inner-container">
        <div className="logo-container">
            <img src={logo} />
            <span className='logo-text'>FalcoBTP</span>
        </div>
        <ul className='nav'>
          <li>
            <a className='link' href="/">Accueil</a>
          </li>
          <li>
            <a className='link' href="/">Projets</a>
          </li>
          <li>
            <a className='link' href="/">Témoignages</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
