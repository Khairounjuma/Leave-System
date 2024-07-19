import React from 'react';
import MakeRequest from './MakeRequest';

import './EmployeePage.css';

const EmployeePage = () => {
  return (
    <div className="employee-page-container">

      <main>
        <section className="make-request-section">
        
          <MakeRequest />
        </section>
      </main>
    </div>
  );
};

export default EmployeePage;
