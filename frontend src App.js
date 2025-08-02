import React from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>QuickDesk Ticketing System</h1>
      <TicketForm />
      <TicketList />
    </div>
  );
}

export default App;
