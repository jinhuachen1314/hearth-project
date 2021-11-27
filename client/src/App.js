import React from 'react';
import './App.css';
import SearchContainer from './SearchContainer';

function App() {
  return (
    <div className="App">
      <header>
        <h3>
          A simple address search system.
        </h3>
      </header>
      <SearchContainer />      
    </div>
  );
}

export default App;
