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
import Footer from "./components/footer/Footer";
import Income from "./components/Income/Income";

function Admin() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default Admin;
