import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header-home">
        <img src="./app.png" alt="" />
        <div className="container-text">
          <h1>Hello Stranger ! Welcome to my portfolio !</h1>
        </div>
        <div className="call-to-actions">
          <a className="button" href="/discover">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
