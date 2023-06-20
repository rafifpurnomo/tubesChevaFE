import React from "react";
import "./Pengeluaran.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Pengeluaran() {
  var [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getpengeluaran", {
      })
      .then((response) => {
        setData(response.data);
      });
  },[]);

  return (
    <div>
      <div className="addIcon">
        <a href="/AddPengeluaran">
          <Icon icon="icon-park-outline:add" />
        </a>
      </div>
      <div className="judulPengeluaran">
        <h1 className="pengeluaranJudul">data pengeluaran cheva-lab</h1>
      </div>
      <div className="containerTampilan">
        {data.map((kategori, index) => {
          return (
            <a
              href={"/DetailPengeluaran/" + index}
              className="tampilanDataPengeluaran"
              key={index}
            >
              <table className="kategoriTable">
                <tbody>
                  <tr className="kategoriTr">
                    <td className="kategoriTd">title</td>
                    <td className="kategoriTd">: {kategori.title} </td>
                  </tr>
                  <tr className="kategoriTr">
                    <td className="kategoriTd">waktu</td>
                    <td className="kategoriTd">: {kategori.waktu} </td>
                  </tr>
                  <tr className="kategoriTr">
                    <td className="kategoriTd">nominal</td>
                    <td className="kategoriTd">: {kategori.nominal} </td>
                  </tr>
                </tbody>
              </table>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Pengeluaran;
