import React from "react";
import "./featured-cause.css";
import img1 from "../img/sumit-nss-1.jpeg";
import img2 from "../img/kids.jpg";
import img3 from "../img/ngo-teaching.jpg";
import img4 from "../img/kids-poor.jpg";
import img5 from "../img/kid-study.jpg";
import img6 from "../img/NSS-1.jpg";

const cause = () => {
  return (
    <div className="featured-cause-class" id="cause">
      {/* <h4>Primary Problem</h4> */}
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: `url(${img6})`,
          }}
        >
          <h1 className="text-shadow">Teacher Shortage</h1>
        </div>
        <div className="back">
          <h2>Teacher Shortage</h2>
          <p className="featured-cause-para">
            The widespread perception in India that the country has an acute
            teacher shortage of about one million teachers in public elementary
            schools, a view repeated in India's National Education Policy 2020.
          </p>
        </div>
      </div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <h1 className="text-shadow">Lack of Institutes</h1>
        </div>
        <div className="back">
          <h2>Lack of Institutes</h2>
          <p className="featured-cause-para">
            Lack of education is a fundamental problem in India. School
            infrastructure is in a poor state and many school teachers are not
            properly qualified, with 31% of them not having a degree. 40% of
            schools are without electricity.
          </p>
        </div>
      </div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        >
          <h1 className="text-shadow">Govermental Ambiguity Schemes </h1>
        </div>
        <div className="back">
          <h2>Govermental Ambiguity Schemes</h2>
          <p className="featured-cause-para">
            A parliamentary standing committee has flagged issues of lack of
            transparency and “misappropriation” of funds in certain schemes.
          </p>
        </div>
      </div>

      <br />
      <br />

      {/* <h4>Secondary Problem</h4> */}
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage: `url(${img4})`,
          }}
        >
          <h1 className="text-shadow">Poverty-Stricken</h1>
        </div>
        <div className="back">
          <h2>Poverty-Stricken</h2>
          <p className="featured-cause-para">
            Poverty reduces a child's readiness for school because it leads to
            poor physical health and motor skills, diminishes a child's ability
            to concentrate and remember information, and reduces attentiveness,
            curiosity and motivation.
          </p>
        </div>
      </div>
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage: `url(${img5})`,
          }}
        >
          <h1 class="text-shadow">Unawareness</h1>
        </div>
        <div className="back">
          <h2>Unawareness</h2>
          <p className="featured-cause-para">
            According to current estimate, 29% of Indian children are privately
            educated. With more than 50% children enrolling in private schools
            in urban areas, even in rural areas, nearly 20% of the children in
            2004-5 were enrolled in private schools.
          </p>
        </div>
      </div>
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <h1 className="text-shadow">Insufficient schemes</h1>
        </div>
        <div class="back">
          <h2>Insufficient schemes</h2>
          <p className="featured-cause-para">
            The manifesto encompassed wide range of issues from economic growth
            and problems in the social sector.
          </p>
        </div>
      </div>
    </div>
  );
};
export default cause;
