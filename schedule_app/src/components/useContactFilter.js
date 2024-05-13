import { useState, useEffect } from 'react';

const useContactFilter = (contactsData, activeLetter) => {
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(() => {
        const filterContactsByLetter = (letter) => {
            const index = letter.charCodeAt(0) - 'A'.charCodeAt(0);
            let filtered = [];

            if (index >= 24) {  // If the letter is Y or Z, fetch previous contacts in reverse order
                for (let i = index; i >= 0 && filtered.length < 3; i--) {
                    filtered.push(...contactsData.filter(contact => 
                        contact.name.toUpperCase().startsWith(String.fromCharCode('A'.charCodeAt(0) + i))
                    ));
                }
            } else {  // Otherwise, fetch next contacts in forward order
                for (let i = index; i < 26 && filtered.length < 3; i++) {
                    filtered.push(...contactsData.filter(contact => 
                        contact.name.toUpperCase().startsWith(String.fromCharCode('A'.charCodeAt(0) + i))
                    ));
                }
            }

            // Sort the filtered contacts alphabetically
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            return filtered.slice(0, 3);
        };

        // Update state with filtered and sorted contacts
        setFilteredContacts(filterContactsByLetter(activeLetter));
    }, [contactsData, activeLetter]);  // Dependencies on which the effect reacts

    return filteredContacts;
};

export default useContactFilter;
