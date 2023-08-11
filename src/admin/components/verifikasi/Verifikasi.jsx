import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Verifikasi.css";
import { Icon } from "@iconify/react";

function renderStatusClass(status) {
  if (status === "sudah terverifikasi") {
    return "status-sudah";
  } else if (status === "belum terverifikasi") {
    return "status-belum";
  } else if (status === "data di tolak") {
    return "status-ditolak";
  } else if (status === null) {
    return "status-null";
  }
  return "";
}

function Verifikasi() {
  var [data, setData] = useState([]);
  var [showData, setShowData] = useState([]);
  var [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getverifikasi", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        setShowData(response.data.slice(0, 5));
        console.log(response)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setShowData(data.slice(page * 5, page * 5 + 5));
  }, [data, page]);

  return (
    <div>
      <Navbar />
      <div className="addIconVerifikasiContainer">
        <p className="addIconVerifikasiJudul">
          <a href="/admin">Homepage / </a>
          <span>
            <a href="">Verifikasi</a>
          </span>
        </p>
      </div>
      {showData.length > 0 ? (
        showData.map((kategori, index) => (
          <div key={index} className="containerVerifikasi">
            <div className="tampilanDataVerifikasi">
              <img
                src={kategori.image}
                alt="bukti transaksi"
                className="gambarVerifikasi"
              />

              <div className="nameDescDate">
                <p className="namaDataVerifikasi">{kategori.nama}</p>
                <p className="tanggalVerifikasi">{kategori.tanggal}</p>
                <p className="descVerifikasi">{kategori.deskripsi}</p>
                <p className="nominalVerifikasi">rp. {kategori.nominal}</p>
              </div>
              <div
                className={`statusVerifikasi ${renderStatusClass(
                  kategori.status
                )}`}
              >
                {kategori.status}
              </div>
            </div>
            <div className="ctaEditDelKategori">
              <a href={"DetailVerifikasi/" + index}>
                <button className="ctaEditKategori">
                  <Icon icon="bx:edit" />
                </button>
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <div className="paginationInfo">
        <p>Page: {page + 1}</p>
      </div>
      <div className="nextPrevKategori">
        <div>
          <button
            className="prevKatgeori"
            onClick={() =>
              setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0))
            }
          >
            prev
          </button>
        </div>
        <div>
          <button
            className="prevKatgeori"
            onClick={() =>
              setPage((prevPage) =>
                prevPage < Math.ceil(data.length / 5) - 1
                  ? prevPage + 1
                  : prevPage
              )
            }
          >
            next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Verifikasi;
