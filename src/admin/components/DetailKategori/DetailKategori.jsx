import React, { useEffect, useState } from "react";
import "./DetailKategori.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function DetailKategori() {
  const { index } = useParams();
  var [status, setStatus] = useState("");
  var [kategori, setKategori] = useState("");
  var [deskripsi, setDeskripsi] = useState("");

  const [dataKategori, setDataKategori] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/getkategori", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDataKategori(response.data);
      });
  }, []);

  useEffect(() => {
    if (dataKategori.length > 0) {
      setData(dataKategori[index]);
      setStatus(data.status);
      setKategori(data.kategori);
      setDeskripsi(data.deskripsi);
    }
  }, [dataKategori, index]);

  return (
    <div>
      <div className="detailContainerBack">
        <p className="detailContainerBackJudul">
          <a href="/">Homepage / </a>
          <span>
            <a href="/Kategori">Kategori / </a>
          </span>
          <span>
            <a href="">edit kategori</a>
          </span>
        </p>
      </div>

      <div className="containerTampilanNama">
        <div className="judulDetailKategori">
          <h2>kategori</h2>
          <input
            type="text"
            onChange={(e) => {
              setKategori(e.target.value);
            }}
            value={kategori}
          />
        </div>
        <div className="judulDetailKategori">
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
        <div className="judulDetailKategori">
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
        <div className="btnDetailKategori">
          <a href="/Kategori">
            <button className="DetailKategoriCtaCancel">cancel</button>
          </a>
          <button
            className="DetailKategoriCtaEdit"
            onClick={(e) => {
              editDataKategori(index, kategori, status, deskripsi);
            }}
          >
            edit
          </button>
        </div>
        <div className="DetailKategoriBottom"></div>
      </div>
    </div>
  );
}

function editDataKategori(index, kategori, status, deskripsi) {
  axios
    .post(
      "http://localhost:3000/editkategori",
      {
        index: index,
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
        text: "data berhasil di ubah",
        icon: "success",
        confirmButtonText: "kembali ke beranda",
      }).then(function(){
        window.location = '/Kategori'
      })
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

export default DetailKategori;
