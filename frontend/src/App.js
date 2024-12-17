import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/message')
      .then((response) => {
        setBackendMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Recipe Sharing App</h1>
      <p>Log in or sign up to share your favorite recipes!</p>
      <h3>Backend says: {backendMessage}</h3>
    </div>
  );
}

export default App;
