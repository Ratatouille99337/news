import React, { useState, useEffect } from "react";
import axios from "axios";
import "./news.css";
import Faq from "./Faq";
import logo from "./logo.png";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };
  const handleCheckboxClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "agritech startup india",
            apiKey: "3bad5f0e3bcc46baa86bb42c1a65365d",
            sortBy: "relevancy",
            language: "en",
            page: 1,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };
    fetchNews();
  }, []);

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("naveSign").style.display = "block";
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("naveSign").style.display = "none";
    document.getElementById("mySidenav").style.top = "110px";
  };

  function addCity() {
    const cityInput = document.getElementById("cityInput").value;
    if (!cityInput) {
      alert("Please type!");
      return;
    }
    if (cityInput.toLowerCase() === "milwaukee") {
      alert("Milwaukee cannot be added to the list");
      return;
    }
    const ul = document.querySelector(".checkbox-dropdown-list");
    const li = document.createElement("li");
    li.innerHTML = `<label>${cityInput}<input type="checkbox" value="${cityInput}" name="city" /></label>`;
    ul.appendChild(li);
    document.getElementById("cityInput").value = "";
  }

  return (
    <div className="news-dashboard">
      <nav className="navigation">
        <div className="logo">
          <img src={logo} style={{ borderRadius: "40%" }} alt="logo" />
          <a href="/">NEWS</a>
        </div>
      </nav>
      <div className="articles">
        {/* {articles.map((article, index) => (
          <NewsArticle key={index} article={article} />
        ))} */}
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="#">Filter Options</a>

          <h2 style={{ fontSize: "20px", marginLeft: "20px" }}>
            Select a category
          </h2>
          <form id="addCityForm">
            <div className="input-container">
              <input
                type="text"
                name="name"
                id="cityInput"
                placeholder="Add the Funding"
              />

              <div className="button" onClick={() => addCity()}>
                <p>Add</p>
              </div>
            </div>
          </form>

          <div
            className={`checkbox-dropdown ${isActive ? "is-active" : ""}`}
            onClick={handleDropdownClick}
          >
            Choose city
            <ul className="checkbox-dropdown-list">
              <li>
                <label> Agritech</label>
              </li>
              <li>
                <label>
                  Filter1{" "}
                  <input
                    type="checkbox"
                    value="Horsens"
                    name="city"
                    onClick={handleCheckboxClick}
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          <span
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: "yellow",
              position: "absolute",
            }}
            id="naveSign"
            onClick={openNav}
          >
            &#9776;
          </span>
          <div>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
