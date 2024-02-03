
import React from 'react';


const Navigation = ({handleTabClick }) => {
  return (
    <div className="px-3 py-2 border-bottom mb-3" style={{ borderBottom: '4px solid', width: '100%', backgroundColor: '#f8f8f8' }}>
      <div className="container d-flex flex-wrap justify-content-center">
        <header className="d-flex justify-content-center py-0">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => handleTabClick('findDoctor')}>Find Doctor</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => handleTabClick('findHospital')}>Find Hospital</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => handleTabClick('videoConsult')}>Video Consult</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => handleTabClick('medicines')}>Medicines</a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Navigation;
