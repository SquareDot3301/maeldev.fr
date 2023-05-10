import React from "react";
import { useNavigate } from "react-router-dom";

const Firefox = () => {
  const navigate = useNavigate();
  function back() {
    navigate("/discover", { replace: true });
  }
  function next() {
    navigate("/discord", { replace: true });
  }
  function reload() {
    navigate("/firefox", { replace: true });
  }
  return (
    <div className="firefox">
      <div className="cadre">
        <div className="onglets">
          <div className="tabs">
            <p>My website is...</p>
            <p>X</p>
          </div>
        </div>
        <div className="bar">
          <div className="left">
            <img onClick={back} src="./arrow2.png" alt="Arrow right" />
            <img onClick={next} src="./arrow1.png" alt="Arrow left" />
            <img onClick={reload} src="./reload.png" alt="Reload" />
          </div>
          <div className="right">
            <img src="./params.png" alt="Settings" />
          </div>
        </div>
        <div className="content fade-in">
          <h1 className="title">My website is...</h1>
          <br />
          <ul>
            <li>
              A portfolio to show my talents of web developper ( I am a boss )
            </li>
            <li>
              A site I like to create, edit, ... ( I liked to create this page )
            </li>
            <li>A real goldmine of design and concept ( in all modesty )</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Firefox;
