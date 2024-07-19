import React, { useState } from 'react';
import axios from 'axios';
import './MakeRequest.css'; 

const MakeRequest = () => {
  const [request, setRequest] = useState({
    name: '',
    type: '',
    date: '',
    reason: '',
    description: ''
  });

  const handleChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/requests', request)
      .then(response => {
        console.log('Request made successfully:', response.data);
     
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      
      });
  };

  return (
    <div className="make-request-container">
      <h1>Make a Request</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Employee Name:</label>
          <input type="text" id="name" name="name" value={request.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="type">Request Type:</label>
          <input type="text" id="type" name="type" value={request.type} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Leave Date:</label>
          <input type="date" id="date" name="date" value={request.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason for Leave:</label>
          <input type="text" id="reason" name="reason" value={request.reason} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={request.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MakeRequest;
