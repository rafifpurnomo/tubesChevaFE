import React from "react";
import "./Kategori.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

function renderStatusClass(status) {
  if (status === 'sudah') {
    return 'status-sudah';
  } else if (status === 'belum') {
    return 'status-belum';
  } else if (status===null){
    return 'status-null'
  }
  return '';
}

function Kategori() {
  var [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getkategori", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="addIconKategoriContainer">
        <p className="addIconKategoriJudul">
          <a href="/">Homepage/</a>
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
        {data.length > 0 ? (
          data.map((kategori, index) => (
            <div key={index} className="tampilDataContainer">
              <div className="tampilanData">
                <p className="namaKategori">{kategori.kategori}</p>
                <div className={`statusKategori ${renderStatusClass(kategori.status)}`}>
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
          <p>Loading...</p>
        )}
      </div>
      <div className="DetailKategoriBottom"></div>
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
      }).then(function(){
        window.location = '/Kategori'
      })
    })
    .catch((error) => {
      alert(error);
    });
}

export default Kategori;
