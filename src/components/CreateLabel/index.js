import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CreateLabel = ({ value, type }) => {
  return (
    <span className="create-label">
      &#43; Add <strong>{value}</strong> as new {type}
    </span>
  );
};

CreateLabel.propTypes = {};

export default CreateLabel;
