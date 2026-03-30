import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/">
          MyApp
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center text-lg-start  ">

            <li className="nav-item mx-2">
              <a className="nav-link nav-hover " href="/">Home</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link nav-hover" href="/about">About</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link nav-hover" href="/Contact">Contact</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link nav-hover" href="/faq">FAQ</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link nav-hover" href="/Login">Auth</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}