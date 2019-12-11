import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import AuthContext from './context/AuthContext';

function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
        </div>
      </div>
    </Router>
  );
}

export default App;
