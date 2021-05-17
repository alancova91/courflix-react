import "./style.scss";
import data from "../../data/seriesData.json";
import { Link } from "react-router-dom";

function Main() {
  const random = Math.floor(Math.random() * (data.series.length - 1) + 1);
  const callTitle = data.series.find((serie) => {
    return serie.id == random;
  });

  const { title, year, calification, description, backgroundImage, cover, id } =
    callTitle;
  /*background-image: url("../../assets/images/black-summer.png");*/
  return (
    <div
      className="cover-wrapper"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="cover-content-wrapper">
        <h3 className="original-advise">Original de Courflix</h3>
        <h1 className="content-title">{title.toUpperCase()}</h1>
        <div className="content-info">
          <p className="info">{year}</p>
          <p className="info">{calification}</p>
          <p className="info">7 temporadas</p>
        </div>
        <div className="action-wrapper">
          <Link to={`/serie/${id}`} className="action">
            Reproducir
          </Link>
          <a href="/" className="action">
            + Mi lista
          </a>
        </div>
        <p className="content-season">Ve la temporada 1</p>
        <p className="content-plot">{description}</p>
      </div>
    </div>
  );
}

export default Main;
