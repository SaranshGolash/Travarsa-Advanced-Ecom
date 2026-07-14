import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [serverStatus, setServerStatus] = useState('Checking server...');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => setServerStatus(data.message))
      .catch(err => setServerStatus('Server not connected'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Travarsa Advanced Ecom</h1>
        <p>React Frontend with Express Backend</p>
        <div className="status">
          <strong>Server Status:</strong> {serverStatus}
        </div>
      </header>
    </div>
  );
}

export default App;
