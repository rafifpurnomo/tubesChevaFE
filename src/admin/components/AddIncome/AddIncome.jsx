import axios from "axios";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./AddIncome.css";

function AddIncome() {
  const [tanggal, setTanggal] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nominal, setNominal] = useState("");

  return (
    <div>
      <Navbar />
      <div className="judulAddIncomeContainer">
        <h1 className="judulAddIncome">add income</h1>
        <p className="addIconPengeluaranJudul">
          <a href="/admin">Homepage / </a>
          <span>
            <a href="/Income">income / </a>
          </span>
          <span>
            <a href="">Add income</a>
          </span>
        </p>
      </div>
      <div className="MainContainerAddIncome">
        <div className="date">
          <p className="DetailPengeluaranDate">date</p>
          <input
            type="date"
            name=""
            id=""
            className="inputTitleAddIncome"
            onChange={(e) => {
              setTanggal(e.target.value);
            }}
          />
        </div>
        <div className="deskripsi">
          <p className="DetailPengeluaranDeskripsi">deskripsi</p>
          <textarea
            name="deskripsiPengeluaran"
            id="deskripsiIncome"
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
            className="inputTitleAddIncome"
            onChange={(e) => {
              setNominal(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="ctaAddCancelIncome">
        <a href="">
          <button className="BtnAddIncome">batalkan</button>
        </a>
        <a href="">
          <button
            className="BtnCancelIncome"
            onClick={(e) => {
              addDataIncome(tanggal, deskripsi, nominal);
            }}
          >
            tambahkan
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

function addDataIncome(tanggal, deskripsi, nominal) {
  axios
    .post(
      "http://localhost:3000/addpendapatan",
      {
        tanggal: tanggal,
        deskripsi: deskripsi,
        nominal: nominal,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      alert(response.data["message"]);
      console.log(response.data);
      window.location.assign("/Income");
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        alert("Data belum terisi!");
        console.log(error)
      } else {
        alert("Error: " + error.message);
      }
    });
}

export default AddIncome;
