import React from 'react';
import PropTypes from 'prop-types';

import { Ul, Li, P, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Ul>
    {contacts.map(({ id, name, number }) => (
      <Li key={id}>
        <P>{name}</P>
        <P>{number}</P>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Li>
    ))}
  </Ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
