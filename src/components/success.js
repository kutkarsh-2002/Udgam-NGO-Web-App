import React from "react";
// import { ReactDOM } from "react";
import $ from "jquery";
import "./success.css";

const success = () => {
  $(document).ready(function () {
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });
  return (
    <div className="success_class" id="success">
      <div className="heading-success">
        <h2>OUR SUCCESS</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="counter">
              <span class="counter-value">1820</span>
              <div class="counter-content">
                <h3>Teachers</h3>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="counter orange">
              <span class="counter-value">4</span>
              <div class="counter-content">
                <h3>Programs</h3>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="counter green">
              <span class="counter-value">100</span>
              <div class="counter-content">
                <h3>Collaborators</h3>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="counter blue">
              <span class="counter-value">50000</span>
              <div class="counter-content">
                <h3>Students</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default success;
