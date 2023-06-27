import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Admin from "../admin/Admin";
import "./LoginPage.css";

function LoginPage() {

  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [role, setRole] = useState("");

  useEffect(() => {
    // Cek apakah pengguna sudah login sebelumnya
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userRole = localStorage.getItem("userRole");

    if (isLoggedIn && isLoggedIn === "true" && userRole) {
      setLoggedIn(true);
      setRole(userRole);
    }
  }, []);

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
            setRole("admin");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", "admin");
          } else if (role === "mahasiswa") {
            setRole("mahasiswa");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", "mahasiswa");
          } else {
            setRole("");
            setLoggedIn(false)
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

  if (loggedIn && role === "admin") {
    return  <Admin/>;
    // return <Navigate to="/admin" replace={true}/>;
  }
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
