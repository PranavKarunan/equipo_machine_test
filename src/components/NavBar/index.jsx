import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
const NavBar = ({ showTitle, setShowTitle }) => {
  return (
    <div className="navbar">
      <div className="left_navbar">
        <div className="menu" onClick={() => setShowTitle(!showTitle)}>
          <VscThreeBars />
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
            <MdKeyboardArrowDown />
          </div>
          <div className="search_input">
            <input
              className="adv_search"
              type="text"
              name=""
              id=""
              placeholder="Last Name /First Name"
            />
          </div>
          <div className="search_close">
            <AiOutlineClose />
          </div>
        </div>
        <div className="navbar_left_menu">
          <div className="child">
            <BiSearch />
            <h4>Advanced Search</h4>
          </div>
          <div className="child">
            <AiOutlinePlus />
            <h4>Patient</h4>
          </div>
        </div>
      </div>
      <div className="right_navbar"></div>
    </div>
  );
};

export default NavBar;
