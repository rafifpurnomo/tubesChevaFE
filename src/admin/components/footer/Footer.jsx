import React from "react";
import { Icon } from "@iconify/react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <img src="/asset/cashyLogo.png" alt="" className="cashyFoto" />
        </div>
        <div className="alamat">
          <h2>contact us</h2>
          <p>
            Jl. Telekomunikasi Terusan Buah Batu, Telkom university at School
            Applied of science Bandung - 40257, Indonesia Phone: +6299-xxxx-xxxx
            Email: Cashy@gmail.com
          </p>
        </div>
        <div className="sosialMedia">
          <h2>our sosial media</h2>
          <div className="brand">
            <a href="" className="link">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="" className="link">
              <Icon icon="ic:baseline-facebook" />
            </a>
            <a href="" className="link">
              <Icon icon="mdi:twitter" />
            </a>
            <a href="" className="link">
              <Icon icon="uil:linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
