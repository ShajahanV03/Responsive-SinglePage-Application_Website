import React from "react";
import Slider from "../inc/slider.js";
import { Link } from "react-router-dom";
import VMC from "./inc/vmc";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";

function Home() {
  return (
    <>
      <Slider />
      <div className="content">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="main-heading">Import and export with ease</h3>
                <div className="underline mx-auto"> </div>
                <p>
                  We know moving your goods to and from the EU can often be a
                  challenge. It’s the added cost, the extra paperwork, and the
                  uncertainty about where your goods are in the customs process
                  at any given time. We get it. That’s why we built
                  CustomsClear.
                </p>
                <Link to="/about" className="btn btn-warning shadow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Vision Mission CoreValues  */}

      <VMC />

      {/* Our Services */}

      <div className="services">
        <section className="section  border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Our Services</h3>
                <div className="underline mx-auto"> </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={pic3}
                    className="w-100 border-bottom"
                    alt="services"
                  />
                  <div className="card-body">
                    <h6>Service1</h6>
                    <div className="underline"></div>
                    <p>
                      We Provide Import-export companies provide goods and
                      services from one location to another. These companies
                      play a vital role in the global economy. Knowing how to
                      come up with a catchy, original, and memorable name for
                      your product or business is crucial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={pic4}
                    className="w-100 border-bottom"
                    alt="services"
                  />
                  <div className="card-body">
                    <h6>Service2</h6>
                    <div className="underline"></div>
                    <p>
                      For domestic individuals or enterprises to invest in
                      import and export companies, the import and export
                      business scope can be summed up in one sentence, that is,
                      “engaged in goods and technology import and export
                      business”.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <img
                    src={pic5}
                    className="w-100 border-bottom"
                    alt="services"
                  />
                  <div className="card-body">
                    <h6>Service3</h6>
                    <div className="underline"></div>
                    <p>
                      foreign companies import and export companies can spread
                      across multiple industries, not only can do trade, but
                      also related to the contents of services. generally in its
                      business scope, the description of the import and export
                      business, or require the list of products to be carried
                      out in a detailed fill. Such as engaged in gifts,
                      electronic products, import and export business,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
