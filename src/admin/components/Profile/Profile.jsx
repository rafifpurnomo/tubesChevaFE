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
      <div className="profilePageContainer">
        <div className="profilePageFoto">
          <img
            src="/asset/contohPPorang.jpeg"
            alt="foto profile"
            className="fotoProfile"
          />
        </div>
        <div className="userProfile">
          <div className="namaUser">
            <h1 className="profileNama">nama</h1>
            <span className="spanProfile">nama anda</span>
          </div>
          <div className="ProfiledivisiUser">
            <h1 className="profileDivisi">divisi</h1>
            <span className="spanProfile">divisi anda</span>
          </div>
          <div className="roleUser">
            <h1 className="profileRole">role</h1>
            <span className="spanProfile">role anda</span>
          </div>
        </div>
      </div>
      <div className="adminLogoutCTA">
        <button className="backAdminCta">kembali</button>
        <button className="logoutAdminCTA" onClick={logout}>
          logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
