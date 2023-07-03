import React from 'react';
import './Navbar.css';
 
function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <p className='judul'>Cashy</p>
            <ul className='list'>
                <a href="/admin"><li>home</li></a>
                <a href="/Income"><li>income</li></a>
                <a href="/Profile"><li>profile</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar