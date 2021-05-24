import React from "react";

const Names = () => {
  return (
    <div className="name-comp">
      <div className="name first">
        <h4>Name 1: </h4>
        <input className='input' placeholder="First Name Here" />
      </div>
      <div className="name second">
        <h4>Name 2: </h4>
        <input className='input' placeholder="Second Name Here" />
      </div>

      <div className="button">
          <button className="calculate">Calculate</button>
      </div>
    </div>
  );
};

export default Names;