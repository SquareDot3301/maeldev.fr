import React from "react";
import { useNavigate } from "react-router-dom";

const Vsc = () => {
  const navigate = useNavigate();
  function back() {
    navigate("/discord", { replace: true });
  }
  function next() {
    navigate("/terminal", { replace: true });
  }
  return (
    <div className="vsc">
      <div className="cadre">
        <h3>
          <img src="./js.png" alt="JS-logo" height="32px" />
          index.js
        </h3>
        <h3>
          <img src="./nodejs.png" alt="NodeJS-logo" height="32px" />{" "}
          package.json
        </h3>
        <h3>
          <img src="./nodejs.png" alt="NodeJS-logo" height="32px" />{" "}
          package-lock.json
        </h3>
        <h3>
          <img src="./folder.png" alt="Folder-logo" height="32px" />
          node_modules
        </h3>
      </div>
      <div className="content">
        <div className="file">
          <p className="active">app.js X</p>
          <p>|</p>
          <p> package.json X</p>
          <p></p>
        </div>
        <div className="code">
          <span className="require">
            1 const Tools = require("tools-maeldev");
          </span>
          <br />
          <span>2 const dotenv = require("dotenv").config();</span>
          <br />
          <span className="break">3</span>
          <br />
          <span className="config">4 Tools.config();</span>
          <br />
          <span className="break">5</span>
          <br />
          <span className="tools">6 Tools.use("VsCode");</span>
          <br />
          <span className="tools">7 Tools.use("Terminal");</span>
          <br />
          <span className="tools">8 Tools.use("StackOverFlaw");</span>
          <br />
          <span className="tools">9 Tools.use("Spotify");</span>
          <br />
          <span className="break">10</span>
          <br />
          <span className="init">11 Tools.init(process.env.MAELPASSWORD);</span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="terminal">
          <div className="console">
            <h3>Bugs (999...)</h3>
            <h3>Outpout</h3>
            <h3>Debug Console</h3>
            <h3 className="active">Terminal</h3>
          </div>
          <div className="cmd">
            <h4>- maeldev git:(main) x npm run test</h4>
            <br />
            <br />
            <h3>
              Test failed because they are more than 999 errors. Please go to
              the next page
            </h3>
            <br />
            <br />
            <img onClick={back} src="./arrow2.png" alt="Back" />
            <img onClick={next} src="./arrow1.png" alt="Next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vsc;
