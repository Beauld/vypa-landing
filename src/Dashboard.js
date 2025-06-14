import React from 'react';
import './Dashboard.css';

function Dashboard({ onBack }) {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <h1>Vypa Dashboard</h1>
        {onBack && (
          <button className="Dashboard-back" onClick={onBack}>
            Back
          </button>
        )}
      </header>
      <p>This is a simple dashboard placeholder similar to Yodeck.</p>
      <ul>
        <li>Screens</li>
        <li>Playlists</li>
        <li>Schedules</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Dashboard;
