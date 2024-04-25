import React from 'react';
import userIcon from '../images/user.png'; // Asegúrate de que la ruta a la imagen es correcta
import './ContactList.css'; // Importa el archivo CSS

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          {/* Utiliza la imagen de perfil del contacto si está disponible, si no, usa userIcon */}
          <img src={userIcon} alt={contact.nombre} className="contact-image" />
          <p>{contact.nombre} {contact.apellidos}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
