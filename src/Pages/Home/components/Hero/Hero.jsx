// stylesheet
import "./style/Hero.scss";

// images
import Logo from "../../../../assets/Logo.png";
import Search from "../../../../assets/search.png";
import Menu from "../../../../assets/menu.png";
import tomatoes from "../../../../assets/tomatoes.png";
import imdb from "../../../../assets/imdb.png";
import play from "../../../../assets/play.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="inner_hero">
        <nav>
          <div className="left_nav">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="middle_nav">
            <div className="search_box">
              <input type="text" placeholder="What do you want to watch?" />
              <button>
                <img src={Search} alt="Search" />
              </button>
            </div>
          </div>
          <div className="right_nav">
            <p>Sign in</p>
            <img src={Menu} alt="Menu" />
          </div>
        </nav>
        <div className="hero_content">
          <h1>John Wick 3 : Parabellum</h1>
          <div className="rating">
            <div className="imbd">
              <img src={imdb} alt="imdb" />
              <p>86.0 / 100</p>
            </div>
            <div className="tomatoes">
              <img src={tomatoes} alt="tomatoes" />
              <p>97%</p>
            </div>
          </div>
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <div className="play">
            <img src={play} alt="play" />
            <button>Watch trailer</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
