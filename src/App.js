import Admin from "./admin/Admin";
import "./App.css";
import LoginPage from "./loginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./page/Page";
import Home from "./admin/components/Home/Home";
import Kategori from "./admin/components/kategori/Kategori";
import DetailKategori from "./admin/components/DetailKategori/DetailKategori";
import AddKategori from "./admin/components/AddKategori/AddKategori";
import Pengeluaran from "./admin/components/Pengeluaran/Pengeluaran";
import CreateUser from "./admin/components/CreateUser/CreateUser";
import DetailPengeluaran from "./admin/components/DetailPengeluaran/DetailPengeluaran";
import AddCreateUser from "./admin/components/AddCreateUser/AddCreateUser";
import DetailUser from "./admin/components/DetailUser/DetailUser";
import Income from "./admin/components/Income/Income";
import Profile from "./admin/components/Profile/Profile";
import AddPengeluaran from "./admin/components/AddPengeluaran/AddPengeluaran";
import Navbar from "./admin/components/Navbar/Navbar";
import Footer from "./admin/components/footer/Footer";
import DetailIncome from "./admin/components/DetailIncome/DetailIncome";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path="/admin" element={<Home />} />
          <Route path="/Kategori" element={<Kategori />} />
          <Route path="/DetailKategori/:index" element={<DetailKategori />} />
          <Route path="/AddKategori" element={<AddKategori />} />
          {/* <Route path="/EditKategori/:index" element={<DetailKategori />} /> */}
          <Route path="/Pengeluaran" element={<Pengeluaran />} />
          <Route path="/DataAnggota" element={<CreateUser />} />
          <Route
            path="/DetailPengeluaran/:index"
            element={<DetailPengeluaran />}
          />
          <Route path="/AddPengeluaran" element={<AddPengeluaran />} />
          <Route path="/AddCreateUser" element={<AddCreateUser />} />
          <Route path="/DetailUser/:index" element={<DetailUser />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Income" element={<Income />} />
          <Route path="/loginPage" element={<LoginPage/>} />
          <Route path="/DetailIncome/:index" element={<DetailIncome/>} />
        </Routes>
      </div>
    </Router>
    // {/* <LoginPage/> */}
    // <Admin />
    // {/* <Page/> */}
  );
}

export default App;
