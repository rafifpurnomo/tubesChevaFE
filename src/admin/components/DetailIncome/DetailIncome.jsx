import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailIncome.css";

const DetailIncome=({ pengeluaran }) =>{
  return (
    <div>
      <p>{pengeluaran.date}</p>
      <p>{pengeluaran.desc}</p>
      <p>{pengeluaran.income}</p>
    </div>
  );
}

export default DetailIncome;
