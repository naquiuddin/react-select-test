import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const SelectDropdown = props => {
  const { isOpen, toggleOpen, label, children } = props;
  return (
    <ButtonDropdown isOpen={isOpen} toggle={toggleOpen}>
      <DropdownToggle caret>{label || 'Select'}</DropdownToggle>
      <DropdownMenu className="b-0">{children}</DropdownMenu>
    </ButtonDropdown>
  );
};

SelectDropdown.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.object
};

export default SelectDropdown;
