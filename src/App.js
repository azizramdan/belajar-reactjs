import React from 'react';
import './App.css';
import Event from './Event';

function App() {
  const onClick = () => window.alert('button di klik')

  return (
    <div className="App">
      <Event text='klik aing' onCustomClick={onClick} />
    </div>
  );
}

export default App;
