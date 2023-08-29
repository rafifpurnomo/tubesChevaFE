import React from "react";
import "./Pengeluaran.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";

function Pengeluaran() {
  var [data, setData] = useState([]);
  var [showData, setShowData] = useState([]);
  var [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getpengeluaran", {
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
      <div className="addIconPengeluaranContainer">
        <p className="addIconPengeluaranJudul">
          <a href="/admin">Homepage/</a>
          <span>
            <a href="">pengeluaran</a>
          </span>
        </p>
        <a href="/AddPengeluaran" className="addPengeluaranLink">
          <button className="btnAddPengeluaran">
            <Icon icon="zondicons:add-outline" className="addPengeluaranIcon" />
            <p className="addIconPengeluaranTxt">tambah kategori</p>
          </button>
        </a>
      </div>
      <div className="containerTampilan">
        {showData.length > 0 ? (
          showData.map((kategori, index) => {
            return (
              <div className="tampilanDataPengeluaran" key={index}>
                <div className="detailPengeluaranNominalTitle">
                  <div className="nominalTitlePengeluaran">
                    <span>{kategori.title}</span>
                    <span className="nominalPengeluaran">
                      Rp. {kategori.nominal}
                    </span>
                  </div>
                  <div className="tanggalPengeluaran">
                    <span>{kategori.waktu}</span>
                  </div>
                </div>
                <div className="ctaEditDelPengeluaran">
                  <a href={"/DetailPengeluaran/" + index}>
                    <button className="ctaEditPengeluaran">
                      <Icon icon="bx:edit" />
                    </button>
                  </a>
                  <button
                    className="ctaDelPengeluaran"
                    onClick={(e) => {
                      hapusDataPengeluaran(index);
                    }}
                  >
                    <Icon icon="material-symbols:delete-outline" />
                  </button>
                </div>
              </div>
            );
          })
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
      Swal.fire({
        title: "Succes!",
        text: "data berhasil di hupus",
        icon: "success",
        confirmButtonText: "kembali ke beranda",
      }).then(function () {
        window.location = "/Pengeluaran";
      });
    })
    .catch((error) => {
      alert(error);
    });
}

export default Pengeluaran;
