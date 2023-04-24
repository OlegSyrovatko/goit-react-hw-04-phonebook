import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Find } from './Filter.styled';

const Filter = ({ onChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.currentTarget.value);
    onChange(e);
  };

  return (
    <Find>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </Find>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
