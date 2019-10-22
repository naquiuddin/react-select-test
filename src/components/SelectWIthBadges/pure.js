import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from '../CreatableSelect';
import { Badge, Button } from 'reactstrap';

const SelectWithBadges = ({
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
  renderValue,
  badgeValues,
  removeValue
}) => {
  return (
    <div className="flex flex-column">
      <CreatableSelect
        renderValue={true}
        isMulti={false}
        options={options}
        value={value}
        placeholder="Search..."
        onChange={onChange}
        onCreateOption={onCreate}
        isClearable={true}
        isSearchable={true}
      />
      <div>
        {badgeValues.map(({ label, value }, index) => (
          <Button key={index} color="primary m-2" outline>
            {label}{' '}
            <Badge
              onClick={() => removeValue(value)}
              value={value}
              color="secondary"
            >
              &times;
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
};

SelectWithBadges.propTypes = {
  type: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string
};

export default SelectWithBadges;
