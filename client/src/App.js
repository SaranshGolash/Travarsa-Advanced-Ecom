import React, { useEffect, useState } from 'react';
import './App.css';
import Landing from './pages/Landing';

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
      <Landing />
    </div>
  );
}

export default App;
