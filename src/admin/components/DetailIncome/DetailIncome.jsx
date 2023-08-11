import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailIncome.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const DetailIncome = (props) => {
  var [jumlah, setJumlah] = useState(0);
  const { month } = useParams();

  useEffect(() => {
    let totalIncome = 0;
    props.data["entries"].forEach((item) => {
      totalIncome += parseInt(item.income);
    });
    setJumlah(totalIncome);
  }, [props.data]);

  return (
    <div>
      <Navbar />
      <a href="/Income" >
        <p className="CtaBbackIncome">kembali</p>
      </a>
      <p className="monthName">{props.data["month"]}</p>
      {props.data["entries"].length > 0 ? (
        <div className="incomeContainer">
          <table className="tableIncome">
            <thead className="theadIncome">
              <tr>
                <th className="thIncome">Tanggal</th>
                <th className="thIncome">Deskripsi</th>
                <th className="thIncome">Pemasukan</th>
              </tr>
            </thead>
            <tbody className="tbodyIncome">
              {props.data["entries"].map((item, index) => (
                <tr key={index} className="trIncome">
                  <td className="tdIncome">{item.date}</td>
                  <td className="tdIncome">{item.desc}</td>
                  <td className="tdIncome">{item.income}</td>
                </tr>
              ))}
              <tr className="trTotalIncome">
                <td className="tdIncome"></td>
                <td className="tdIncome">jumlah</td>
                <td className="tdIncome">{jumlah}</td>
              </tr>
            </tbody>
          </table>
          <div className="ctaAddIncome">
            <a href="/AddIncome">
              <button className="btnAddIncome">tambahkan pengeluaran</button>
            </a>
          </div>
        </div>
      ) : (
        <p>data tidak ada...</p>
      )}
      <Footer />
    </div>
  );
};

export default DetailIncome;
