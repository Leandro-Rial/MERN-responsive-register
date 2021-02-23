import React from "react";
import About from "./About";
import Contact from "./Contact";
import bitcoin from "../videos/bitcoin-bg.mp4";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homeBg">
        <div className="videoBg">
            <video src={bitcoin} autoPlay loop muted />
        </div>
        <div className="home-content">
            <h1>Bitcoin</h1>
            <p>Get the money of the future</p>
        </div>
      </div>
      <About />
      <Contact />
      <footer>
        &copy; 2021
      </footer>
    </>
  );
};

export default Home;
