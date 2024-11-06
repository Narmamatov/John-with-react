import React from "react";
import dashboard from "../../images/Rectangle 30.png";
import Illustraton from "../../images/Rectangle 32.png"
import Typography from "../../images/Rectangle 34.png"

const Works = () => {
  return (
    <section>
      <div className="container-works">
        <h2>Featured works</h2>
        <div className="works">
          <div className="work-box">
            <div className="image">
              <img src={dashboard} alt="" />
            </div>
            <div className="info">
              <h1>Designing Dashboards</h1>
              <div className="year">
                <h1>2020</h1>
                <h2>Dashboard</h2>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work-box">
            <div className="image">
              <img src={Illustraton} alt="" />
            </div>
            <div className="info">
              <h1>Vibrant Portraits of 2020</h1>
              <div className="year">
                <h1>2018</h1>
                <h2>Illustration</h2>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work-box">
            <div className="image">
              <img src={Typography} alt="" />
            </div>
            <div className="info">
              <h1>36 Days of Malayalam type</h1>
              <div className="year">
                <h1>2018</h1>
                <h2>Typography</h2>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
