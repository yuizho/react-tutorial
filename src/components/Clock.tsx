import React, { FC, useState, useEffect } from "react";

// Component should be started by uppercase
const Clock: FC = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    // clean up function
    //return () => clearInterval(intervalId);
  });

  // props should not be changed to keep  pure
  return (
    <>
      <h1>Hello!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </>
  );
};

export default Clock;
