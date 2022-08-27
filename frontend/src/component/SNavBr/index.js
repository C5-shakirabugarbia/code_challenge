import "./style.css";
import { FiSearch } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const Sbar = () => {
  return (
    <div className="secondNav">
      <div className="TheList_Right_Side">
        <ul className="R_ul">
          <li className="R_li">Browse Categories</li>
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
