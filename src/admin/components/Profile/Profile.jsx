import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginPage from '../../../loginPage/LoginPage';
import './Profile.css'

function Profile() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    const logout = () =>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");
        setLoggedIn(false);
        
    }
    if (loggedIn === false ) {
        return  <LoginPage/>;
      }
  return (
    <>
    <div className="adminLogoutCTA">
        <button 
        className='logoutAdminCTA'
        onClick={logout}
        >
            logout
        </button>

    </div>
    </>
  )
}

export default Profile;