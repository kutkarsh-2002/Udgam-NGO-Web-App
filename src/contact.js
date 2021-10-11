import React, { useState } from "react";
import "./contact.css";
import db from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contact form")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName(" ");
    setEmail(" ");
    setMessage(" ");
  };
  return (
    <div>
      <div class="wrapper">
        <div class="overlay">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-9">
              <div class="contact-us text-center">
                <h3>Contact Us</h3>
                <p class="mb-5">
                  Udgam look to improve learning outcomes in the public
                  education system, by enabling ‘meaningful teacher-student
                  interaction’.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mt-5 text-center px-3">
                      <div class="d-flex flex-row align-items-center">
                        {" "}
                        <span class="icons">
                          <i class="fa fa-map-marker"></i>
                        </span>
                        <div class="address text-left">
                          {" "}
                          <span>Address</span>
                          <p>Panki Road Redma, Daltonganj Jharkhand</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mt-3">
                        {" "}
                        <span class="icons">
                          <i class="fa fa-phone"></i>
                        </span>
                        <div class="address text-left">
                          {" "}
                          <span>Phone</span>
                          <p>9334486447</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mt-3">
                        {" "}
                        <span class="icons">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <div class="address text-left">
                          {" "}
                          <span>Email-Id</span>
                          <p>kutkarsh350@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="text-center px-1">
                      <div class="forms p-4 py-5 bg-white">
                        <h5 className="form-heading">Send Message</h5>
                        <div class="mt-4 inputs">
                          {" "}
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />{" "}
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />{" "}
                          <textarea
                            class="form-control"
                            placeholder="Type your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>{" "}
                        </div>
                        <div class="button mt-4 text-left">
                          {" "}
                          <button
                            class="btn btn-dark"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Send
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
