// src/App.js
import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer'; // Import Footer component

const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => setMessage('Error: ' + error));
  };

  return (
    <div className="App">
      <h1>Subscribe to the DEV@Deakin Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}

      {/* Footer is added below */}
      <Footer />
    </div>
  );
};

export default App;
