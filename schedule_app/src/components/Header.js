import React, { useState } from 'react';
import searchIcon from '../images/search.png'; // Asegúrate de que la ruta es correcta
import './Header.css';

function Header({ onAddClick }) {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive); // Esto togglea la visibilidad del input
  };

  return (
    <div className="header">
     <button onClick={onAddClick} className="add-user-btn">
        Añadir Usuario
      </button>      {/* Ícono de búsqueda que actúa como botón */}
      <img src={searchIcon} alt="Buscar" style={{ width: '24px', height: '24px', cursor: 'pointer' }} onClick={handleSearchClick} />
      {searchActive && <input type="text" placeholder="Buscar contacto..." autoFocus />}
    </div>
  );
}

export default Header;
