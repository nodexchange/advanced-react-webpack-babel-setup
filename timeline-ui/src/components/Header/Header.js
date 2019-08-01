import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="cd-nugget-info">
      <h1>OUP Timeline</h1>
      <h1>Les rencontres techniques de Sophia et des alentours</h1>
      <a href="./past.html">Voir les rencontres passées</a>
      <br />
      <a href="https://gitlab.com/lucj/sophia.events/issues/new">
        Proposer un évènement (nécessite un compte sur Gitlab.com)
      </a>
    </div>
  </header>
);

export default Header;
