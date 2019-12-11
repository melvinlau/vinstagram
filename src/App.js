import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Sidebar from './components/Sidebar/Sidebar';
import { UserContext, initialUserState } from './context/UserContext';

function App() {
  const [currentUser, setCurrentUser] = useState(initialUserState);
  return (
    <UserContext.Provider value={initialUserState}>
      <Router>
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
