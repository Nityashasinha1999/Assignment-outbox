import React from "react";
import Navbar from "../navbar/navbar";

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-blk">
          <div className="header">
            <Navbar />
          </div>
          <div className="text-header-wrap">
            <div className="text-blk">
              <p className="header-first-text">
                We bring your digital<br></br> presence to life.
              </p>
              <p className="header-second-text">
                Our comprehensive domain knowledge ensures you business success.
              </p>
              <br />
              <div className="get-started-wrap">
                <button className="get-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
