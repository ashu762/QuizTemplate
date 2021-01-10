import React from "react";
import Check from "./Check";
const CheckList = ({ checked }) => {
  return (
    <div>
      {checked.map((ele, index) => {
        return <Check num={ele} />;
      })}
    </div>
  );
};

export default CheckList;
