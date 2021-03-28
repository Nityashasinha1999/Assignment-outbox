import React from "react";
import descry from "../../assets/images/descry.png";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="blk">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer-blk">
                  <span className="footer-logo-blk">
                    <img src={descry} alt="" className="img-fluid" />
                  </span>
                  <span className="address-blk">
                    <p className="add-text"> Address</p>
                    <p className="add-detail">
                      Copperants, 70 Bowman St. South Winsdor, Bangalore,
                      Karnataka - 560000.
                    </p>
                  </span>
                </div>
              </div>
              <div className="col">
                <div className="logo-blk">
                  <span className="logo-bg">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                  <span className="logo-bg">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                  <span className="logo-bg">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </span>
                  <p className="footer-text">All right reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
