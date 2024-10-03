import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [passwordTaken, setPasswordTaken] = useState(false); // New state for password taken

  const triggerDarkScreen = () => {
    setIsDark(true);
    setTimeout(() => {
      setIsDark(false);
    }, 1000); // Screen stays dark for 1 second
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-z]*$/.test(value)) {
      setName(value.slice(0, 4)); // Limit to 4 characters
      triggerDarkScreen(); // Trigger dark screen
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-z]*$/.test(value)) {
      setPassword(value.slice(0, 4)); // Limit to 4 characters
      triggerDarkScreen(); // Trigger dark screen
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setPasswordTaken(true); // Always mark the password as taken
    }
  };

  return (
    <div className={`App ${isDark ? 'dark-mode' : ''}`}>
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              maxLength={4} // Limit to 4 characters
              required
              className="spinning-input"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              maxLength={4} // Limit to 4 characters
              required
              className="spinning-input"
            />
          </div>
          {passwordTaken && (
            <p style={{ color: 'green' }}>Password is taken, you can't log in.</p>
          )}
          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
};

export default App;
