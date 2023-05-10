import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="./index" className="active-page">
        <h1 className="logo-title">
          <img
            src="./MD-logo.webp"
            width="80px"
            height="80px"
            alt="My official logo"
          />
        </h1>
      </a>
      <ul>
        <li className="header">
          <a href="./project">Projets</a>
        </li>
        <li className="header">
          <a href="./skills">Skills</a>
        </li>
        <li className="header">
          <a href="./contact.php">Contact</a>
        </li>
        <li className="header">
          <a href="./blog">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
