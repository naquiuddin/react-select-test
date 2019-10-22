import ShortId from 'shortid';
import { withState, pipe, withHandlers } from '@synvox/rehook';

const ACTION_CONFIG = {
  SELECT_ACTION: 'select-option'
};

export default pipe(
  withState('label', 'setLabel', 'Select'),
  withState('isOpen', 'setIsOpen', false),
  withState('value', 'setValue', null),
  withHandlers({
    onCreate: ({ options, setOptions, value, setValue }) => inputValue => {
      const newOption = { value: ShortId.generate(), label: inputValue };
      setOptions([...options, newOption]);
      setValue(newOption);
    },
    onChange: ({ value, setLabel, setValue, setIsOpen, isMulti }) => (
      newValue,
      actions
    ) => {
      console.log(newValue);
      console.log('actions', actions);
      setValue(newValue);
      if (actions.action === ACTION_CONFIG.SELECT_ACTION && !isMulti)
        setIsOpen(false);
      const label = isMulti
        ? newValue.reduce((accumulator, { label }) => {
            return !accumulator ? label : accumulator + ', ' + label;
          }, '')
        : newValue.label;
      console.log(label);
      setLabel(label);
    },
    toggleOpen: ({ setIsOpen, isOpen }) => () => {
      setIsOpen(!isOpen);
    }
  })
);
