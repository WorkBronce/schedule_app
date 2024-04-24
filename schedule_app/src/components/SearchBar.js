import React, { useState } from 'react';
import searchIcon from '../images/search.png'; // Asegúrate de que la ruta es correcta

function Header({ onAddClick }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="header">
      <button onClick={onAddClick}>Añadir Contacto</button>
      <button onClick={() => setSearchActive(!searchActive)}>
        <img src={searchIcon} alt="Buscar" style={{ width: '24px', height: '24px' }} />
      </button>
      {searchActive && <input type="text" placeholder="Buscar contacto..." autoFocus />}
    </div>
  );
}

export default Header;
