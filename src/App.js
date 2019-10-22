import React from 'react';
import SelectWithSearch from './components/SelectWithSearch';
import '../src/styles/home.scss';

function App() {
  return (
    <div className="clients">
      <h2>Clients</h2>
      <SelectWithSearch />
    </div>
  );
}

export default App;
