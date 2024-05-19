import React, { useState } from 'react';

function App() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = (event) => {
    event.preventDefault();
    // Perform validation logic here
    if (fullname && email && password) {
      // Show success alert
      window.alert('Sign up successful!');
    } else {
      // Show error alert
      window.alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <form onSubmit={validateForm}>
        <div>
          <label>Full Name:</label>
          <input 
            type="text" 
            id="fullname" 
            value={fullname} 
            onChange={(e) => setFullname(e.target.value)} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
