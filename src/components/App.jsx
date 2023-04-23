import React from 'react';
// import { useState, useEffect } from 'react';
import { useState } from 'react';
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

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   } else {

  //     localStorage.setItem('contacts', JSON.stringify(defaultContacts));
  //     this.setState({ contacts: defaultContacts });
  //   }
  // }
  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const addContact = ({ name, number }) => {
    const isNameExists = contacts.some(contact => contact.name === name);
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
  // onDeleteContact = id => {
  //   this.setState({
  //     contacts: this.state.contacts.filter(contact => contact.id !== id),
  //   });
  // };

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
        // onDeleteContact={this.onDeleteContact}
      />
    </Book>
  );
};
