import React, { useState } from 'react';
import SelectWithSearch from './components/SelectWithSearch';
import ShortId from 'shortid';
import '../src/styles/home.scss';
import SelectWithBadges from './components/SelectWIthBadges';

const options = ['BCB', 'PWC', 'McKinsey'];
const parsedOptions = options.map(option => {
  return {
    value: ShortId.generate(),
    label: option
  };
});

const App = () => {
  const [options, setOptions] = useState(parsedOptions);
  return (
    <div className="clients">
      <h2>Clients</h2>
      <div className="m-2">
        <SelectWithSearch
          type="client"
          options={options}
          setOptions={setOptions}
          value={null}
          renderValue={false}
        />
      </div>
      <div className="m-2">
        <SelectWithSearch
          type="stakeholders"
          isMulti
          setOptions={setOptions}
          options={options}
          value={[]}
          renderValue={false}
        />
      </div>
      <div className="m2">
        <SelectWithBadges
          isMulti
          type="skill"
          setOptions={setOptions}
          options={options}
        />
      </div>
    </div>
  );
};

export default App;
