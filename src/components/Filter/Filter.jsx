import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Find } from './Filter.styled';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
    this.props.onChange(e);
  };

  render() {
    const { filter } = this.state;
    return (
      <Find>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />
      </Find>
    );
  }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
