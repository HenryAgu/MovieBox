// stylesheet
import "./style/Footer.scss";

// images
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import Twitter from "./images/twitter.png";
import Youtube from "./images/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_social">
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={Twitter} alt="Twitter" />
        <img src={Youtube} alt="Youtube" />
      </div>
      <div className="footer_nav">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className="last_footer">
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </footer>
  );
};

export default Footer;
