import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Income.css";

function Income() {
  return (
    <>
      <h1 className="judulIncome">income chevalier 2023</h1>
      <div className="containerIncome">
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">januari</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">februari</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">maret</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">april</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">mei</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">juni</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">juli</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">agustus</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">september</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">oktober</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">november</div>
          </a>
        </div>
        <div>
          <a href="" className="bulanIncomeLink">
            <div className="bulanIncome">desember</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Income;
