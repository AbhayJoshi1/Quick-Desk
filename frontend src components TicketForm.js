import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: 'Low'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/tickets', formData);
    window.location.reload(); // reload list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="subject" placeholder="Subject" onChange={handleChange} required />
      <br />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <br />
      <select name="priority" onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <br />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default TicketForm;
