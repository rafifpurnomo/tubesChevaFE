import React from "react";
import './NavbarBeforeLogin.css'

function NavbarBeforeLogin() {
  return (
    <div>
      <nav className="navbar">
        <p className="judul">Cashy</p>
        <ul className="list">
          <a href="/">
            <li>home</li>
          </a>
          <a href="/">
            <li>Login</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarBeforeLogin;
