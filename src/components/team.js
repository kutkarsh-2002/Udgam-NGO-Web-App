import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./team.css";
import img1 from "../img/Utkarsh.png";
import img2 from "../img/Divesh.png";
import img3 from "../img/sumit.png";

const team = () => {
  return (
    <div className="team_container" id="team">
      <div className="heading-team">
        <h2>Meet our Team</h2>
      </div>
      <div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={img1} />
            <div className="myCarousel">
              <h3>Kumar Utkarsh</h3>
              <h4>Founder</h4>
              <p>
                Education is the passport to the future, for tomorrow belongs to
                those who prepare for it today.
              </p>
            </div>
          </div>

          <div>
            <img src={img2} />
            <div className="myCarousel">
              <h3>Divesh Jha</h3>
              <h4>Founder</h4>
              <p>An investment in knowledge pays the best interest.</p>
            </div>
          </div>

          <div>
            <img src={img3} />
            <div className="myCarousel">
              <h3>Sumit Anand</h3>
              <h4>Founder</h4>
              <p>Strive for Progress, Not perfection.</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default team;
