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
    const filtered = contactsData.filter(contact =>
      contact.nombre.toUpperCase().startsWith(letter)
    );

    if (filtered.length < 3) {
      const startIndex = contactsData.findIndex(contact => contact.nombre.toUpperCase().startsWith(letter));
      const endIndex = startIndex + 3;  // Intentamos obtener al menos tres contactos comenzando desde el índice inicial
      const additionalContacts = contactsData.slice(startIndex, endIndex).filter(contact => 
        !contact.nombre.toUpperCase().startsWith(letter)
      );
      setContacts([...filtered, ...additionalContacts].slice(0, 3));  // Limitamos a tres contactos exactamente
    } else {
      setContacts(filtered.slice(0, 3));
    }
  };

  const handleLetterClick = letter => {
    setActiveLetter(letter);
  };

  return (
    <div className="App">
      <Header onAddClick={() => console.log('Agregar Contacto')} />
      <div className="content">
        <AlphabetNavigator activeLetter={activeLetter} onLetterClick={handleLetterClick} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
