import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AlphabetNavigator from './components/AlphabetNavigator';
import ContactList from './components/ContactList';
import contactsData from './contacts.json';
import './App.css';

function App() {
  const [activeLetter, setActiveLetter] = useState('A');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    filterContactsByLetter(activeLetter);
  }, [activeLetter]);

  const filterContactsByLetter = (letter) => {
    const index = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    let filtered = [];

    if (index >= 24) {  // If the letter is Y or Z, fetch previous contacts in reverse order
        for (let i = index; i >= 0 && filtered.length < 3; i--) {
            filtered.push(...contactsData.filter(contact => 
                contact.nombre.toUpperCase().startsWith(String.fromCharCode('A'.charCodeAt(0) + i))
            ));
        }
    } else {  // Otherwise, fetch next contacts in forward order
        for (let i = index; i < 26 && filtered.length < 3; i++) {
            filtered.push(...contactsData.filter(contact => 
                contact.nombre.toUpperCase().startsWith(String.fromCharCode('A'.charCodeAt(0) + i))
            ));
        }
    }

    // Sort the filtered contacts alphabetically
    filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));

    // Ensure the list has exactly up to three contacts
    setContacts(filtered.slice(0, 3));
};


  const handleLetterClick = letter => {
    setActiveLetter(letter);
  };

  return (
    <div className="App">
      <div className="top-bar">
        <Header onAddClick={() => console.log('Add Contact')} />
      </div>
      <div className="content">
        <AlphabetNavigator activeLetter={activeLetter} onLetterClick={handleLetterClick} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
