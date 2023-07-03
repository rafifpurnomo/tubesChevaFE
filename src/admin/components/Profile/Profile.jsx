import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginPage from "../../../loginPage/LoginPage";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    setLoggedIn(false);
  };
  if (loggedIn === false) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <>
      <Navbar />
      <div className="adminLogoutCTA">
        <button className="logoutAdminCTA" onClick={logout}>
          logout
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default Profile;
