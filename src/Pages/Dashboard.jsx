import React, { useState } from 'react';
import UpperNavbar from '../Component/Homescreen/Dashboard/UpperNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topsec from '../Component/Homescreen/Dashboard/Rightpages/Topsec';
import Student from '../Component/Homescreen/Dashboard/Students/Student';
import Teacher from '../Component/Homescreen/Dashboard/Teachers/Teacher';
import Course from '../Component/Homescreen/Dashboard/Courses/Course';


import StudentEnrollment from '../Component/Homescreen/Dashboard/EnrollmentManagers/StudentEnrollment';
import Result from '../Component/Homescreen/Dashboard/Resultdata/Result';
import ResultList from '../Component/Homescreen/Dashboard/Resultdata/ResultList';

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activePage, setActivePage] = useState('dashboard'); // track which page is active

  // Sidebar links
  const links = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'students', label: 'Students' },
    { id: 'teachers', label: 'Teachers' },
      { id: 'Course', label: 'Course' },
       { id: 'Enrollement', label: 'Enrollement' },
    { id: 'Result', label: 'Result' },
     { id: 'settings', label: 'Settings' },
   
  ];

  return (
    <div className="d-flex flex-column vh-100">

      {/* Top Navbar */}
      <div className="bg-white text-black p-3 shadow d-flex justify-content-between align-items-center">
        <UpperNavbar />

        {/* Mobile toggle button for sidebar */}
        <button
          className="btn btn-primary d-md-none"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          ☰
        </button>
      </div>

      {/* Collapsible sidebar for mobile */}
      {showSidebar && (
        <div className="bg-light border-bottom d-md-none p-3">
          <ul className="list-unstyled mb-0">
            {links.map(link => (
              <li key={link.id} className="mb-2">
                <button
                  className="btn btn-link text-dark p-0 text-decoration-none"
                  onClick={() => {
                    setActivePage(link.id);
                    setShowSidebar(false); // close sidebar on mobile after click
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop layout */}
      <div className="d-flex flex-grow-1">




  {/* Sidebar */}
  <div
    className="bg-white border-end shadow-sm p-3 d-none d-md-block"
    style={{ width: "220px", minWidth: "220px" }}
  >
    <h5 className="mb-4 fw-bold text-primary">
      School Panel
    </h5>

    <ul className="nav flex-column gap-1">
      {links.map(link => (
        <li key={link.id} className="nav-item">
          <button
            className={`nav-link w-100 text-start rounded px-3 py-2 
              ${activePage === link.id 
                ? "bg-primary text-white fw-semibold shadow-sm" 
                : "text-dark"
              }`}
            onClick={() => setActivePage(link.id)}
            style={{ transition: "0.2s" }}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  </div>

        {/* Main content */}
        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          {activePage === 'dashboard' && (
         <Topsec />
          )}
          {activePage === 'students' && (
        
            <Student />
          )}
          {activePage === 'teachers' && (
            <div>
                  <Teacher />
            </div>
          )}
           {activePage === 'Course' && (
            <div>
                   <Course />
            </div>
          )}
           {activePage === 'Enrollement' && (
            <div>
                <StudentEnrollment />
            </div>
          )}
           {activePage === 'Result' && (
            <div>
                <Result />
            </div>
          )}
          {activePage === 'settings' && (
            <div>
                   <ResultList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}