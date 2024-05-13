import React, { useState } from 'react';
import Header from './Header';
import AlphabetNavigator from './AlphabetNavigator';
import ContactList from './ContactList';
import useContactFilter from './useContactFilter';  // Ensure the path is correct
import contactsData from '../data/contacts.json';
import './MainScreen.css';

function MainScreen({ onAddContact }) {
    const [activeLetter, setActiveLetter] = useState('A');
    const filteredContacts = useContactFilter(contactsData, activeLetter);

    const handleLetterClick = letter => {
        setActiveLetter(letter);
    };

    return (
        <div className="App">
            <div className="top-bar">
                <Header onAddClick={onAddContact} />
            </div>
            <div className="content" >
                <AlphabetNavigator activeLetter={activeLetter} onLetterClick={handleLetterClick} />
                <ContactList contacts={filteredContacts} />
            </div>
        </div>
    );
}

export default MainScreen;
