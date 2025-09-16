import React, { useState, useEffect } from 'react';

const Inbox = () => {
  // We'll use state to hold the list of emails
  const [emails, setEmails] = useState([]);

  // Placeholder for fetching emails from your backend API
  useEffect(() => {
    // In a real app, you'd make an API call here:
    // fetch('/api/emails')
    //   .then(response => response.json())
    //   .then(data => setEmails(data));
    
    // For now, let's use some dummy data
    const dummyEmails = [
      { id: 1, subject: 'Welcome to your new inbox!', sender: 'System', date: '2025-09-16' },
      { id: 2, subject: 'Your project plan', sender: 'John Doe', date: '2025-09-15' },
    ];
    setEmails(dummyEmails);
  }, []);

  return (
    <div>
      <h2>Inbox</h2>
      {emails.length > 0 ? (
        <ul>
          {emails.map(email => (
            <li key={email.id}>
              <strong>From: {email.sender}</strong> - {email.subject}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your inbox is empty.</p>
      )}
    </div>
  );
};

export default Inbox;