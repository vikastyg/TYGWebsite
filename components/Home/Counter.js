import React from "react";
import CountUp from "react-countup";

const Counter = ({ number, addeddisplayitem, title }) => {
  return (
    <div className="number">
      <span>
        <CountUp
          duration={2}
          className="counter"
          end={number}
          separator=""
          suffix={addeddisplayitem == true ? "+" : ""}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
        <p>{addeddisplayitem}</p>
      </span>

      <span>{title}</span>
    </div>
  );
};

export default Counter;
