import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar(props) {
  const handleItemClick = (item) => {
    props.handleItemClick(item);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <div className="Sidebar-head">Register Number </div>
        <div className="Sidebar-data">{props.data}</div>
      </div>
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="sidebar-row"
              id={window.location.pathname == val.Link ? "active" : ""}
              onClick={() => props.handleItemClick(val)}
            >
              <div id="sidebar-icon">{val.icon}</div>
              <div id="sidebar-title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
// onClick={() => {
//                 window.location.pathname = val.Link;
//               }}
