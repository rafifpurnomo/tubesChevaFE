import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <div className="notFoundContainer">
        <div>
          <img
            src="/asset/notFound.png"
            alt="not found image"
            className="notFoundImg"
          />
        </div>
      <p className="notFoundTitle">data not found</p>
      </div>
    </div>
  );
}

export default NotFound;
