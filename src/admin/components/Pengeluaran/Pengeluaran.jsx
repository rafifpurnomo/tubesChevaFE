import React from "react";
import "./Pengeluaran.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Pengeluaran() {
  var [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getpengeluaran", {}).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="addIconPengeluaranContainer">
        <p className="addIconPengeluaranJudul">
          <a href="/">Homepage/</a>
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
        {data.map((kategori, index) => {
          return (
            <div
              href={"/DetailPengeluaran/" + index}
              className="tampilanDataPengeluaran"
              key={index}
            >
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
        })}
      </div>
      <div className="DetailKategoriBottom"></div>
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
      }).then(function(){
        window.location = '/Pengeluaran'
      })
    })
    .catch((error) => {
      alert(error);
    });
}

export default Pengeluaran;
