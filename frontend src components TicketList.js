import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tickets')
      .then((res) => setTickets(res.data));
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>All Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>
            <strong>{ticket.subject}</strong> - {ticket.priority}<br />
            {ticket.description}<br />
            <small>Created at: {new Date(ticket.createdAt).toLocaleString()}</small>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
