import "./style.scss";
import { Link } from "react-router-dom";

function SelectedCover() {
  return (
    <div className="selected-cover-wrapper">
      <div className="series-content-wrapper">
        <img
          src="images/arrow-logo-tv-series.png"
          alt=""
          className="logo-arrow"
        />
        <p className="selected-title">ARROW</p>
        <div className="series-info">
          <p className="info" id="display-none">
            95% de coincidencia
          </p>
          <p className="info">2012</p>
          <p className="info">16+</p>
          <p className="info">7 temporadas</p>
        </div>

        <div className="button-wrapper">
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

        <p className="content-description">
          Basada en las historietas de Flecha Verde, un próspero playboy se
          transforma en un superhéroe que salva a la ciudad de villanos, armado
          únicamente con un arco y flechas.
        </p>
      </div>
    </div>
  );
}

export default SelectedCover;
