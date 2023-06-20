import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createBrowserRouter, Router, RouterProvider, Routes, useNavigate } from "react-router-dom";
import Admin from "../admin/Admin";
import "./LoginPage.css";

function LoginPage() {

  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    if (loggedIn && role === 'admin') {
      navigate('/admin'); 
    }
  }, [loggedIn, role, navigate]);

  const handleLogin = () => {
    if (nama && nim && password) {
      axios
        .post("http://localhost:3000/getroleuser", {
          nama: nama,
          nim: nim,
          password: password,
        })
        .then((response) => {
          const role = response.data.role;
          if (role === "admin") {
            console.log("Pengguna adalah admin");
            setRole("admin");
          } else if (role === "mahasiswa") {
            console.log("Pengguna adalah mahasiswa");
            setRole("mahasiswa");
          } else {
            console.log("Peran tidak valid");
            setRole("");
          }
          setLoggedIn(true);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Mohon lengkapi data login");
    }
  };


  return (
    <div>
      <div className="LoginPage">
        <div className="LoginPageContainer">
          <h1>hello chevas! welcome to</h1>
          <img
            src="/asset/cashyLogo.png"
            alt="cashylogo"
            className="LoginPageCashyLogo"
          />
        </div>
        <div className="LoginPageContainerInput">
          <img src="/asset/mobile.png" alt="" className="LoginPageMobile" />
          <div className="inputUser">
            <h1>Nama</h1>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="inputUser">
            <h1>nim</h1>
            <input
              type="text"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
            />
          </div>
          <div className="inputUser">
            <h1>password</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginCTA">
            <button onClick={handleLogin}>login</button>
          </div>
        </div>
        <div className="LoginPageBottom"></div>
      </div>
    </div>
  );
}

export default LoginPage;
