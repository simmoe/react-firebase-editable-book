import React from 'react'
import './App.css'
import Book from './components/Book'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Editable book</h1>
        <Book />
      </header>
    </div>
  );
}

export default App;
