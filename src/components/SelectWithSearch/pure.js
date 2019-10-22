import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';

const SelectWithSearchPure = ({ options, onChange, onCreate, value }) => {
  console.log(options);
  return (
    <div>
      <CreatableSelect
        isClearable
        onChange={onChange}
        onCreateOption={onCreate}
        options={options}
        value={value}
      />
    </div>
  );
};

SelectWithSearchPure.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onCreate: PropTypes.func
};

export default SelectWithSearchPure;
