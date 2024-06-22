import React, { useState } from 'react';
import './ContactDetails.css';
import landLayerLocationIcon from '../images/land-layer-location.png';
import checkListIcon from '../images/check-list.png';
import userImage from '../images/user.png';
import crossIcon from '../images/cross.png';

function ContactDetails({ contact , onCancel}) {
    const [editing, setEditing] = useState(false);
    const [editedContact, setEditedContact] = useState(contact);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Update JSON data stored in local storage
        const contacts = JSON.parse(localStorage.getItem('contacts')) ;
        console.log(contacts);
        const updatedContacts = contacts.map((c) => {
            if (c.id === editedContact.id) {
                return editedContact;
            }
            return c;
        });
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        /*Reset contact list with updated contact */
        /**show contacts in console */
        console.log(updatedContacts);


        
        setEditing(false);
    };
    


    return (
        <div className="contact-details">
            <button className='backbutton' onClick={onCancel}>
                <img src={crossIcon} className='back' alt={contact.image} />
            </button>
            <h2>Contact Details</h2>
            <img src={userImage} alt={contact.name} className="contact-image" />
            {editing ? (
                <>
                    <input type="text" name="name" value={editedContact.name} onChange={handleChange} />
                    <input type="text" name="surname" value={editedContact.surname} onChange={handleChange} />
                    <input type="text" name="relationship" value={editedContact.relationship} onChange={handleChange} />
                    <input type="text" name="phone" value={editedContact.phone} onChange={handleChange} />
                    <input type="text" name="email" value={editedContact.email} onChange={handleChange} />
                    <input type="text" name="address" value={editedContact.address} onChange={handleChange} />
                </>
            ) : (
                <>
                    <p>Name: {contact.name}</p>
                    <p>Surname: {contact.surname}</p>
                    <p>Relationship: {contact.relationship}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Email: {contact.email}</p>
                    <p>Address: {contact.address}</p>
                </>
            )}
            <div className="icons">
                <button className="Options" onClick={() => console.log('Navigate to maps')}>
                    <img src={landLayerLocationIcon} alt="Location Icon" />
                    Maps
                </button>
                <button className="Options" onClick={() => console.log('Navigate to Todo List')}>
                    <img src={checkListIcon} alt="Checklist Icon" />
                    <span>Todo-List</span>
                </button>
            </div>
            {editing ? (
                <button className="Edit" onClick={handleSave}>Save Contact</button>
            ) : (
                <button className="Edit" onClick={handleEdit}>Edit Contact</button>
            )}
        </div>
    );
}

export default ContactDetails;
