import React from "react";
import "./AddKategori.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddKategori() {
  const [status, setStatus] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  return (
    <div>
      <div className="AddKategoriContainerBack">
        <p className="AddKategoriContainerBackJudul">
          <a href="/">Homepage / </a>
          <span>
            <a href="/Kategori">Kategori / </a>
          </span>
          <span>
            <a href="">tambah kategori</a>
          </span>
        </p>
      </div>
      <div className="containerTampilanNama">
        <div className="judulAddKategori">
          <h2>kategori</h2>
          <input
            type="text"
            onChange={(e) => {
              setKategori(e.target.value);
            }}
          />
        </div>
        <div className="judulAddKategori">
          <h2>status</h2>
          <select
            name="statusKategoriUpdate"
            id="statusKategoriUpdate"
            className="statusKategoriUpdate"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            value={status}
          >
            <option value=""></option>
            <option value="sudah">sudah</option>
            <option value="belum">belum</option>
          </select>
        </div>
        <div className="judulAddKategori">
          <h2>deskripsi kategori</h2>
          <textarea
            name="deskripsiKategori"
            id="deskripsiKategori"
            cols="65"
            rows="5"
            onChange={(e) => {
              setDeskripsi(e.target.value);
            }}
            value={deskripsi}
          ></textarea>
        </div>
        <div className="DeleteKategoriCTA">
          <a href="/Kategori">
            <button className="deleteKategori">Batalkan</button>
          </a>
          <button
            className="addKategori"
            onClick={(e) => {
              addDataKategori(kategori, status, deskripsi);
            }}
          >
            Tambahkan
          </button>
        </div>
        <div className="AddKategoriBottom"></div>
      </div>
    </div>
  );
}

function addDataKategori(kategori, status, deskripsi) {
  axios
    .post(
      "http://localhost:3000/addkategori",
      {
        kategori: kategori,
        status: status,
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
        window.location = "/Kategori";
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

export default AddKategori;
