import ShortId from 'shortid';
import { withState, pipe, withHandlers } from '@synvox/rehook';

const ACTION_CONFIG = {
  SELECT_ACTION: 'select-option'
};

export default pipe(
  withState('badgeValues', 'setBadgeValues', []),
  withState('value', 'setValue', null),
  withHandlers({
    onCreate: ({ options, setOptions, value, setValue }) => inputValue => {
      const newOption = { value: ShortId.generate(), label: inputValue };
      setOptions([...options, newOption]);
      setValue(newOption);
    },
    onChange: ({
      value,
      setLabel,
      setValue,
      setIsOpen,
      isMulti,
      badgeValues,
      setBadgeValues
    }) => (newValue, actions) => {
      setValue(newValue);
      console.log(actions);
      if (actions.action === ACTION_CONFIG.SELECT_ACTION) {
        setBadgeValues([...badgeValues, newValue]);
      }
      console.log(newValue);
    },
    removeValue: ({ badgeValues, setBadgeValues }) => val => {
      console.log(val);
      const newBadgeValues = badgeValues.filter(({ value }) => value !== val);
      setBadgeValues(newBadgeValues);
    }
  })
);
