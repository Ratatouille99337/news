import React from "react";
import "./dashboard.css";
import logo from "./logo.png";

const SignIn = () => {
  return (
    <div>
      <header>
        <nav class="navigation">
          <div class="logo">
            <img src={logo} style={{ borderRadius: "40%" }} />
            <a href="#">NEWS</a>
          </div>

          <div class="humbarger">
            <div class="bar"></div>
            <div class="bar2 bar"></div>
            <div class="bar"></div>
          </div>
        </nav>
        <div className="dash">
          <div class="leftimg">
            <img
              src={logo}
              style={{
                borderRadius: "10px",
                width: "60%",
                opacity: "0.9",
                boxShadow: "0 0 40px 10px rgba(0, 0, 10, 100)",
                marginTop: "50px",
                border: "4px solid blue",
              }}
            />
          </div>
          <div class="intro-section" id="home">
            <div class="bg-img"></div>
            <div class="intro-content">
              <h1>Summarized NEWS </h1>
              <h6>about start ups</h6>
              <p class="tagline">
                <span class="change-container">
                  <span class="changing">stay up to date</span>
                  <span class="changing">in a short time</span>
                  <span class="changing">at a glance</span>
                </span>
              </p>
              <div class="header-btn animated bounceIn">
                <a href="/news">
                  <span style={{ color: "black" }}>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SignIn;
