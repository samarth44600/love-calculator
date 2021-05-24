import React, { useRef } from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const percentage = useSelector((state) => state.form.percentage);
  const progress = useRef();
  progress.current.style.width = percentage;
  return (
    <div className="loading-comp">
      <div className="loading-bar">
        <div className="progress" ref={progress}>
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default Loader;
