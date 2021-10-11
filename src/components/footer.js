import { useState } from "react";
import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button } from "react-bootstrap";
import db from "../firebase";
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

const Footer = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      //Add to firebase
      db.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
      setMessage("Thank you for subscribing!!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  return (
    <div id="footer">
      <div class="">
        <section className="footer-section-up"></section>

        <footer class="footer-bs">
          <div class="row">
            <div class="col-md-3 footer-brand animated fadeInLeft">
              <h2 className="h3-heading">Udgam</h2>
              <span className="slogan">"The rise of hope"</span>
              <br />
              <br />

              <p>
                At Udgam, we look to improve learning outcomes in the public
                education system, by enabling ‘meaningful teacher-student
                interaction’. If a child is meaningfully and effectively engaged
                in the classroom by the teacher, she attends classes regularly,
                engages in learning, and in turn, achieves learning.
              </p>
              <p>© 2021 Udgam Team, All rights reserved</p>
            </div>
            <div class="col-md-4 footer-nav animated fadeInUp">
              <h3 className="h3-heading">Menu</h3>
              <div class="col-md-6">
                <ul class="pages">
                  <li>
                    <a className="footer-link footer-font-link" href="#mission">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a className="footer-link footer-font-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="footer-link footer-font-link" href="#success">
                      Success
                    </a>
                  </li>
                  <li>
                    <a className="footer-link footer-font-link" href="#cause">
                      Feature Cause
                    </a>
                  </li>
                  <li>
                    <a className="footer-link footer-font-link" href="#partner">
                      Our Partner
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list">
                  <li>
                    <a className="footer-link footer-font-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="footer-link footer-font-link"
                    >
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <a className="footer-link footer-font-link" href="#">
                      Terms & Condition
                    </a>
                  </li>
                  <li>
                    <a className="footer-link footer-font-link" href="#">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2 footer-social animated fadeInDown">
              <h3 className="h3-heading">Follow Us</h3>
              <ul>
                <li>
                  <a
                    className="footer-link footer-font-link"
                    href="https://www.facebook.com/profile.php?id=100013453055351"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link footer-font-link"
                    href="https://twitter.com/pandeyutkarsh_?s=08"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link footer-font-link"
                    href="https://www.instagram.com/utkarshpandey_7/"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 footer-ns animated fadeInRight">
              <h3 className="h3-heading">Newsletter</h3>
              <p className="footer-font-link newsletter-para">
                A rover wearing a fuzzy suit doesn’t alarm the real penguins
              </p>
              <p>
                <form onSubmit={submitHandler} class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="your@gmail.com"
                    onChange={inputHandler}
                    value={input}
                  />
                  <Button
                    variant="Success"
                    type="submit"
                    size="lg"
                    active
                    className="subscribe-footer"
                  >
                    Subscribe
                  </Button>{" "}
                </form>
                {message && <Alert className="thanking-popup">{message}</Alert>}
              </p>
            </div>
          </div>
        </footer>
        <section className="footer-section-down">
          <p>
            Designed by{" "}
            <a
              className="footer-link"
              href="https://kutkarsh-2002.github.io/portfolio/"
            >
              Kumar Utkarsh
            </a>
            <i class="bi bi-heart-fill footer-icon"></i>
          </p>
        </section>
      </div>
    </div>
  );
};
export default Footer;
