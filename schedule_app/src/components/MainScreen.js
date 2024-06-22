// MainScreen.js

import React, { useState } from 'react';
import Header from './Header';
import AlphabetNavigator from './AlphabetNavigator';
import ContactList from './ContactList';
import useContactFilter from './useContactFilter';
import contactsData from '../data/contacts.json';
import './MainScreen.css';

function MainScreen({ onAddContact, onContactClick }) {
    const [activeLetter, setActiveLetter] = useState('A');
    const filteredContacts = useContactFilter(contactsData, activeLetter);

    const handleLetterClick = letter => {
        setActiveLetter(letter);
    };

    return (
        <div className="App">

            <div className="content">
                <AlphabetNavigator activeLetter={activeLetter} onLetterClick={handleLetterClick} />
                <div className='Header-body'>
                    <div className="top-bar">
                        <Header onAddClick={onAddContact} />
                    </div>
                    <ContactList contacts={filteredContacts} onContactClick={onContactClick} /> {/* Pass handleContactClick */}
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
