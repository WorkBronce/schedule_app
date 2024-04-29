import React, { useState } from 'react';
import searchIcon from '../images/search.png';
import userAddIcon from '../images/user-add.png';
import './Header.css';  // Ensuring that the styles are imported

function Header({ onAddClick }) {
    const [searchActive, setSearchActive] = useState(false);

    const handleSearchClick = () => {
        const newSearchActive = !searchActive;
        setSearchActive(newSearchActive);  // Toggles search visibility
    };

    return (
        <div className="header">
                <button className="button-74" onClick={onAddClick}>
                    <img  src={userAddIcon} alt="Añadir Usuario"  style={{ marginTop: '20px' , minHeight: '24px', minWidth:'24px'}} />
                </button>
            {searchActive && <input  className= "button-74" type="text" placeholder="Buscar contacto..." autoFocus />}
            <button className="button-74" onClick={handleSearchClick}>  
                <img src={searchIcon} alt="Buscar" style={{ marginTop: '20px' , minHeight: '24px', minWidth:'24px'}} />
            </button>
        </div>
    );
}

export default Header;
