// MainScreen.js

import React, { useState } from 'react';
import Header from './Header';
import AlphabetNavigator from './AlphabetNavigator';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails'; // New component
import useContactFilter from './useContactFilter';
import contactsData from '../data/contacts.json';
import './MainScreen.css';

function MainScreen({ onAddContact }) {
    const [activeLetter, setActiveLetter] = useState('A');
    const [selectedContact, setSelectedContact] = useState(false); // New state for selected contact
    const filteredContacts = useContactFilter(contactsData, activeLetter);

    const handleLetterClick = letter => {
        setActiveLetter(letter);
    };

    const handleContactClick = contact => {
        setSelectedContact(contact); // Set the selected contact when clicked
    };
    if (selectedContact){
        return  <ContactDetails contact={selectedContact} />
    }

    return (
        <div className="App">
            <div className="top-bar">
                <Header onAddClick={onAddContact} />
            </div>
            <div className="content">
                <AlphabetNavigator activeLetter={activeLetter} onLetterClick={handleLetterClick} />
                <ContactList contacts={filteredContacts} onContactClick={handleContactClick} /> {/* Pass handleContactClick */}
                {selectedContact && <ContactDetails contact={selectedContact} />} {/* Render ContactDetails */}
            </div>
        </div>
    );
}

export default MainScreen;
