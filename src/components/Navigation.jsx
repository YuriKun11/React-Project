import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import './Nav.css';
import Main from './Main.jsx';
import Command from './pages/Commands.jsx';
import Tutorials from './pages/Tutorials.jsx';


const log = 'Terminal';
const Logo = <span style={{ color: '#007ACC' }}>{log}</span>;

const Navigation = () => {
  return (
    <Router>
      <div className="sidebar">
        <nav className="navbar">
          <h3 className='navbar-logo'>{Logo} Playground</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link" activeclassname="active">Home</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/commands" className="nav-link" activeclassname="active">Commands</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tutorials" className="nav-link" activeclassname="active">Tutorials</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/commands" element={<Command />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
