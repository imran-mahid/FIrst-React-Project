import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="background"
        height={500} />
        <div className="card-img-overlay d-flex flex-column
        justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">WELCOME</h5>
          <p className="card-text">
            This is the first project i have created in React 

          </p>
          <p className="card-text">
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
