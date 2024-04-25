import React, { useState } from 'react';
import searchIcon from '../images/search.png';
import userAddIcon from '../images/user-add.png';
import './Header.css';  // Ensuring that the styles are imported

function Header({ onAddClick }) {
    const [showAddButton, setShowAddButton] = useState(true);
    const [searchActive, setSearchActive] = useState(false);

    const handleSearchClick = () => {
        const newSearchActive = !searchActive;
        setSearchActive(newSearchActive);  // Toggles search visibility
        setShowAddButton(!newSearchActive); // Changes based on new search state
    };

    return (
        <div className="header">
            {showAddButton ? (
                <button className="button-74" onClick={onAddClick}>Add contact</button>  
            ) : (
                <button className="button-74" onClick={onAddClick}>
                    <img  src={userAddIcon} alt="Añadir Usuario"  style={{ width: '10%', height: '10%',marginTop: '20px', minHeight: '24px', minWidth:'24px' }} />
                </button>
            )}
            {searchActive && <input  className= "button-74" type="text" placeholder="Buscar contacto..." autoFocus />}
            <button className="button-74" onClick={handleSearchClick}>  
                <img src={searchIcon} alt="Buscar" style={{ width: '10%', height: '10%',marginTop: '20px' , minHeight: '24px', minWidth:'24px'}} />
            </button>
        </div>
    );
}

export default Header;
