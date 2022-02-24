import { Link } from "react-router-dom";
import "../style/FooterStyle.css";
import { ReactComponent as YummyFooterlogo } from "../images/footer/Yummy.svg";
import { ReactComponent as Twitterlogo } from "../images/footer/twitter.svg";
import { ReactComponent as Facebooklogo } from "../images/footer/facebook.svg";
import { ReactComponent as Instagramlogo } from "../images/footer/instagram.svg";
export const Footer = () => {
  return (
    <div className="FooterMain">
      <div className="YummyFooter">
        <div>
          <Link to="/">
            <YummyFooterlogo />
          </Link>
        </div>
        <div className="FooterMenu">
          <Link to="/">Home</Link>
          <Link to="/recipe">Recipe</Link>
        </div>
        <div className="FooterIcon">
          <Link to="/">
            <Twitterlogo />
          </Link>
          <Link to="/">
            <Facebooklogo />
          </Link>
          <Link to="/">
            <Instagramlogo />
          </Link>
        </div>
      </div>
      <div className="FooterYear">
        <p>©2022 by yummy.</p>
      </div>
    </div>
  );
};
