import React from "react";
import "./Home.css";
import { Icon } from "@iconify/react";

function Home() {
  return (
    <div>
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
        <a href="" className="pilihanPembayaran">
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
      <footer>
        <div>
          <img src="/asset/cashyLogo.png" alt="" className="cashyFoto"/>
        </div>
        <div className="alamat">
          <h2>contact us</h2>
          <p>
            Jl. Telekomunikasi Terusan Buah Batu, Telkom university at School
            Applied of science Bandung - 40257, Indonesia Phone: +6299-xxxx-xxxx
            Email: Cashy@gmail.com
          </p>
        </div>
        <div className="sosialMedia">
          <h2>our sosial media</h2>
          <div className="brand">
            <a href="" className="link">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="" className="link">
              <Icon icon="ic:baseline-facebook" />
            </a>
            <a href="" className="link">
              <Icon icon="mdi:twitter" />
            </a>
            <a href="" className="link">
              <Icon icon="uil:linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
