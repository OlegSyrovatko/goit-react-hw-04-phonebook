import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Modal from 'components/Modal';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import {
  Book,
  Button,
  CloseButton,
  ModalBlock,
  ModalItems,
} from './App.styled';

let localContacts = localStorage.getItem('contacts');
localContacts = JSON.parse(localContacts);

if (!localContacts) {
  localContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  localStorage.setItem('contacts', JSON.stringify(localContacts));
}

export const App = () => {
  const [contacts, setContacts] = useState(localContacts);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isNameExists = contacts.some(
      contact => contact.name?.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      return alert(`${name} is already in contacts`);
    }
    setContacts([...contacts, { id: nanoid(), name, number }]);
    toggleModal();
  };

  const handleChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  };
  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const visibleContacts = filterContacts();

  return (
    <Book>
      <h1>Phonebook</h1>
      <Button type="button" onClick={toggleModal}>
        Add Contact
      </Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalBlock>
            <ModalItems>
              <CloseButton type="button" onClick={toggleModal}>
                Close
              </CloseButton>
              <ContactForm onSubmit={addContact} />
            </ModalItems>
          </ModalBlock>
        </Modal>
      )}

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={handleChange} />
        </>
      )}
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </Book>
  );
};
