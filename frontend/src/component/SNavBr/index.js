import "./style.css";
import { FiSearch } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const Sbar = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="secondNav">
      <div className="TheList_Right_Side">
        <div className="list_holder">
          <ul className={isActive ? "Two_side_drob" : "none"}>
            <li>
              <div>Activities, Events & Outdoors</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Automotive</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div> Baby, Kids & Toys</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div> Beauty, Massage & Spa</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div> Books & Magazines</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Clothing & Fashion - Men's</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Clothing & Fashion - Women's </div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Electronics & Computers</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Fitness & Sports </div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>GrabOne</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div> Grocery & Food</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Health, Nutrition & Dental</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Holidays, Hotels & Travel</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>House & Garden</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div> Restaurants, Bars, Cafes </div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div> Stationery, Art & Craft</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Training & Courses</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div>Wine, Beer & Spirits </div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div> House & Garden</div>
              <div className="A_right">
                <AiOutlineRight />
              </div>
            </li>
          </ul>
        </div>

        <ul className="R_ul">
          <li
            className="R_li"
            onClick={() => {
              toggleClass();
            }}
          >
            Browse Categories <BsChevronDown className="A_icon" />
          </li>

          <li className="R_li">What's New</li>
          <li className="R_li">Trending</li>
          <li className="R_li">For you</li>
          <li className="R_li">Shop Product</li>
        </ul>
      </div>
      <div className="TheList_left_Side">
        <label className="S_icon">
          <FaSearch className="Se_Icon" />
        </label>

        <input
          type={"search"}
          placeholder={"Search GrabOne"}
          className="searchInput"
        />
      </div>
    </div>
  );
};
export default Sbar;
