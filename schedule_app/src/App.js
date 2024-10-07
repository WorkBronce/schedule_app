import React, { useState } from 'react';
import AddContact from './components/AddContact';
import MainScreen from './components/MainScreen'; // Your existing components
import ContactDetails from './components/ContactDetails'; // New component for contact details
import contactsData from '../src/data/contacts.json'; // Your contacts data
import ContactLocation from './components/ContactLocation';
import TodoList from './components/TodoList';



function App() {
  const [addingContact, setAddingContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(false);
  const [showMaps, setShowMaps] = useState(false);
  const [showTodoList, setShowTodoList] = useState(false);

  const handleAddContact = () => {
    setAddingContact(true);
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleShowMaps = () => {
    setShowMaps(true);
  };

  const handleShowTodoList = () => {
    setShowTodoList(true);
  }

  const saveContact = (contact) => {

    console.log(contact);
    contactsData.push(contact);
    setAddingContact(true);
  };



  const handleCancel = () => {
    setAddingContact(false);
    setSelectedContact(false);
    setShowMaps(false);
    setShowTodoList(false);
  }

  return (
    <div className="App">
      {
        addingContact ? ( <AddContact onSave={saveContact} contactsData={contactsData} onCancel={handleCancel} />) 
        : selectedContact ? (
          showMaps ? (
            <ContactLocation contactData={contactsData} contact={selectedContact} onCancel={handleCancel} />
          ) : (
            showTodoList ? (
              <TodoList contactData={contactsData} contact={selectedContact} onCancel={handleCancel} />
            ) : (
              <ContactDetails contactData={contactsData} contact={selectedContact} onCancel={handleCancel} onShowMaps={handleShowMaps} onShowTodoList={handleShowTodoList}/>
        
            )
          )
        ) : (
          <MainScreen onAddContact={handleAddContact} onContactClick={handleContactClick} onCancel={handleCancel} />
        )
      }
    </div>
  );
}

export default App;
