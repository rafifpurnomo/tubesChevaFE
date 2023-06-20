import React from "react";
import { Icon } from "@iconify/react";
import "./AddCreateUser.css";
import { useState } from "react";
import axios from "axios";

function AddCreateUser() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [divisi, setDivisi] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="icon">
        <a href="/DataAnggota" className="backIcon">
          <Icon icon="ion:arrow-back" />
        </a>
      </div>
      <div className="containerAddUser">
        <div>
          <img
            src="/asset/buatAkun.png"
            alt="gambar create user"
            className="gambarCreateUser"
          />
        </div>
        <div className="inputanDiCreateAkun">
          <div className="InputUserNameCreateAkun">
            <p className="judulInputCreateAkun">nama</p>
            <input
              type="text"
              className="inputTypeInCreateUser"
              onChange={(e) => {
                setNama(e.target.value);
              }}
            />
          </div>
          <div className="InputUserNameCreateAkun">
            <p className="judulInputCreateAkun">nim</p>
            <input
              type="text"
              className="inputTypeInCreateUser"
              onChange={(e) => {
                setNim(e.target.value);
              }}
            />
          </div>
          <div className="InputUserNameCreateAkun">
            <p className="judulInputCreateAkun">divisi</p>
            <select
              name="inputDivisi"
              id="inputDivisi"
              className="inputTypeInCreateUser"
              onChange={(e) => {
                setDivisi(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="UI/UX">UI/UX</option>
              <option value="back-end web">back-end web</option>
              <option value="front-end web">front-end web</option>
              <option value="front-end mobile">front-end mobile</option>
              <option value="game developer">game developer</option>
            </select>
          </div>
          <div className="InputUserNameCreateAkun">
            <p className="judulInputCreateAkun">password</p>
            <input
              type="text"
              className="inputTypeInCreateUser"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="createUserCTA">
        <a href="/DataAnggota">
        <button className="deleteCreateUser">Batalkan</button>

        </a>
        <button
          className="tambahkanCreateUser"
          onClick={(e) => {
            addDataAnggota(nama, nim, divisi, password);
          }}
        >
          Tambahkan
        </button>
      </div>
      <div className="DetailKategoriBottom"></div>
    </div>
  );
}

function addDataAnggota(nama, nim, divisi, password) {
  axios
    .post(
      "http://localhost:3000/adduser",
      {
        nama: nama,
        nim: nim,
        divisi: divisi,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      alert(response.data["message"]);
      window.location.assign("/DataAnggota");
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        alert("Data belum terisi!");
      } else {
        alert("Error: " + error.message);
      }
    });
}

export default AddCreateUser;
