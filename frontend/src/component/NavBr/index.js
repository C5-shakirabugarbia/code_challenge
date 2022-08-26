import "./style.css";
import React, { useState, useEffect } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Nav = () => {
  const [isActive, setActive] = useState(false);
  const [sIsActive, setSecondIsActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleClassS = () => {
    setSecondIsActive(!sIsActive);
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
          Auckland
        </button>
        <ul
          id="region-dropdown"
          className={isActive ? "dropList" : "disappear"}
        >
          <li className="lefLi">
            <a href="?region=auckland">Auckland</a>
          </li>

          <li className="lefLi">
            <a href="?region=waikato">Waikato</a>
          </li>

          <li className="lefLi">
            <a href="?region=wellington">Wellington</a>
          </li>

          <li className="lefLi">
            <a href="?region=northland">Northland</a>
          </li>

          <li className="lefLi">
            <a href="?region=manawatu-wanganui">Manawatu - Wanganui</a>
          </li>

          <li className="lefLi">
            <a href="?region=tauranga">Tauranga</a>
          </li>

          <li className="lefLi">
            <a href="?region=rotorua-taupo">Rotorua - Taupo</a>
          </li>

          <li className="lefLi">
            <a href="?region=hawkes-bay">Hawkes Bay</a>
          </li>

          <li className="lefLi">
            <a href="?region=christchurch">Christchurch</a>
          </li>

          <li className="lefLi">
            <a href="?region=taranaki">Taranaki</a>
          </li>

          <li className="lefLi">
            <a href="?region=nelson-marlborough">Nelson - Marlborough</a>
          </li>

          <li className="lefLi">
            <a href="?region=queenstown-wanaka">Queenstown - Wanaka</a>
          </li>

          <li className="lefLi">
            <a href="?region=dunedin-invercargill">Dunedin - Invercargill</a>
          </li>
        </ul>
      </div>

      <div className="secondPart">
        <ul className="right">
          <li className="Rli">
            {" "}
            <MdOutlineFavoriteBorder />{" "}
          </li>
          <li
            className="Rli
          "
          >
            <CgShoppingCart />
          </li>
          <li
            className="Rli
          "
          >
            <button
              onClick={() => {
                toggleClassS();
              }}
            >
              <FiUser />
            </button>
            <ul className={sIsActive ? "RUL" : "disappear"}>
              <li class="toggler-off dropdown-list-item--account">
                <a href="https://www.grabone.co.nz/my-stuff/my-account">
                  My Account
                </a>
              </li>

              <li class="toggler-off dropdown-list-item--gifts">
                <a href="https://www.grabone.co.nz/redeem">Gifts</a>
              </li>

              <li class="toggler-off dropdown-list-item--profile">
                <a href="https://www.grabone.co.nz/profile">Profile</a>
              </li>

              <li class="toggler-off dropdown-list-item--my-subscriptions">
                <a href="https://www.grabone.co.nz/my-stuff/my-subscriptions">
                  My Subscriptions
                </a>
              </li>

              <li class="toggler-off dropdown-list-item--experience">
                <a href="https://www.grabone.co.nz/my-stuff/my-deals">
                  My Purchases
                </a>
              </li>

              <li class="toggler-off dropdown-list-item--logout">
                <a href="https://www.grabone.co.nz/logout">Logout</a>
              </li>

              <li class="toggler-off dropdown-list-item--login">
                <a href="https://www.grabone.co.nz/login">Login</a>
              </li>
            </ul>
          </li>
          <li
            className="Rli
          "
          >
            <FiMail /> Subscribe
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
