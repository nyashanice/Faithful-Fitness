import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const styles = {
  button: {
    backgroundImage: "url(/images/kettlebell.png)",
  },
};

export default function Home() {
  return (
    <div>
      <div className="banner-container">
        <div className="d-flex flex-row">
          <img src="/images/gym1.jpg" alt="" className="home-img" />
          <img src="/images/gym2.jpg" alt="" className="home-img" />
          <img src="/images/gym3.jpg" alt="" className="home-img" />
        </div>
        <div className="overlay">
          Embrace the Journey,
          <br /> Unleash Your Strength
        </div>
      </div>
      <div>
        <h2 className="text-center home-header">How to use</h2>
        <div className="d-flex flex-row p-2">
          <div className="d-flex flex-row align-items-center flex p-2">
            <div className="home-num">1</div>
            <div className="home-steps">
              You may choose from 5 different workouts: push (chest, shoulders,
              triceps), pull (back and biceps), hamstrings and glutes, quads and
              glutes, or glutes only.
            </div>
          </div>
          <div className="text-center">
            <video autoPlay loop muted playsInline className="home-video">
              <source src="/images/question1.mp4" />
            </video>
          </div>
        </div>
        <div className="d-flex flex-row p-2">
          <div className="text-center">
            <video autoPlay loop muted playsInline className="home-video">
              <source src="/images/question2.mp4" />
            </video>
          </div>
          <div className="d-flex flex-row align-items-center flex p-2">
            <div className="home-steps">
              Let us know if your workout will incorporate machines, be dumbbell
              only, or body weight.
            </div>
            <div className="home-num">2</div>
          </div>
        </div>
        <div className="d-flex flex-row p-2">
          <div className="d-flex flex-row align-items-center flex p-2">
            <div className="home-num">3</div>
            <div className="home-steps">
              Click the generate workout button to get a full workout plan!
            </div>
          </div>
          <div className="text-center">
            <video autoPlay loop muted playsInline className="home-video">
              <source src="/images/generated-workout.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="text-center home-btn" style={styles.button}>
        <Link to="/workout">
          <div className="home-btn-txt">
            GET <br />
            STARTED
          </div>
        </Link>
      </div>
    </div>
  );
}
