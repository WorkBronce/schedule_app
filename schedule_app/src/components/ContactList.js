// ContactList.js

import React from 'react';
import userIcon from '../images/user.png';
import './ContactList.css';

function ContactList({ contacts, onContactClick }) {
    
    const handleContactClick = (contact) => {
        onContactClick(contact); // Call the parent function when a contact is clicked
    };

    return (
      
        <div className="contact-list">
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    className="contact-item"
                    onClick={() => handleContactClick(contact)}>
                    <img src={userIcon} alt={contact.name} className="contact-image" />
                    <p>{contact.name} {contact.surname}</p>
                </div>
            ))}
        </div>
    );
}

export default ContactList;
