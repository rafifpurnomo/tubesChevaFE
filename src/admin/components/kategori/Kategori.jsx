import React from "react";
import "./Kategori.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
                <div className="statusKategori">{kategori.status}</div>
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
      alert(response.data["message"]);
      window.location.assign("/Kategori");
    })
    .catch((error) => {
      alert(error);
    });
}

export default Kategori;
