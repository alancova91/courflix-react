import "./style.scss";
import { Link } from "react-router-dom";
import data from "../../data/seriesData.json";

function SelectedCover({ id = 2 }) {
  const findSerie = data.series.find(serie => {
    return serie.id == id;
  });

  const { title, description, year, calification, numberOfSeasons, image, cover } = findSerie;

  return (
    <div className="selected-cover-wrapper">
      <div className="series-content-wrapper" style={{ backgroundImage: `url("${cover}")` }}>
        <img src={image} alt={title} className="logo-arrow" />
        <p className="selected-series-title">{title}</p>
        <div className="series-info">
          <p className="info" id="display-none">
            95% de coincidencia
          </p>
          <p className="info">{year}</p>
          <p className="info">{calification}</p>
          <p className="info">{numberOfSeasons}</p>
        </div>

        <div className="action-wrapper">
          <Link to="/chapters" className="action">
            Reproducir
          </Link>
          <a href="/" className="action">
            + Mi lista
          </a>
          <a href="/" className="like-button">
            <img src="/images/thumb-up.png" alt="thumb-up" />
          </a>
          <a href="/" className="like-button">
            <img src="/images/thumb-down.png" alt="thumb-down" />
          </a>
        </div>
        <p className="content-plot">{description}</p>
      </div>
    </div>
  );
}

export default SelectedCover;
