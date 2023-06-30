import React from "react";
import Footer from "../../admin/components/footer/Footer";
import NavbarBeforeLogin from "../NavbarBeforeLogin/NavbarBeforeLogin";
import "./Page.css";

function Page() {
  return (
    <div>
      <NavbarBeforeLogin/>
      <div className="containerSatu">
        <img src="/asset/home.png" alt="foto-home" className="foto-home" />
        <h1 className="">transparan, terbuka dan jujur</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
