import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const progress = useRef();
  const percentage = useSelector((state) => state.form.percentage);
  useEffect(() => {
    progress.current.style.width = percentage;
    console.log(progress.current);
  }, [percentage]);
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
