import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from '../CreatableSelect';
import SelectDropdown from '../DropdownContainer';

const selectStyles = {
  control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' })
};

const SelectWithSearchPure = ({
  options,
  onChange,
  onCreate,
  value,
  label,
  type,
  isOpen,
  toggleOpen,
  onMenuClose,
  isMulti,
  renderValue
}) => {
  return (
    <SelectDropdown isOpen={isOpen} label={label} toggleOpen={toggleOpen}>
      <CreatableSelect
        renderValue={renderValue}
        isMulti={isMulti}
        menuIsOpen={isOpen}
        options={options}
        value={value}
        placeholder="Search..."
        onChange={onChange}
        onCreateOption={onCreate}
        styles={selectStyles}
        isClearable={true}
        isSearchable={true}
      />
    </SelectDropdown>
  );
};

SelectWithSearchPure.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onCreate: PropTypes.func
};

export default SelectWithSearchPure;
