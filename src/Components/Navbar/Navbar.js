import React from "react";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Drawer, Button } from "@mantine/core";
import { Menu2 } from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <h2>Portfolio</h2>
        </div>
        <div className="navbar-right">
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/works">Works</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`scroll-to-top ${isVisible ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <button className="arrow-badge-upicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="arrowupicon icon-tabler icon-tabler-arrow-badge-up"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" />
            </svg>
          </button>
        </div>
        <div className="header-menu">
          <>
            <Drawer
              position="right"
              offset={0.4}
              radius="md"
              opened={opened}
              onClose={close}
            >
              <ul className="menu">
                <li onClick={close}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={close}>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={close}>
                  <NavLink to="/skills">Skills</NavLink>
                </li>
                <li onClick={close}>
                  <NavLink to="/works">Works</NavLink>
                </li>
                <li onClick={close}>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </Drawer>
            {!opened ? (
              <Button className="burger-button" onClick={open}>
                <Menu2
                  className="open"
                  size={"2rem"}
                  strokeWidth={2}
                  color={"white"}
                />
              </Button>
            ) : (
              <Button className="x-button" onClick={close}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  color="white"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </Button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
