import "./style.scss";
import { Link } from "react-router-dom";

function Recommendations() {
  return (
    <>
      <h3 className="catalog-title">Series</h3>
      <div className="recommendations-content-wrapper">
        <Link to="/series" className="catalog-content">
          <img src="images/arrow.png" alt="" className="cover-image" />
        </Link>
        <a href="#" className="catalog-content">
          <img
            src="images/sevendeadlysins.png"
            alt=""
            className="cover-image"
          />
        </a>
        <a href="#" className="catalog-content">
          <img src="images/dark.png" alt="" className="cover-image" />
        </a>
        <a href="#" className="catalog-content">
          <img src="images/vikings.png" alt="" className="cover-image" />
        </a>
        <a href="#" className="catalog-content">
          <img src="images/flash.png" alt="" className="cover-image" />
        </a>
        <a href="#" className="catalog-content">
          <img src="images/protector.png" alt="" className="cover-image" />
        </a>
        <a href="#" className="catalog-content">
          <img src="images/arrow.png" alt="" className="cover-image" />
        </a>
      </div>
    </>
  );
}

export default Recommendations;
