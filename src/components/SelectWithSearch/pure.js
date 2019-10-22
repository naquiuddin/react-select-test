import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import CreateLabel from '../CreateLabel';
import { ButtonDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const selectStyles = {
  control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' })
};

const SelectWithSearchPure = ({
  options,
  onChange,
  onCreate,
  value,
  type,
  isOpen,
  toggleOpen,
  onMenuClose
}) => {
  const formatCreateLabel = inputValue => {
    return <CreateLabel value={inputValue} type={type} />;
  };

  return (
    <ButtonDropdown isOpen={isOpen} toggle={toggleOpen}>
      <DropdownToggle caret>
        {(value && value.label) || 'Select'}
      </DropdownToggle>
      <DropdownMenu className="b-0">
        <CreatableSelect
          isClearable
          placeholder="Search..."
          isSearchable={true}
          menuIsOpen={isOpen}
          onBlur={ev => console.log(ev)}
          onChange={onChange}
          onCreateOption={onCreate}
          options={options}
          value={value}
          styles={selectStyles}
          components={{ DropdownIndicator: null, IndicatorSeparator: null }}
          formatCreateLabel={formatCreateLabel}
        />
      </DropdownMenu>
    </ButtonDropdown>
  );
};

SelectWithSearchPure.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onCreate: PropTypes.func
};

export default SelectWithSearchPure;
