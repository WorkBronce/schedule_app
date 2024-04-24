import React, { useState } from 'react';
import Header from './components/Header';
import AlphabetNavigator from './components/AlphabetNavigator';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [activeLetter, setActiveLetter] = useState('A');
  const contacts = [
    { id: 1, name: "Juan Pérez", image: "/images/juan.jpg" },
    { id: 2, name: "Ana Gómez", image: "/images/ana.jpg" },
    { id: 3, name: "Sofía Castro", image: "/images/sofia.jpg" },
  ];

  const handleLetterClick = letter => {
    setActiveLetter(letter);
    // Aquí podrías filtrar o buscar los contactos que empiezan por esa letra
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
