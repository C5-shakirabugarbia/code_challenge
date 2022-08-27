import "./style.css";
import { FiSearch } from "react-icons/fi";
const Sbar = () => {
  return (
    <div className="secondNav">
      <div className="TheList_Right_Side">
        <ul>
          <li className="R_li">Browse Categories</li>
          <li className="R_li">What's New</li>
          <li className="R_li">Trending</li>
          <li className="R_li">For you</li>
          <li className="R_li">Shop Product</li>
        </ul>
      </div>
      <div className="TheList_left_Side">
        <form>
          <label>
            <FiSearch />
          </label>
          <input type={"search"} />
        </form>
      </div>
    </div>
  );
};
export default Sbar;
