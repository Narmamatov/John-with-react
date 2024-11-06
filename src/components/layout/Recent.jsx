import React from "react";

const Recent = () => {
  return (
    <section>
      <div className="recent">
        <div className="container-recent">
          <div className="item">
            <h2 style={{ fontWeight: "300" }} >Recent Posts</h2>
            <p style={{ color: "#00A8CC" }} >View all</p>
          </div>
          <div className="box">
            <div className="left">
              <h1>Making a design system from scratch</h1>
              <h2>12 feb 2020 | Design, Pattern</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="right">
              <h1>Creating pixel perfect icons in Figma</h1>
              <h2>12 feb 2020 | Figma Icon, Design</h2>
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

export default Recent;
