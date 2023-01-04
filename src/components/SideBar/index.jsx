import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoSpeedometer } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import {BsShieldShaded} from 'react-icons/bs'
import {FaAmbulance,FaBriefcaseMedical} from 'react-icons/fa'
function SideBar() {
  return (
    <div className="side_bar">
      <VscThreeBars />
      <IoSpeedometer />
      <GoPerson />
      <HiUserGroup />
      <BsShieldShaded />
      <FaAmbulance />
      <FaBriefcaseMedical/>
    </div>
  );
}

export default SideBar;
