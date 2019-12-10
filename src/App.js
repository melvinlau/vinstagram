import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
      </div>
    </div>
  );
}

export default App;
