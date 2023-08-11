import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DetailVerifikasi.css";

function DetailVerifikasi() {
  const { index } = useParams();
  var [nama, setNama] = useState("");
  var [nominal, setNominal] = useState("");
  var [note, setNote] = useState("");
  var [deskripsi, setDeskripsi] = useState("");
  var [image, setImage] = useState("");
  var [nim, setNim] = useState("");
  var [status, setStatus] = useState("");

  const [dataVerifikasi, setDataVerifikasi] = useState([]);
  const [data, setData] = useState({});
  const [terimaButtonText, setTerimaButtonText] = useState("terima");
  const [tolakButtonText, setTolakButtonText] = useState("tolak");

  useEffect(() => {
    if (status === "sudah di verifikasi") {
      setTerimaButtonText("sudah di verifikasi");
    } else {
      setTerimaButtonText("terima");
    }
  }, [status]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getverifikasi", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDataVerifikasi(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    if (dataVerifikasi.length > 0) {
      setData(dataVerifikasi[index]);
      setImage(data.image);
      setNama(data.nama);
      setNim(data.nim);
      setDeskripsi(data.deskripsi);
      setNominal(data.nominal);
      setStatus(data.status);
      setNote(data.note);
    }
  }, [dataVerifikasi, index]);

  return (
    <div>
      <Navbar />
      <div className="addIconVerifikasiContainer">
        <p className="addIconVerifikasiJudul">
          <a href="/admin">Homepage / </a>
          <span>
            <a href="/Verifikasi">Verifikasi / </a>
          </span>
          <span>
            <a href="">Detail Verifikasi</a>
          </span>
        </p>
      </div>
      <h1 className="verifTitle">bukti Pembayaran</h1>
      <div className="containerDetailVerifikasi">
        <div className="buktiPembayaran">
          <img
            src="/asset/contohGambar.png"
            alt="Bukti Pembayaran"
            className="FotoBuktiPembayaran"
          />
        </div>
        <div className="keteranganVerifikasi">
          <span className="spanDetailVerifikasi">nama :</span>
          <p className="pDetailVerifikasi">{nama}</p>
          <span className="spanDetailVerifikasi">NIM :</span>
          <p className="pDetailVerifikasi">{nim}</p>
          <span className="spanDetailVerifikasi">keterangan :</span>
          <p className="pDetailVerifikasi">{deskripsi}</p>
          <span className="spanNoteVerifikasi">note :</span>
          <textarea
            name="deskripsiVerifikasi"
            id="deskripsiVerifikasi"
            cols="65"
            rows="5"
            onChange={(e) => {
              setDeskripsi(e.target.value);
            }}
            value={note}
          ></textarea>
        </div>
      </div>
      <div className="ctaTerimaTolakVerif">
        <button
          className="btnTolakVerif"
          onClick={(e) => {
            editDataVerifikasi(index, note, "data di tolak");
            setTolakButtonText("data di tolak");
          }}
        >
          tolak
        </button>
        <button
          className="btnTerimaVerif"
          onClick={(e) => {
            editDataVerifikasi(index, note, "sudah di verifikasi");
            setTerimaButtonText("sudah di verifikasi");
          }}
        >
          Terima
        </button>
      </div>
      <div className="ctaBackVerif">
        <button className="btnBackVerif">kembali</button>
      </div>

      <Footer />
    </div>
  );

  function editDataVerifikasi(index, note, status) {
    axios
      .post(
        "http://localhost:3000/editverifikasi",
        {
          index: index,
          note: note,
          status: status,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (status === "sudah di verifikasi") {
          Swal.fire({
            title: "Berhasil!",
            text: "Data berhasil diterima",
            icon: "success",
            confirmButtonText: "Kembali ke beranda",
          }).then(function () {
            window.location = "/verifikasi";
          });
        } else if (status === "data di tolak") {
          Swal.fire({
            title: "Ditolak!",
            text: "Data telah ditolak",
            icon: "error",
            confirmButtonText: "Lanjutkan",
          }).then(function () {
            window.location = "/verifikasi";
          });
        }
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
}

export default DetailVerifikasi;
