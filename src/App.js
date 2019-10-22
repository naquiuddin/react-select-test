import React from 'react';
import SelectWithSearch from './components/SelectWithSearch';
import ShortId from 'shortid';
import '../src/styles/home.scss';

const options = ['BCB', 'PWC', 'McKinsey'];
const parsedOptions = options.map(option => {
  return {
    value: ShortId.generate(),
    label: option
  };
});

function App() {
  return (
    <div className="clients">
      <h2>Clients</h2>
      <div className="m-2">
        <SelectWithSearch type="client" options={parsedOptions} value={null} />
      </div>
      <div className="m-2">
        <SelectWithSearch
          type="client"
          isMulti
          options={parsedOptions}
          value={[]}
        />
      </div>
    </div>
  );
}

export default App;
