import React from "react";
import "./style.css";
import { dataOptions } from "../../datas/datas";
import {
  BsPersonCircle,
  BsPencil,
  BsThreeDotsVertical,
  BsGenderMale,
  BsBriefcaseFill,
} from "react-icons/bs";
import {
  AiOutlinePlus,
  AiFillPlusCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { FaGlobeAmericas, FaSuitcase, FaRegIdCard } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import Grid from "./Grid";
function Home() {
  return (
    <div className="home">
      <div className="home_top">
        <div className="patient_details">
          <div className="patient_details_left">
            <div className="top">
              <BsPersonCircle className="avatar" />

              <div className="patient_data">
                <div className="patient_data_title">
                  <h1>Pet3011 Par3011</h1>
                  <div className="patient_data_title_right">
                    <div className="head_menu">
                      <BsPencil />
                      <BsThreeDotsVertical />
                    </div>
                    <div className="head_menu1">
                      <AiOutlinePlus />
                      <span>Chart</span>
                    </div>
                    <div className="head_menu1">
                      <AiOutlinePlus />
                      <span>Enroll</span>
                    </div>
                  </div>
                </div>
                <div className="patient_datas">
                  <div className="datas">
                    <BsGenderMale />
                    <span>
                      <b>DOB:</b> 01-Jan-1980 (42 yrs)
                    </span>
                  </div>
                  <div className="datas">
                    <FaGlobeAmericas />
                    <span>
                      <b>Ethinicity:</b>Caucasian (European)
                    </span>
                  </div>
                  <div className="datas">
                    <FaSuitcase />
                    <span>
                      <b>Occupation:</b>Management
                    </span>
                  </div>
                  <div className="datas">
                    <FaRegIdCard />
                    <span>
                      <b>Account #:</b>142627847
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom_boxes">
                <div className="datass">
                  <div className="heading">
                    <h1>Risk</h1>
                  </div>
                  <span>
                    This year: <b>N/A</b>
                  </span>
                  <span>
                    Last year: <b>N/A</b>
                  </span>
                </div>
                <div className="datass">
                  <div className="heading">
                    <h1>Risk</h1>
                  </div>
                  <span>
                    This year: <b>N/A</b>
                  </span>
                  <span>
                    Last year: <b>N/A</b>
                  </span>
                </div>
                <div className="datass">
                  <div className="heading">
                    <h1>Risk</h1>
                  </div>
                  <span>
                    This year: <b>N/A</b>
                  </span>
                  <span>
                    Last year: <b>N/A</b>
                  </span>
                </div>
                <div className="datass">
                  <div className="heading">
                    <h1>Risk</h1>
                  </div>
                  <span>
                    This year: <b>N/A</b>
                  </span>
                  <span>
                    Last year: <b>N/A</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="patient_details_right">
            <div className="patient_details_right_top">
              <div className="locaion">
                <IoLocationSharp />
                <span>No details provided</span>
              </div>
              <span>
                <b>Primary : </b>987653210
              </span>
              <span>
                <b>Emergency : </b>9876543210
              </span>
              <span>
                <b>Policy Number : </b>999999
              </span>
              <span>
                <b>Insurer : </b>Medicare
              </span>
            </div>
            <div className="patient_details_right_bottom">
              <h1>Screenings</h1>
              <div className="options">
                <ul>
                  {dataOptions.map((list) => (
                    <li>{list.item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="home_top_right">
          <div className="home_top_right_container">
            <div className="home_top_right_">
              <div className="home_top_right_top_left">
                <BsBriefcaseFill className="icon" />
                <span>Recent Activity :</span>
              </div>
              <div className="home_top_right_top_right">
                <AiFillPlusCircle className="icon" />
              </div>
            </div>
            <p>Follow up</p>
          </div>
          <div className="home_top_right_container">
            <div className="home_top_right_">
              <div className="home_top_right_top_left">
                <BsBriefcaseFill className="icon" />
                <span>Recent Activity :</span>
              </div>
              <div className="home_top_right_top_right">
                <AiFillPlusCircle className="icon" />
              </div>
            </div>
            <div className="home_top_right_top_right_menu">
              <AiOutlineLeft className="icon2" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <AiOutlineRight className="icon2" />
            </div>
          </div>
        </div>
      </div>
      <div className="home_bottom">
        <Grid />
      </div>
    </div>
  );
}

export default Home;
