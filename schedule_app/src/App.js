import React, { useState } from 'react';
import AddContact from './components/AddContact';
import MainScreen from './components/MainScreen'; // Your existing components
import contactsData from '../src/data/contacts.json'; // Your contacts data

function App() {
  const [addingContact, setAddingContact] = useState(false);

  const handleAddContact = () => {
    setAddingContact(true);
  };

  const saveContact = (contact) => {
    // Logic to save the contact...
    console.log(contact);
    setAddingContact(false);
  };

  if (addingContact) {
    return (
      <AddContact onSave={saveContact} contactsData={contactsData} />
    );
  }

  return (
    <MainScreen onAddContact={handleAddContact} />
  );
}

export default App;
