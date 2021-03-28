import React from "react";
import ServicesBlock from "./servicesBlock";

function Services() {
  return (
    <>
      <div className="services-wrapper">
        <div className="container service-first">
          <div className="services-title">
            <p className="service-text">Services</p>
          </div>
          <div className="grid">
            <div className="row">
              <div className="col">
                <div className="services-icon">
                  <div className="services-icon-list">
                    <ul>
                      <li>
                        <span className="services-icon-bg">
                          <i class="fa fa-mobile" aria-hidden="true"></i>
                        </span>

                        <div className="services-icon-detail">
                          <p className="services-icon-name">
                            {" "}
                            Mobile Solution{" "}
                          </p>
                          <p className="icon-detail">
                            iOS App/ Android App development/Cross Platform
                            Application / HTML5 Apllication/ APP Re-engineering/
                            Mobile App Conversion
                          </p>
                        </div>
                      </li>
                      <li>
                        <span className="services-icon-bg">
                          <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                        </span>

                        <div className="services-icon-detail">
                          <p className="services-icon-name">
                            {" "}
                            Digital Marketing{" "}
                          </p>
                          <p className="icon-detail">
                            SEO / SEM / SMO / SMM / Content Marketing /
                            Analytical Marketing / Email Marketing Video
                            Marketing
                          </p>
                        </div>
                      </li>
                      <li>
                        <span className="services-icon-bg">
                          <i class="fa fa-video-camera" aria-hidden="true"></i>
                        </span>

                        <div className="services-icon-detail">
                          <p className="services-icon-name"> Rich Media </p>
                          <p className="icon-detail">
                            2D/ 3D Animation / Motion Graphics / Corporate
                            Presentation / Explainer Video Product / App Demo
                            Video
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-icon">
                  <div className="services-icon-list">
                    <ul>
                      <li>
                        <span className="services-icon-bg">
                          <i class="fa fa-code" aria-hidden="true"></i>
                        </span>

                        <div className="services-icon-detail">
                          <p className="services-icon-name">
                            {" "}
                            Web Development{" "}
                          </p>
                          <p className="icon-detail">
                            Website Design &amp; Development / Static and
                            Dynamic Website / HTML 5, CSS 3, PHP, Magento,
                            Drupal, Wordpress
                          </p>
                        </div>
                      </li>
                      <li>
                        <span className="services-icon-bg">
                          <i class="fa fa-users" aria-hidden="true"></i>
                        </span>

                        <div className="services-icon-detail">
                          <p className="services-icon-name"> Branding </p>
                          <p className="icon-detail">
                            Logo Design / Business Stationery Collateral
                            (LetterHead, Envelope, CD Cover etc.)/ Presentation
                            Template / Tone of Voice / Business Card Design
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="image-blk">
          <div className="img-wrap">
            <p>Services</p>
          </div>
        </div> */}
        <div className="service-full-block">
          <ServicesBlock />
        </div>
      </div>
    </>
  );
}

export default Services;
