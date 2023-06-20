import React from "react";
import "./CreateUser.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function CreateUser() {
  var [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getanggota", {
      })
      .then((response) => {
        setData(response.data);
      });
  },[]);


  return (
    <div>
      <h1 className="CreateUserJudul">data anggota chevalier lab</h1>
      <div className="ctaCreateUser">
        <a href="/AddCreateUser">
          <button className="btnCreateUser">tambah anggota</button>
        </a>
      </div>
      <div className="containerCreateUser">
        <table className="CreateUserTable">
          <tbody>
            <tr className="CreateUserTr">
              <th className="CreateUserTh">nama</th>
              <th className="CreateUserTh">nim</th>
              <th className="CreateUserTh">divisi</th>
            </tr>
          </tbody>
          {data.map((kategori, index) => {
            return (
              <tbody key={index}>
                <tr className="CreateUserTr">
                  <td className="CreateUserTd">
                    <a href={"/DetailUser/" + index} className="CreateUserLink">
                      {kategori.nama}
                    </a>
                  </td>
                  <td className="CreateUserTd">
                    <a href={"/DetailUser/" + index} className="CreateUserLink" >
                      {kategori.nim}
                    </a>
                  </td>
                  <td className="CreateUserTd">
                    <a href={"/DetailUser/" + index} className="CreateUserLink" >
                      {kategori.divisi}
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="DetailKategoriBottom"></div>
    </div>
  );
}

export default CreateUser;
