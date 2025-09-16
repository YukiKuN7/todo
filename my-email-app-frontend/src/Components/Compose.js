import React, { useState } from 'react';

const Compose = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send the email data to your backend API
    console.log('Sending email:', { recipient, subject, body });
    alert('Email sent (simulated)!');
    
    // Clear the form after submission
    setRecipient('');
    setSubject('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Compose</h2>
      <div>
        <label>To:</label>
        <input type="email" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </div>
      <div>
        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Compose;