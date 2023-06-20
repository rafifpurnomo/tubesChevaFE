import React from "react";
import { Icon } from "@iconify/react";
import "./AddPengeluaran.css";
import { useState } from "react";
import axios from "axios";

function DetailPengeluaran() {
  const [title, setTitle] = useState("");
  const [waktu, setWaktu] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nominal, setNominal] = useState("");

  return (
    <div>
      <div className="icon">
        <a href="/Pengeluaran" className="backIcon">
          <Icon icon="ion:arrow-back" />
        </a>
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
        <a href="">
          <button
            className="tambahkanPengeluaran"
            onClick={(e) => {
              addDataPengeluaran(title, waktu, nominal, deskripsi);
            }}
          >
            tambahkan
          </button>
        </a>
      </div>
      <div className="DetailKategoriBottom"></div>
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
      alert(response.data["message"]);
      window.location.assign("/Pengeluaran");
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        alert("Data belum terisi!");
      } else {
        alert("Error: " + error.message);
      }
    });
}

export default DetailPengeluaran;
