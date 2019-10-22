import ShortId from 'shortid';
import { withState, pipe, withHandlers } from '@synvox/rehook';

const ACTION_CONFIG = {
  SELECT_ACTION: 'select-option'
};

const options = ['BCB', 'PWC', 'McKinsey'];
const parsedOptions = options.map(option => {
  return {
    value: ShortId.generate(),
    label: option
  };
});

export default pipe(
  withState('options', 'setOptions', parsedOptions),
  withState('isOpen', 'setIsOpen', false),
  withState('value', 'setValue', null),
  withHandlers({
    onCreate: ({ options, setOptions, value, setValue }) => inputValue => {
      const newOption = { value: ShortId.generate(), label: inputValue };
      setOptions([...options, newOption]);
      setValue(newOption);
    },
    onChange: ({ value, setValue, setIsOpen }) => (newValue, actions) => {
      console.log('actions', actions);
      setValue(newValue);
      if ((actions.action = ACTION_CONFIG.SELECT_ACTION)) setIsOpen(false);
    },
    toggleOpen: ({ setIsOpen, isOpen }) => () => {
      setIsOpen(!isOpen);
    }
  })
);
