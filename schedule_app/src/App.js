import React, { useState } from 'react';
import AddContact from './components/AddContact';
import MainScreen from './components/MainScreen'; // Your existing components
import ContactDetails from './components/ContactDetails'; // New component for contact details
import contactsData from '../src/data/contacts.json'; // Your contacts data

function App() {
  const [addingContact, setAddingContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(false);

  const handleAddContact = () => {
    setAddingContact(true);
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const saveContact = (contact) => {
    // Logic to save the contact...
    console.log(contact);
    setAddingContact(false);
  };

  return (
    <div className="App">
      {addingContact ? (
        <AddContact onSave={saveContact} contactsData={contactsData} />
      ) : selectedContact ? (
        <ContactDetails contact={selectedContact} />
      ) : (
        <MainScreen onAddContact={handleAddContact} onContactClick={handleContactClick} />
      )}
    </div>
  );
}

export default App;
