import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navi = useNavigate();
  const handleClick = () => {
    navi("/products");
  };
  return (
    <div>
      <h5 className="card-title">ShortCut to Product</h5>
      <button className="btn btn-primary" onClick={handleClick}>
        Go to Product{" "}
      </button>
    </div>
  );
};

export default About;
