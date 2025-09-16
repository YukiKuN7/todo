import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inbox from './Components/Inbox';
import Compose from './Components/Compose';
import './App.css'; // You can add some basic styles here

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
            <li>
              <Link to="/compose">Compose</Link>
            </li>
          </ul>
        </nav>
        <hr />
        
        {/* Router to switch between views */}
        <div className="main-content">
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/compose" element={<Compose />} />
            {/* Set a default path to redirect to the inbox */}
            <Route path="/" element={<Inbox />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;