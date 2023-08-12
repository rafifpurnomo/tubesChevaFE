import React from "react";
import "./AddPengeluaran.css";
import { useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";

function DetailPengeluaran() {
  const [title, setTitle] = useState("");
  const [waktu, setWaktu] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nominal, setNominal] = useState("");

  return (
    <div>
      <Navbar />
      <div className="addIconPengeluaranContainer">
        <p className="addIconPengeluaranJudul">
          <a href="/admin">Homepage / </a>
          <span>
            <a href="/Pengeluaran">pengeluaran / </a>
          </span>
          <span>
            <a href="">Add pengeluaran</a>
          </span>
        </p>
      </div>
      <div className="DetailPengeluaranContainer">
        <div className="title">
          <p className="DetailPengeluaranTitle">title</p>
          <input
            type="text"
            className="inputTitle"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="deskripsi">
          <p className="DetailPengeluaranDeskripsi">deskripsi</p>
          <textarea
            name="deskripsiPengeluaran"
            id="deskripsiPengeluaran"
            cols="65"
            rows="5"
            onChange={(e) => {
              setDeskripsi(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="nominal">
          <p className="DetailPengeluaranNominal">nominal</p>
          <input
            type="text"
            className="inputTitle"
            onChange={(e) => {
              setNominal(e.target.value);
            }}
          />
        </div>
        <div className="date">
          <p className="DetailPengeluaranDate">date</p>
          <input
            type="date"
            name=""
            id=""
            className="inputTitle"
            onChange={(e) => {
              setWaktu(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="DetailPengeluaranBtn">
        <a href="/Pengeluaran">
          <button className="hapusPengeluaran">Batalkan</button>
        </a>

        <button
          className="tambahkanPengeluaran"
          onClick={(e) => {
            addDataPengeluaran(title, waktu, nominal, deskripsi);
          }}
        >
          tambahkan
        </button>
      </div>
      <Footer />
    </div>
  );
}

function addDataPengeluaran(title, waktu, nominal, deskripsi) {
  axios
    .post(
      "http://localhost:3000/addpengeluaran",
      {
        title: title,
        waktu: waktu,
        nominal: nominal,
        deskripsi: deskripsi,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      Swal.fire({
        title: "Succes!",
        text: "data berhasil di tambahkan",
        icon: "success",
        confirmButtonText: "kembali ke beranda",
      }).then(function () {
        window.location = "/Pengeluaran";
      });
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "Error!",
          text: "data belum terisi",
          icon: "error",
          confirmButtonText: "lanjutkan",
        });
      } else {
        alert("Error: " + error.message);
      }
    });
}

export default DetailPengeluaran;
