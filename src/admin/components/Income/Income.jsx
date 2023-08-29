import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailIncome from "../DetailIncome/DetailIncome";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Income.css";
import NotFound from "../NotFound/NotFound";

function Income() {
  var [data, setData] = useState([]);
  var [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getpendapatan", {
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
    <>
      <div>
        {selectedMonth != null ? <DetailIncome data={data[selectedMonth]}/> : <ListBulan data={data} setSelectedMonth={setSelectedMonth}/>}
      </div>
    </>
  );
}

const ListBulan=(props)=>{
  return(
    <div>
      <Navbar/>
    <h1 className="judulIncome">income chevalier 2023</h1>
    <div className="containerIncome">
        {props.data.length > 0 ? (
          props.data.map((month, index) => (
            <div key={index}>
              <a
                className="bulanIncomeLink"
                onClick={()=>{
                  props.setSelectedMonth(index)
                }}
              >
                <div className="bulanIncome">{month.month}</div>
              </a>
            </div>
          ))
        ) : (
          <div>
            <NotFound/>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default Income;
