import ShortId from 'shortid';
import { withState, pipe, withHandlers } from '@synvox/rehook';

const options = ['BCB', 'PWC', 'McKinsey'];
const parsedOptions = options.map(option => {
  return {
    value: ShortId.generate(),
    label: option
  };
});

export default pipe(
  withState('options', 'setOptions', parsedOptions),
  withState('value', 'setValue', null),
  withHandlers({
    onCreate: ({ options, setOptions, value, setValue }) => inputValue => {
      const newOption = { value: ShortId.generate(), label: inputValue };
      setOptions([...options, newOption]);
      setValue(newOption);
    },
    onChange: ({ value, setValue }) => newValue => {
      setValue(newValue);
    }
  })
);
