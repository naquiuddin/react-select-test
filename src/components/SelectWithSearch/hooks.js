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
      console.log('newOption', newOption);
      console.log(setOptions);
      setOptions([...options, newOption]);
      setValue(newOption);
    },
    onChange: ({
      value,
      setLabel,
      setValue,
      setIsOpen,
      isMulti,
      onValuesChange = () => {}
    }) => (newValue, actions) => {
      setValue(newValue);
      if (actions.action === ACTION_CONFIG.SELECT_ACTION && !isMulti)
        setIsOpen(false);
      console.log(newValue);
      if (newValue) {
        const label = isMulti
          ? newValue.reduce((accumulator, { label }) => {
              return !accumulator ? label : accumulator + ', ' + label;
            }, '')
          : newValue.label;
        setLabel(label);
      } else {
        setLabel('Select');
      }
      onValuesChange(newValue);
    },
    toggleOpen: ({ setIsOpen, isOpen }) => () => {
      setIsOpen(!isOpen);
    }
  })
);
