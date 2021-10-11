import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className=" navbar-decor">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          {" "}
          <Link to="/" class="navbar-brand">
            {" "}
            {/* <img src={logo} class="logo logo-nav" /> */}
            <h3 className="logo-decor">UDGAM</h3>
          </Link>{" "}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span class="navbar-toggler-icon"></span>{" "}
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              {" "}
              <a
                href="https://rzp.io/l/KV8rYUkE"
                class="nav-link active font-decor"
                aria-current="page"
              >
                Donate India
              </a>{" "}
              <a href="#mission" class="nav-link font-decor">
                Mission
              </a>{" "}
              <a href="/#team" class="nav-link font-decor">
                Team
              </a>{" "}
              <a href="/#cause" class="nav-link font-decor">
                Cause
              </a>{" "}
              <a href="/#success" class="nav-link font-decor">
                Success
              </a>{" "}
              <a href="/#partner" class="nav-link font-decor">
                Partner
              </a>{" "}
              {/* <a class="nav-link" href="#">
                {" "}
                <img src={logo} class="rounded-circle" width="30" />{" "}
              </a>{" "} */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
