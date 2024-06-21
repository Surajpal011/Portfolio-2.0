import React, { useEffect } from "react";
import "./navbar.css";
import "boxicons";
import ScrollReveal from "scrollreveal";

const Navbar = () => {
  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY >= 50) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    sr.reveal(`.nav__menu`, {
      delay: 100,
      scale: 0.1,
      origin: "bottom",
      distance: "300px",
    });
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Portfolio.
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#profile" className="nav__link">
                <i className="bx bx-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-dots"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
