import React from "react";

const Check = ({ num }) => {
  return (
    <div>{num === 1 ? "Correct" : num === 2 ? "Incorrect" : "Unanswered"}</div>
  );
};

export default Check;
