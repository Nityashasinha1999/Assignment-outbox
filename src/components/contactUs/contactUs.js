import React from "react";

function ContactUs() {
  return (
    <>
      <div className="contactUs-wrapper">
        <div className="blk">
          <div className="container">
            <div className="contactUs-text-blk">
              <p className="title-blk">
                <span className="contactUs-text">
                  {" "}
                  Get in touch
                  <br />
                  to discuss your project
                </span>
              </p>
            </div>
            <div className="grid">
              <div className="row">
                <div className="col">
                  <div className="contact-field">
                    <div className="inputfield-list">
                      <form>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="Name"
                          className="input-box"
                        />
                      </form>
                      <form>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="Company"
                          className="input-box"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="contact-field">
                    <div className="inputfield-list">
                      <form>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="Mobile No"
                          className="input-box"
                        />
                      </form>
                      <form>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="Email Id"
                          className="input-box"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="get-started-wrap submit-wrap pb-50px">
              <button className="get-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
