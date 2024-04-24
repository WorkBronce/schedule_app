import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Header({ onAddClick }) {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => setSearchActive(!searchActive);

  return (
    <div className="header">
      <button onClick={onAddClick}>Añadir Contacto</button>
      <button onClick={toggleSearch}>Buscar</button>
      {searchActive && <SearchBar />}
    </div>
  );
}

export default Header;
