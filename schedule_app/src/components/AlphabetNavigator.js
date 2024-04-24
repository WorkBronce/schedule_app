import React from 'react';
import './AlphabetNavigator.css'; // Asegúrate de crear este archivo CSS

function AlphabetNavigator({ activeLetter, onLetterClick }) {
  // Crear un arreglo con todas las letras del abecedario
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <div className="alphabet-navigator">
      {alphabet.map(letter => (
        <div 
          key={letter}
          className={`letter ${activeLetter === letter ? 'active' : ''}`}
          onClick={() => onLetterClick(letter)}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default AlphabetNavigator;
