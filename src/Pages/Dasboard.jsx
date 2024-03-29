import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Profile from "./Profile";
import Stats from "../Components/Stats";
function Dashboard() {
  const location = useLocation();
  const regno = location.state.regno;
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleSidebarItemClick = (item) => {
    switch (item.Link) {
      case "/profile":
        console.log(item.Link);
        setSelectedComponent(<Profile data={regno} />);
        break;
      case "/dashboard":
        console.log(item.Link);
        setSelectedComponent(<Stats data={regno} />);
        break;
      default:
        setSelectedComponent(null);
    }
  };
  return (
    <div className="overall-container">
      <div className="sidebar-container">
        <Sidebar data={regno} handleItemClick={handleSidebarItemClick} />
      </div>
      <div className="content-container">
        {selectedComponent ? selectedComponent : <Stats />}
      </div>
    </div>
  );
}
export default Dashboard;
