import React from "react";
import OverallGPA from "./OverallGPA";
import Coursewise from "./Coursewise";

function Stats(props) {
  const regno = props.data;
  return (
    <div className="stats-cont">
      <h2>Overall average GPA scored across each semester</h2>
      <OverallGPA />
      <h2>Overall average grade points across each course</h2>
      <Coursewise />
    </div>
  );
}

export default Stats;
