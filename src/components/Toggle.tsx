import React, { FC, useState, useEffect } from "react";
//import ReactDOM, { button } from "react-dom";

const Toggle: FC = () => {
  const [toggleOn, setToggleOn] = useState(false);

  const handleClick = () => {
    console.log(`clicked ${toggleOn}`);
    setToggleOn(!toggleOn);
  };

  return (
    <>
      <button onClick={handleClick}>{toggleOn ? "ON" : "OFF"}</button>
    </>
  );
};

export default Toggle;
