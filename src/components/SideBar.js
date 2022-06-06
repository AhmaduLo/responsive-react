import React from "react";
import "../styles/Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
// on import sidebar fom data----
import { SidebarData } from "../data/Data";
import { useState } from "react";

function SideBar(props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu*/}

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem out">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
