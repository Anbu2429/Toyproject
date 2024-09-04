import React, { useState } from 'react';
import './SignIn.css';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <a href = "#signup" className="newsignin" onClick={()=>setpage('Newlogin')}>Create account?</a><br></br>
        <a href = "#signin">Already have account</a>
      </form>
    </div>
  );
}

export default SignIn;