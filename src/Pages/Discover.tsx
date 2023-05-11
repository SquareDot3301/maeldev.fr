import React from "react";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  function firefox() {
    navigate("/firefox", { replace: true });
  }
  function discord() {
    navigate("/discord", { replace: true });
  }
  function vsc() {
    navigate("/vsc", { replace: true });
  }
  return (
    <div className="container">
      <div className="discover">
        <div className="apps">
          <div className="app" onClick={firefox}></div>
          <div className="app" onClick={discord}></div>
          <div className="app" onClick={vsc}></div>
          <div className="app"></div>
          <div className="app"></div>
          <div className="app"></div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
