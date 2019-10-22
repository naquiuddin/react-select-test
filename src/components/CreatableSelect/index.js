import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import CreateLabel from '../CreateLabel';
import { components } from 'react-select';
import OptionCheckbox from '../OptionCheckbox';

const SelectWithSearchPure = ({
  options,
  onChange,
  onCreateOption,
  value,
  type,
  menuIsOpen,
  toggleOpen,
  onMenuClose,
  isMulti,
  renderValue,
  placeholder,
  selectStyles,
  isClearable,
  isSearchable
}) => {
  const formatCreateLabel = inputValue => {
    return <CreateLabel value={inputValue} type={type} />;
  };
  const Option = isMulti ? OptionCheckbox : components.Option;

  return (
    <CreatableSelect
      isClearable={isClearable}
      hideSelectedOptions={false}
      isSearchable={isSearchable}
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Option
      }}
      formatCreateLabel={formatCreateLabel}
      controlShouldRenderValue={renderValue}
      isMulti={isMulti}
      placeholder={placeholder}
      menuIsOpen={menuIsOpen}
      onChange={onChange}
      onCreateOption={onCreateOption}
      options={options}
      value={value}
      styles={selectStyles}
    />
  );
};

SelectWithSearchPure.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onCreate: PropTypes.func
};

export default SelectWithSearchPure;
