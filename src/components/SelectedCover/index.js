import "./style.scss";
import { Link } from "react-router-dom";
import data from "../../data/seriesData.json";

function SelectedCover() {
  const callTitle = data.series.filter(
    (item) => item.title.toLowerCase() === "arrow"
  );

  const title = callTitle.map((item) => item.title);

  const plot = callTitle.map((item) => item.description);

  return (
    <div className="selected-cover-wrapper">
      <div className="series-content-wrapper">
        <img
          src="images/arrow-logo-tv-series.png"
          alt=""
          className="logo-arrow"
        />
        <p className="selected-series-title">{title}</p>
        <div className="series-info">
          <p className="info" id="display-none">
            95% de coincidencia
          </p>
          <p className="info">2012</p>
          <p className="info">16+</p>
          <p className="info">7 temporadas</p>
        </div>

        <div className="action-wrapper">
          <Link to="/chapters" className="action">
            Reproducir
          </Link>
          <a href="#" className="action">
            + Mi lista
          </a>
          <a href="#" className="like-button">
            <img src="images/thumb-up.png" alt="thumb-up" />
          </a>
          <a href="#" className="like-button">
            <img src="images/thumb-down.png" alt="thumb-down" />
          </a>
        </div>
        <p className="content-plot">{plot}</p>
      </div>
    </div>
  );
}

export default SelectedCover;
