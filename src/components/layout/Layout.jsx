import React from "react";
import Me from "../../images/Ellipse 1.png";

const Layout = () => {
  return (
    <section>
      <div className="container">
        <div className="about">
          <div className="info">
            <h1>Hi, I am John, Creative Technologist</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button>Download Resume</button>
          </div>
          <div className="image">
            <img src={Me} alt="My_image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
