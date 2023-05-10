import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import HomeContent from "./HomeContent";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  //   the useEffect will run on the first rendering of the App component
  //   after two seconds (about how long it takes for the data to load)
  //   the loaded state will become true
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="home fade-in">{!loaded ? <Loader /> : <HomeContent />}</div>
  );
};

export default Home;
