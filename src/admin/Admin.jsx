import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Kategori from "./components/kategori/Kategori";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import DetailKategori from "./components/DetailKategori/DetailKategori";
import AddKategori from "./components/AddKategori/AddKategori";
import Pengeluaran from "./components/Pengeluaran/Pengeluaran";
import CreateUser from "./components/CreateUser/CreateUser";
import Loader from "./components/loader/Loader";
import DetailPengeluaran from "./components/DetailPengeluaran/DetailPengeluaran";
import AddPengeluaran from "./components/AddPengeluaran/AddPengeluaran";
import AddCreateUser from "./components/AddCreateUser/AddCreateUser";
import DetailUser from "./components/DetailUser/DetailUser";

function Admin() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Kategori",
      element: <Kategori />,
    },
    {
      path: "/DetailKategori/:index",
      element: <DetailKategori/>,
    },
    {
      path: "/AddKategori",
      element: <AddKategori/> ,
    },
    {
      path: "/EditKategori/:index",
      element: <DetailKategori /> ,
    },
    {
      path: "/Pengeluaran",
      element: <Pengeluaran/> ,
    },
    {
      path: "/DataAnggota",
      element: <CreateUser/> ,
    },
    {
      path: "/DetailPengeluaran/:index",
      element: <DetailPengeluaran/> ,
    },
    {
      path: "/AddPengeluaran",
      element: <AddPengeluaran/> ,
    },
    {
      path: "/AddCreateUser",
      element: <AddCreateUser/> ,
    },
    {
      path: "/DetailUser/:index",
      element: <DetailUser/> ,
    },
  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default Admin;
