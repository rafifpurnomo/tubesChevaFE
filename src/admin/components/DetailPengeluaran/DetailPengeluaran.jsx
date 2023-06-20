import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./DetailPengeluaran.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailPengeluaran() {
  const { index } = useParams();
  var [title, setTitle] = useState("");
  var [nominal, setNominal] = useState("");
  var [deskripsi, setDeskripsi] = useState("");
  var [waktu, setDate] = useState("");

  const [dataPengeluaran, setDataKategori] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/getpengeluaran", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDataKategori(response.data);
      });
  }, []);

  useEffect(() => {
    if (dataPengeluaran.length > 0) {
      setData(dataPengeluaran[index]);
      setTitle(data.title);
      setNominal(data.nominal);
      setDeskripsi(data.deskripsi);
      setDate(data.waktu);
    }
  }, [dataPengeluaran, index]);

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
            value={title}
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
            value={deskripsi}
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
            value={nominal}
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
              setDate(e.target.value);
            }}
            value={waktu}
          />
        </div>
      </div>
      <div className="DetailPengeluaranBtn">
        <button
          className="hapusPengeluaran"
          onClick={(e) => {
            hapusDataPengeluaran(index);
          }}
        >
          hapus
        </button>
        <button
          className="tambahkanPengeluaran"
          onClick={(e) => {
            editDataPengeluaran(index, title, waktu, nominal, deskripsi);
          }}
        >
          ubah
        </button>
      </div>
      <div className="DetailKategoriBottom"></div>
    </div>
  );
}

function editDataPengeluaran(index, title, waktu, nominal, deskripsi) {
  axios
    .post(
      "http://localhost:3000/editpengeluaran",
      {
        index: index,
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

function hapusDataPengeluaran(index) {
  axios
    .post(
      "http://localhost:3000/hapuspengeluaran",
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
      window.location.assign("/Pengeluaran");
    })
    .catch((error) => {
      alert(error);
    });
}

export default DetailPengeluaran;
