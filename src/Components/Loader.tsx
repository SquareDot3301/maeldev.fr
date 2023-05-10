import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#4a4aff", "#b600ad", "#cccccc"],
  };

  return (
    <div className="loader">
      <GooeyCircleLoader {...loaderProps} />
    </div>
  );
}

export default Loader;
