import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div className="banner-container">
        <div className="d-flex flex-row">
          <img src="/images/gym1.jpg" alt="" className="home-img" />
          <img src="/images/gym2.jpg" alt="" className="home-img" />
          <img src="/images/gym3.jpg" alt="" className="home-img" />
        </div>
        <div className="overlay">Embrace the Journey, Unleash Your Strength</div>
      </div>
    </div>
  );
}
