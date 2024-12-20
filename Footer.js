import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className="text-white">
              <h5>Export through Surya Exports & Imports</h5> <br />
              <h6>
                Global Selling Is An ecommerce Export program to sell
                Internationally from India || International Markets ||
              </h6>
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
              <br />
            </div>
            <div>
              <Link to="/About">About</Link>
              <br />
            </div>
            <div>
              <Link to="/Contact">Contact</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">
                <h6> #297\68 Byrathi Layout MG Road Bengaluru</h6>
              </p>
            </div>
            <div>
              <h6>
                {" "}
                <p className="text-white mb-1">+91 8374****37</p>
              </h6>
            </div>
            <div>
              <h6>
                {" "}
                <p className="text-white mb-1">+91 8919****06</p>
              </h6>
            </div>
            <div>
              <h6>
                {" "}
                <p className="text-white mb-1">
                  SuryaExports&Imports@gmail.com
                </p>
              </h6>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
