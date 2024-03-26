import React from "react";

function Data(props) {
  return (
    <div className="data-container">
      <div className="data-title">{props.title}</div>
      <div className="data-data">{props.data}</div>
    </div>
  );
}

export default Data;
