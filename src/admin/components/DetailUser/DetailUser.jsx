import React from "react";
import "./DetailUser.css";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function DetailUser() {
  const { index } = useParams();
  var [nama, setNama] = useState("");
  var [nim, setNIM] = useState("");
  var [divisi, setDivisi] = useState("");
  var [password, setPassword] = useState("");

  const [dataAnggota, setDataAnggota] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/getanggota", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDataAnggota(response.data);
      });
  }, []);

  useEffect(() => {
    if (dataAnggota.length > 0) {
      setData(dataAnggota[index]);
      setNama(data.nama);
      setNIM(data.nim);
      setDivisi(data.divisi);
      setPassword(data.password);
    }
  }, [dataAnggota, index]);

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
              value={nama}
            />
          </div>
          <div className="InputUserNameCreateAkun">
            <p className="judulInputCreateAkun">nim</p>
            <input
              type="text"
              className="inputTypeInCreateUser"
              onChange={(e) => {
                setNIM(e.target.value);
              }}
              value={nim}
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
              value={divisi}
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
              value={password}
            />
          </div>
        </div>
      </div>
      <div className="createUserCTA">
        <a href="/DataAnggota">
          <button
            className="deleteCreateUser"
            onClick={(e) => {
              hapusDataAnggota(index);
            }}
          >
            hapus
          </button>
        </a>
        <button
          className="tambahkanCreateUser"
          onClick={(e) => {
            editDataAnggota(index, nama, nim, divisi, password);
          }}
        >
          edit
        </button>
      </div>
      <div className="DetailKategoriBottom"></div>
    </div>
  );
}

function editDataAnggota(index, nama, nim, divisi, password) {
  axios
    .post(
      "http://localhost:3000/edituser",
      {
        index: index,
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
      alert(response.data["message"]);
      window.location.assign("/DataAnggota");
    })
    .catch((error) => {
      alert(error);
    });
}

export default DetailUser;
