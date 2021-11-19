import React from 'react';
import './App.css';
import SearchContainer from './SearchContainer';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          A simple address search system.
        </p>
      </header>
      <SearchContainer />      
    </div>
  );
}

export default App;
