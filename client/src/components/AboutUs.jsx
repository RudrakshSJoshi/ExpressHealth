import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Developed using a robust tech stack including Flask, React.js, TensorFlow, and MongoDB, SmartClinic not only enhances diagnostic accuracy but also fosters public health awareness and supports medical professionals through intelligent data insights. The project envisions a more connected, efficient, and informed healthcare ecosystem accessible to all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
