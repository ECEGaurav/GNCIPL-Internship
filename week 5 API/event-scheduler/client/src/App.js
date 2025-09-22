// client/src/App.js

import React from 'react';
import EventDashboard from './components/EventDashboard';

function App() {
  return (
    <div style={{ maxWidth: 1000, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Event Scheduler</h1>
      <EventDashboard />
    </div>
  );
}

export default App;
