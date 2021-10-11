import React from "react";
import "./carousel.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../img/children.jpg";
import img2 from "../img/girl.jpg";
import img3 from "../img/literature.jpg";
import { Link } from "react-router-dom";

const carousel = () => {
  return (
    <div className="carousel_class" id="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 imgs" src={img1} alt="First slide" />
          <Carousel.Caption>
            <li className="donate-class-btn">
              <a href="https://rzp.io/l/KV8rYUkE" className="Donate">
                Donate
              </a>
            </li>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 imgs" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 imgs" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default carousel;
