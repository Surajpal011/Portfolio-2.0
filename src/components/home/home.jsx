import React, { useEffect } from "react";
import "./home.css";
import "boxicons";
import ScrollReveal from "scrollreveal";
import main from "../../image/2.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });
    sr.reveal(`.home__data`);
    sr.reveal(`.home__handle`, {
      delay: 100,
    });

    sr.reveal(`.home__social, .home__scroll`, {
      delay: 100,
      origin: "bottom",
    });

    sr.reveal(`.section__text`, {
      delay: 100,
      scale: 0.9,
      origin: "right",
      distance: "30px",
    });
    sr.reveal(`.section__pic-container`, {
      delay: 100,
      origin: "left",
      scale: 0.9,
      distance: "30px",
    });
  }, []);
  return (
    <section id="profile">
      <div class="section__pic-container">
        <img src={main} alt="Profile Pic" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Suraj Pal</h1>
        <p class="section__text__p2">MERN Developer</p>
        <div class="btn-container">
          <a class="btn btn-color-1" href="#about">
            About{" "}
          </a>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/suraj-pal-561ab7125"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Surajpal011"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
