import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const OptionCheckbox = props => {
  const {
    isSelected = false,
    innerRef,
    innerProps,
    children,
    isFocused
  } = props;
  return (
    <div
      className={`d-flex p-2 align-space-between option ${isFocused &&
        'focused'}`}
      ref={innerRef}
      {...innerProps}
      tabIndex="1"
    >
      <div className="label">{children}</div>
      <div className="checkbox">
        <input
          type="checkbox"
          className="form-control"
          checked={isSelected}
          readOnly
        />
      </div>
    </div>
  );
};

OptionCheckbox.propTypes = {
  label: PropTypes.string
};

export default OptionCheckbox;
