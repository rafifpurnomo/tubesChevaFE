import Admin from './admin/Admin';
import './App.css';
import LoginPage from './loginPage/LoginPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from './page/beforeLogin/Page';

function App() {
  return (
    <>
      {/* <LoginPage/> */}
      <Admin/>
      {/* <Page/> */}
    </>
  );
}

export default App;
