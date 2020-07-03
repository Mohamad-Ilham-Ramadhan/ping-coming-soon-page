import React from "react";
import Form from "./Form";

import logo from "../images/logo.svg";
import illustrationDashboard from "../images/illustration-dashboard.png";

export default function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="navbar">
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="text-center">
            <h1 className="heading-1 text-neutral-gray">
              We are launching{" "}
              <span className="text-neutral-very-dark-blue font-weight-bold">
                soon!
              </span>
            </h1>
            <h2 className="heading-2">Subscribe and get notified</h2>
          </div>
        </div>
      </header>

      <main>
        <div className="container container-form">
          <Form />
        </div>
        <div className="container container-img">
          <img src={illustrationDashboard} className="mx-auto w-100" alt="" />
        </div>
      </main>
      <footer className="footer">
        <div className="container text-center">
          <div className="icons text-primary mb-4">
            <a href="#">
              <span className="icon icon-facebook"></span>
            </a>{" "}
            <a href="#">
              <span className="icon icon-twitter"></span>
            </a>{" "}
            <a href="#">
              <span className="icon icon-instagram"></span>
            </a>{" "}
          </div>
          <div className="copyright text-neutral-gray">
            &copy; Copyright Ping. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
