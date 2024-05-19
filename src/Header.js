import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li><button id="button1" onClick={home}>Home</button></li>
          <li><a href="about1.html">About</a></li>
          <li><a href="explore1.html">Explore</a></li>
          <li><a href="signup.html">Sign up</a></li>
          <li><a href="login1.html">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
