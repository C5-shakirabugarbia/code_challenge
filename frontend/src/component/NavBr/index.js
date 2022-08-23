import "./style.css";
import React, { useState, useEffect } from "react";
const Nav = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
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
          <li className="Rli">shaker</li>
          <li
            className="Rli
          "
          >
            hello
          </li>
          <li
            className="Rli
          "
          >
            hello
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
