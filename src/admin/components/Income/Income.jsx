import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailIncome from "../DetailIncome/DetailIncome";
import "./Income.css";

function Income() {
  var [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);

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
      <h1 className="judulIncome">income chevalier 2023</h1>
      <div className="containerIncome">
        {data.length > 0 ? (
          data.map((month, index) => (
            <div key={index}>
              <a
                href={"/DetailIncome/" + index}
                className="bulanIncomeLink"
              >
                <div className="bulanIncome">{month.month}</div>
              </a>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {selectedMonth && <DetailIncome data={selectedMonth} />}
    </>
  );
}

export default Income;
