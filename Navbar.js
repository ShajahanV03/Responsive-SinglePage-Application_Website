import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary border-bottom box-shadow mb-1 mt-10px text-muted">
      <div class="container-fluid">
        <h1 className="title">Surya Exports & Imports</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link-active p-5 text-white">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link-active p-5  text-white">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link-active p-5  text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
