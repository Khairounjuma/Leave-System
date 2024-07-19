import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewRequest.css'; 

const ViewRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('/api/requests')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the requests!", error);
      });
  }, []);

  return (
    <div className="view-requests-container">
      <h1 className="view-requests-title">View Requests</h1>
      <ul className="requests-list">
        {requests.map(request => (
          <li key={request.id} className="request-item">
            <div className="request-info">
              <span className="request-type">{request.type}</span>
              <span className="request-date">{new Date(request.date).toLocaleDateString()}</span>
            </div>
            <p className="request-description">{request.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewRequests;
