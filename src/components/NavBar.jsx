import { Link } from "react-router-dom";
import "../style/NavBarStyle.css";
import { ReactComponent as Yummylogo } from "../images/navigation/Yummy.svg";
import { ReactComponent as HamburgerIcon } from "../images/navigation/hamburgerIcon.svg";

const NavBar = () => {
  return (
    //Main Container
    <div className="YummyMainContainer">
      {/* Navigation Bar starting */}
      <div className="NavBarMain">
        {/* Navigation bar inner container */}
        <div className="NavBarInner">
          {/* Navigation bar yummy logo and hamburger icon */}
          <div className="YummyLogo">
            <Link to="/">
              <Yummylogo />
            </Link>
            <div className="HamburgerIcon">
              <Link to="/">
                <HamburgerIcon />
              </Link>
            </div>
          </div>
          {/* Home and recipe Container */}
          <div className="NavigationMenu">
            <Link to="/">Home</Link>
            <a href="#ImageCards">Recipe</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
