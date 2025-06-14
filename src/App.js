import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  const [page, setPage] = useState('home');

  if (page === 'dashboard') {
    return <Dashboard onBack={() => setPage('home')} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Vypa.</p>
        <button onClick={() => setPage('dashboard')}>Open Dashboard</button>
      </header>
    </div>
  );
}

export default App;
