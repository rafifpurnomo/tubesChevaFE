import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import Swal from "sweetalert2";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const logout = () => {
    Swal.fire({
      title: "Logout",
      text: "Apakah Anda yakin ingin logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, logout",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");
        localStorage.removeItem("nim")
        setLoggedIn(false);
        window.location = "/";
      }
    });
  };
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
        <a href="/admin">
          <button className="backAdminCta">kembali</button>
        </a>
        <button className="logoutAdminCTA" onClick={logout}>
          logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
