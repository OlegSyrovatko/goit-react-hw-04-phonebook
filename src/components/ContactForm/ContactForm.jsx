import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Label } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="name">
            <p>Name:</p>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <Label htmlFor="number">
            <p>Number:</p>
            <input
              type="tel"
              id="number"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <Button type="submit">Add Contact</Button>
        </Form>
      </>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
