import React from 'react';

import './header.css';
import logoHeader from '../../images/logo-header.png';

export function Header() {
  return (
    <div className="container">
      <img className="logo" alt="Логотип компании" src={logoHeader} />
    </div>
  );
}

export { Header as default };
