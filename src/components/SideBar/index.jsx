import "./style.css";
import { data } from "../../datas/datas";
import { useState } from "react";

function SideBar({showTitle}) {
  
  return (
    <div className="sidebar">
     
      {data.map((item) => (
        <div className="sidebar_menu">
          <div className="sidebar_icon">{item.icon}</div>
          {showTitle && <div className="sidebar_title">{item.title}</div>}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
