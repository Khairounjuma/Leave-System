import React from 'react';
import ViewRequests from './ViewRequests'; 

import './AdminPage.css'; 

const AdminPage = () => {
  return (
    <div className="admin-container">
      
      <main className="admin-main">
        <section className="view-requests-section">
          <ViewRequests />
        </section>
      </main>
      
    </div>
  );
};

export default AdminPage;
