import React, { useState } from 'react';
import userImage from '../images/user.png';
import '../components/AddContact.css';
import crossIcon from '../images/cross.png';


const AddContact = ({ onSave, contactsData,onCancel }) => {
        const [contact, setContact] = useState({
        name: '',
        surname: '',
        relationship: '',
        phone: '',
        email: '',
        address: '',
        image: ''

    });
    const [error, setError] = useState('');
    const [requiredFields, setRequiredFields] = useState({
        name: false,
        phone: false
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
        // Check if the field is required and if it's empty
        if (e.target.value.trim() === '') {
            setRequiredFields({ ...requiredFields, [e.target.name]: true });
        } else {
            setRequiredFields({ ...requiredFields, [e.target.name]: false });
        }
    };

    const handleSave = () => {
        // Check if the required fields are filled
        if (contact.name.trim() === '' || contact.phone.trim() === '') {
            setError('Name and phone number are required fields.');
            return;
        }

        // Check if the contact with the same name or phone number already exists
        console.log(contactsData[0].name);
        const exists = contactsData.some(c => 
            c.name.toLowerCase() === contact.name.toLowerCase() && 
            c.phone === contact.phone
        );

        if (exists) {
            setError('A contact with the same name and phone number already exists.');
            return;
        }

        onSave(contact);
        setError(''); // Clear any previous errors if the save is successful
    };

    return (
        
        <div className="add-contact-form">
              <button className='backbutton' onClick={onCancel}>
                <img src={crossIcon} className='back' alt={contact.image} />
            </button>
            <h2> New Contact</h2>
            <img src={userImage} alt={contact.name} className="contact-image" />
            <input
                type="text"
                name="name"
                placeholder="Contact name"
                value={contact.name}
                onChange={handleChange}
                style={{ borderColor: requiredFields.name ? 'red' : '' }}
            />
            <input
                type="text"
                name="surname"
                placeholder="Contact surname"
                value={contact.surname}
                onChange={handleChange}
            />
            <input
                type="text"
                name="relationship"
                placeholder="Relationship status"
                value={contact.relationship}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Telf"
                value={contact.phone}
                onChange={handleChange}
                style={{ borderColor: requiredFields.phone ? 'red' : '' }}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={contact.address}
                onChange={handleChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className='AddContact' onClick={handleSave}>Save Contact</button>
        </div>
    );
};

export default AddContact;
