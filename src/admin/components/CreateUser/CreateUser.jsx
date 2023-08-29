import React from "react";
import "./CreateUser.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";

function CreateUser() {
  var [data, setData] = useState([]);
  var [showData, setShowData] = useState([]);
  var [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getanggota", {
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
      <div className="addIconUserContainer">
        <p className="addIconUserJudul">
          <a href="/admin">Homepage / </a>
          <span>
            <a href="/DataAnggota">user</a>
          </span>
        </p>
        <a href="/AddCreateUser" className="addUserLink">
          <button className="btnAddUser">
            <Icon icon="zondicons:add-outline" className="addUserIcon" />
            <p className="addIconUserTxt">tambah anggota</p>
          </button>
        </a>
      </div>
      <div className="containerTampilan">
        {showData.length > 0 ? (
          showData.map((kategori, index) => {
            return (
              <div className="tampilanDataPengeluaran" key={index}>
                <div className="detailPengeluaranNominalTitle">
                  <div className="namaNimUser">
                    <span>{kategori.nama}</span>
                    <span className="nimUser">{kategori.nim}</span>
                  </div>
                  <div className="divisiUser">
                    <span>{kategori.divisi}</span>
                  </div>
                </div>
                <div className="ctaEditDelPengeluaran">
                  <a href={"/DetailUser/" + index}>
                    <button className="ctaEditPengeluaran">
                      <Icon icon="bx:edit" />
                    </button>
                  </a>
                  <button
                    className="ctaDelPengeluaran"
                    onClick={(e) => {
                      hapusDataAnggota(index);
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
            <NotFound />
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

function hapusDataAnggota(index) {
  axios
    .post(
      "http://localhost:3000/hapususer",
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
        window.location = "/DataAnggota";
      });
    })
    .catch((error) => {
      alert(error);
    });
}

export default CreateUser;
