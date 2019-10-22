import React from 'react';
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

export default OptionCheckbox;
