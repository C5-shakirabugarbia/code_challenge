import "./style.css";
import React, { useState, useEffect } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const Nav = () => {
  const [isActive, setActive] = useState(false);
  const [sIsActive, setSecondIsActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    setSecondIsActive(false);
  };
  const toggleClassS = () => {
    setSecondIsActive(!sIsActive);
    setActive(false);
  };
  return (
    <div className="NavCont">
      <div className="logo">
        <h1>GrabOne</h1>
      </div>
      <div className="BDropList">
        {" "}
        <button
          onClick={() => {
            toggleClass();
          }}
        >
          <HiOutlineLocationMarker className="Icon" /> Auckland{" "}
          <BsChevronDown className="down" />
        </button>
        <ul
          id="region-dropdown"
          className={isActive ? "dropList" : "disappear"}
        >
          <li className="lefLi">Auckland</li>

          <li className="lefLi">Waikato</li>

          <li className="lefLi">Wellington</li>

          <li className="lefLi">Northland</li>

          <li className="lefLi">Manawatu - Wanganui</li>

          <li className="lefLi">Tauranga</li>

          <li className="lefLi">Rotorua - Taupo</li>

          <li className="lefLi">Hawkes Bay</li>

          <li className="lefLi">Christchurch</li>

          <li className="lefLi">Taranaki</li>

          <li className="lefLi">Nelson - Marlborough</li>

          <li className="lefLi">Queenstown - Wanaka</li>

          <li className="lefLi">Dunedin - Invercargill</li>
        </ul>
      </div>

      <div className="secondPart">
        <ul className="right">
          <li className="Rli">
            {" "}
            <MdOutlineFavoriteBorder className="Icon" />{" "}
          </li>
          <li
            className="Rli
          "
          >
            <CgShoppingCart className="Icon" />
          </li>
          <li
            className="Rli
          "
          >
            <button
              className="SB"
              onClick={() => {
                toggleClassS();
              }}
            >
              <FiUser className="Icon" /> <BsChevronDown className="down" />
            </button>
            <ul className={sIsActive ? "RUL" : "disappear"}>
              <li
                className="lefLi
          "
              >
             
                  My Account
              
              </li>

              <li
                className="lefLi
          "
              >
              Gifts
              </li>

              <li
                className="lefLi
          "
              >
                Profile
              </li>

              <li
                className="lefLi
          "
              >
                My Subscriptions
              </li>

              <li
                className="lefLi
          "
              >
                My Purchases
              </li>

              <li
                className="lefLi
          "
              >
              Logout
              </li>

              <li
                className="lefLi
          "
              >
             Login
              </li>
            </ul>
          </li>
          <li
            className="Rli
          "
          >
            <FiMail className="Icon" /> Subscribe
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
// function MyComponent(props) {
//

//     return (
//       <div className={isActive ? "your-class" : null} onClick={toggleClass}>
//         <p>{props.text}</p>
//       </div>
//     );
//   }
