import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Kategori from "./components/kategori/Kategori";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailKategori from "./components/DetailKategori/DetailKategori";
import AddKategori from "./components/AddKategori/AddKategori";
import Pengeluaran from "./components/Pengeluaran/Pengeluaran";
import CreateUser from "./components/CreateUser/CreateUser";
import DetailPengeluaran from "./components/DetailPengeluaran/DetailPengeluaran";
import AddPengeluaran from "./components/AddPengeluaran/AddPengeluaran";
import AddCreateUser from "./components/AddCreateUser/AddCreateUser";
import DetailUser from "./components/DetailUser/DetailUser";
import Profile from "./components/Profile/Profile";
import LoginPage from "../loginPage/LoginPage";

function Admin() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Kategori" element={<Kategori />} />
          <Route path="/DetailKategori/:index" element={<DetailKategori />} />
          <Route path="/AddKategori" element={<AddKategori />} />
          <Route path="/EditKategori/:index" element={<DetailKategori />} />
          <Route path="/Pengeluaran" element={<Pengeluaran />} />
          <Route path="/DataAnggota" element={<CreateUser />} />
          <Route
            path="/DetailPengeluaran/:index"
            element={<DetailPengeluaran />}
          />
          <Route path="/AddPengeluaran" element={<AddPengeluaran />} />
          <Route path="/AddCreateUser" element={<AddCreateUser />} />
          <Route path="/DetailUser/:index" element={<DetailUser />} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Admin;
