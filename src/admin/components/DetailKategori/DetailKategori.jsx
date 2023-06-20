import React, { useEffect, useState } from "react";
import "./DetailKategori.css";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailKategori() {
  const { index } = useParams();
  var [nama, setNama] = useState("");
  var [kategori, setKategori] = useState("");

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
      setNama(data.nama);
      setKategori(data.kategori);
    }
  }, [dataKategori, index]);

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
            value={nama}
          />
        </div>
        <div className="nama">
          <h2>kategori</h2>
          <input
            type="text"
            onChange={(e) => {
              setKategori(e.target.value);
            }}
            value={kategori}
          />
        </div>
        <div className="btnDetailKategori">
          <button
            className="DetailKategoriCtaHapus"
            onClick={(e) => {
              hapusDataKategori(index);
            }}
          >
            hapus
          </button>
          <button
            className="DetailKategoriCtaEdit"
            onClick={(e) => {
              editDataKategori(index, nama, kategori);
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

function editDataKategori(index, nama, kategori) {
  axios
    .post(
      "http://localhost:3000/editkategori",
      {
        index: index,
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
      alert(response.data["message"])
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

function hapusDataKategori(index) {
  axios
  .post(
    "http://localhost:3000/hapuskategori",
    {
      index: index,
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
    alert(error);
  });
}

export default DetailKategori;
