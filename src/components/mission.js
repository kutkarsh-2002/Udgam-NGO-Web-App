import React from "react";
import "./mission.css";
import img1 from "../img/literature.jpg";
import img2 from "../img/education.jpg";
import img3 from "../img/pexels-photo.jpeg";

const Cause = () => {
  return (
    <div className="cause_class" id="mission">
      <div class="container">
        <div className="heading-cause">
          <h2>OUR MISSION</h2>
        </div>
        <div class="card-group vgr-cards">
          <div class="card">
            <div class="card-img-body card-img1">
              <img class="card-img" src={img1} alt="Card image cap" />
            </div>
            <div class="card-body">
              <h4 class="card-title title-card">Why Education?</h4>
              <p class="card-text cause-para">
                Education is both the means as well as the end to a better life;
                means, because it empowers an individual to earn his/her
                livelihood and the end because it increases one's awareness on a
                range of issues – from healthcare to appropriate social behavior
                to understanding one's rights, and in the process evolve as a
                better citizen.
              </p>
              <a href="#" class="btn btn-outline-success">
                Primary
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-img-body card-img2">
              <img class="card-img" src={img2} alt="Card image cap" />
            </div>
            <div class="card-body">
              <h4 class="card-title title-card">"Initiative By Udgam"</h4>
              <p class="card-text cause-para">
                At Udgam, we look to improve learning outcomes in the public
                education system, by enabling ‘meaningful teacher-student
                interaction’. If a child is meaningfully and effectively engaged
                in the classroom by the teacher, she attends classes regularly,
                engages in learning, and in turn, achieves learning.
              </p>
              <a href="#" class="btn btn-outline-success">
                Primary
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-img-body card-img1">
              <img class="card-img" src={img3} alt="Card image cap" />
            </div>
            <div class="card-body">
              <h4 class="card-title title-card">
                Incentives and Accountability
              </h4>
              <p class="card-text cause-para">
                Creating a school system administration that protects the
                interest of students’ engagement and learning, vs. non-academic
                activities.
              </p>
              <a href="#" class="btn btn-outline-success">
                Primary
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cause;
