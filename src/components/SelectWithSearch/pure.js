import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import CreateLabel from '../CreateLabel';
import SelectDropdown from '../DropdownContainer';
import { components } from 'react-select';
import OptionCheckbox from '../OptionCheckbox';

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
  isMulti
}) => {
  const formatCreateLabel = inputValue => {
    return <CreateLabel value={inputValue} type={type} />;
  };
  console.log('isMulti', isMulti);
  const Option = isMulti ? OptionCheckbox : components.Option;

  return (
    <SelectDropdown isOpen={isOpen} label={label} toggleOpen={toggleOpen}>
      <CreatableSelect
        isClearable={false}
        controlShouldRenderValue={false}
        isMulti={isMulti}
        hideSelectedOptions={false}
        placeholder="Search..."
        isSearchable={true}
        menuIsOpen={isOpen}
        onChange={onChange}
        onCreateOption={onCreate}
        options={options}
        value={value}
        styles={selectStyles}
        components={{
          DropdownIndicator: null,
          IndicatorSeparator: null,
          Option
        }}
        formatCreateLabel={formatCreateLabel}
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
