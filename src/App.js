import React from 'react';
import './App.css';

const getButtonText = () => {
  return 'Click Me';
};

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()}
      </button>
    </div>
  );
};

export default App;
