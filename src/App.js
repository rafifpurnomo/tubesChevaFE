import Admin from './admin/Admin';
import './App.css';
import LoginPage from './loginPage/LoginPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <LoginPage/> */}
      <Admin/>
    </>
  );
}

export default App;
