import React from 'react';
import userIcon from '../images/user.png'; // Make sure the path to the image is correct
import './ContactList.css'; // Import the CSS file
function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          <img src={userIcon} alt="User" className="contact-image" /> {/* Using the imported image */}
          <p>{contact.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
