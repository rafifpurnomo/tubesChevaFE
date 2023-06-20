import React from "react";
import "./AddKategori.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";

function AddKategori() {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");

  return (
    <div>
      <div className="icon">
        <a href="/Kategori" className="backIcon">
          <Icon icon="ion:arrow-back" />
        </a>
      </div>
      <div className="containerTampilanNama">
        <div className="nama">
          <h2>nama</h2>
          <input
            type="text"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>
        <div className="nama">
          <h2>kategori</h2>
          <input
            type="text"
            onChange={(e) => {
              setKategori(e.target.value);
            }}
          />
        </div>
        <div className="DeleteKategoriCTA">
          <a href="/Kategori">
          <button className="deleteKategori">Batalkan</button>

          </a>
          <button
            className="addKategori"
            onClick={(e) => {
              addDataKategori(nama, kategori);
            }}
          >
            Tambahkan
          </button>
        </div>
        <div className="DetailKategoriBottom"></div>
      </div>
    </div>
  );
}

function addDataKategori(nama, kategori) {
  axios
    .post(
      "http://localhost:3000/addkategori",
      {
        nama: nama,
        kategori: kategori,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      alert(response.data["message"]);
      window.location.assign("/Kategori");
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        alert("Data belum terisi!");
      } else {
        alert("Error: " + error.message);
      }
    });
}

export default AddKategori;
