import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    } else {
      const defaultContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
      localStorage.setItem('contacts', JSON.stringify(defaultContacts));
      this.setState({ contacts: defaultContacts });
    }
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const isNameExists = this.state.contacts.some(
      contact => contact.name === name
    );
    if (isNameExists) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(), name, number }, ...contacts],
    }));
    this.toggleModal();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  };
  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { filter, showModal } = this.state;
    const visibleContacts = this.filterContacts();

    return (
      <Book>
        <h1>Phonebook</h1>
        <Button type="button" onClick={this.toggleModal}>
          Add Contact
        </Button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalBlock>
              <ModalItems>
                <CloseButton type="button" onClick={this.toggleModal}>
                  Close
                </CloseButton>
                <ContactForm onSubmit={this.addContact} />
              </ModalItems>
            </ModalBlock>
          </Modal>
        )}

        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.handleChange} />
          </>
        )}
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Book>
    );
  }
}
