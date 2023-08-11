import React from "react";
import "./Kategori.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import NotFound from "../NotFound/NotFound";

function renderStatusClass(status) {
  if (status === "sudah") {
    return "status-sudah";
  } else if (status === "belum") {
    return "status-belum";
  } else if (status === null) {
    return "status-null";
  }
  return "";
}

function Kategori() {
  var [data, setData] = useState([]);
  var [showData, setShowData] = useState([]);
  var [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getkategori", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        setShowData(response.data.slice(0, 5));
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
      <div className="addIconKategoriContainer">
        <p className="addIconKategoriJudul">
          <a href="/admin">Homepage / </a>
          <span>
            <a href="">Kategori</a>
          </span>
        </p>
        <a href="/AddKategori" className="addKategoriLink">
          <button className="btnAddKategori">
            <Icon icon="zondicons:add-outline" className="addKategoriIcon" />
            <p className="addIconKategoriTxt">tambah kategori</p>
          </button>
        </a>
      </div>
      <div className="containerTampilanKategori">
        {showData.length > 0 ? (
          showData.map((kategori, index) => (
            <div key={index} className="tampilDataContainer">
              <div className="tampilanData">
                <p className="namaKategori">{kategori.kategori}</p>
                <div
                  className={`statusKategori ${renderStatusClass(
                    kategori.status
                  )}`}
                >
                  {kategori.status}
                </div>
              </div>
              <div className="ctaEditDelKategori">
                <a href={"/DetailKategori/" + index}>
                  <button className="ctaEditKategori">
                    <Icon icon="bx:edit" />
                  </button>
                </a>
                <button
                  className="ctaDelKategori"
                  onClick={(e) => {
                    hapusDataKategori(index);
                  }}
                >
                  <Icon icon="material-symbols:delete-outline" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <NotFound/>
          </div>
        )}
      </div>
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
      Swal.fire({
        title: "Succes!",
        text: "data berhasil di hupus",
        icon: "success",
        confirmButtonText: "kembali ke beranda",
      }).then(function () {
        window.location = "/Kategori";
      });
    })
    .catch((error) => {
      alert(error);
    });
}

export default Kategori;
