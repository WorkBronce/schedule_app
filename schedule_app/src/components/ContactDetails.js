// ContactDetails.js
import React from 'react';
import './ContactDetails.css';
import landLayerLocationIcon from '../images/land-layer-location.png';
import checkListIcon from '../images/check-list.png';

function ContactDetails({ contact }) {

    const handleSave = () => {
    };
return (
    <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Name: {contact.name}</p>
        <p>Surname: {contact.surname}</p>
        <p>Relationship: {contact.relationship}</p>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Address: {contact.address}</p>
        <div className="icons">
            <button className="Options">
                <img src={landLayerLocationIcon} alt="Location Icon" />
               Maps
            </button>
            <button className="Options">
                <img src={checkListIcon} alt="Checklist Icon" />
                <span>Todo-List</span>
            </button>
        </div>
        <button className="Edit" onClick={handleSave}>Edit Contact</button>
    </div>
);
}

export default ContactDetails;
