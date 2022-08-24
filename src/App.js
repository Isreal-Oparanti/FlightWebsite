import React from "react";
import AdminSettings from './components/AdminSettings.js';
import SettingsTab from './components/SettingsTab.js';
import Users from './components/Users.js';
import './App.css';
import './style.css';
// importing components....///
import Sched from './components/Sched.js';
import Sales from './components/Sales.js';
import Ops from './components/Ops.js';
import Crew from './components/Crew.js';
import Handling from './components/Handling.js';
import Mix from './components/Mix.js';
import Report from './components/Report';


import { BrowserRouter as Router , Route, Link, Routes } from 'react-router-dom';
window.myUTC = 'mine';
function App() {
  return (
    <div id="app">
        <Router basename={process.env.PUBLIC_URL}> 
          <header>
            <nav>
              <h1 id="logo">T<sub>r</sub><span className="logoS"></span></h1>
              <div className="container-menu">
                <Link to="/"><div id="menu-item">scheduling</div></Link>
                <Link to="/sales"><div id="menu-item">sales<i className="fas fa-caret-down"></i></div></Link>
                <Link to="/ops"><div id="menu-item">ops<i className="fas fa-caret-down"></i></div></Link>
                <Link to="/crew"><div id="menu-item">crew<i className="fas fa-caret-down"></i></div></Link>
                <Link to="/crew"><div id="menu-item">handling<i className="fas fa-caret-down"></i></div></Link>
                <Link to="/mix"><div id="menu-item">mix<i className="fas fa-caret-down"></i></div></Link>
                <Link to="/report"><div id="menu-item">report<i className="fas fa-caret-down"></i></div></Link> 
              </div>
              <div className="top__right-panel">
                  <a href="/"><i id='icon' className="fa fa-plane"></i></a>
                  <a href="/"><i id='icon' className="fas fa-wrench"></i></a>
                  <Link to="/AdminSettings"><i id='icon' className="fa fa-cog"></i></Link>
                  <a href="/"><i id='icon' className="fas fa-user"></i></a>
              </div>
              </nav>
         
            </header>
            <Routes>
              <Route path="/" element={<Sched />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/ops" element={<Ops />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/handling" element={<Handling />} />
              <Route path="/mix" element={<Mix />} />
              <Route path="/report" element={<Report />} /> 
              <Route path="/AdminSettings" element={<AdminSettings />} /> 
              <Route path="/url/to/SettingsTab" element={<SettingsTab />} />
              <Route path="/url/to/Users" element={<Users />} />
              {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>       
          </Router>
    </div>
  );
}

export default App;
