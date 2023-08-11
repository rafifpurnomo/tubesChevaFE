import React from "react";
import "./Home.css";
import { Icon } from "@iconify/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="containerSatu">
        <img src="/asset/home.png" alt="foto-home" className="foto-home" />
        <h1 className="">transparan, terbuka dan jujur</h1>
      </div>
      <div className="containerDua">
        <a href="/Kategori" className="pilihanPembayaran">
          <div className="containerPilihanPembayaran">
            <img
              src="/asset/kategori.png"
              alt="kategori"
              className="kategori-foto"
            />
            <h2>kategori</h2>
          </div>
        </a>
        <a href="/Pengeluaran" className="pilihanPembayaran">
          <div className="containerPilihanPembayaran">
            <img
              src="/asset/pengeluaran.png"
              alt="kategori"
              className="kategori-foto"
            />
            <h2>pengeluaran</h2>
          </div>
        </a>
        <a href="/DataAnggota" className="pilihanPembayaran">
          <div className="containerPilihanPembayaran">
            <img
              src="/asset/buat user.png"
              alt="kategori"
              className="kategori-foto"
            />
            <h2>buat user</h2>
          </div>
        </a>
        <a href="./Verifikasi" className="pilihanPembayaran">
          <div className="containerPilihanPembayaran">
            <img
              src="/asset/verifikasi.png"
              alt="kategori"
              className="kategori-foto"
            />
            <h2>verifikasi</h2>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
