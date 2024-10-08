import React, { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/subscribe', { email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage('Failed to subscribe.');
      });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Subscribe to the DEV@Deakin Newsletter</h1>
      <form onSubmit={handleSubscribe}>
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
    </div>
  );
}

export default HomePage;
