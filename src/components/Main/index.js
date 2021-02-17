import "./style.scss";
import data from "../../data/seriesData.json";

function Main() {
  const callTitle = data.series.filter(
    (item) => item.title.toLowerCase() == "black summer"
  );

  const title = callTitle.map((item) => item.title);

  const plot = callTitle.map((item) => item.description);

  return (
    <div className="cover-wrapper">
      <div className="cover-content-wrapper">
        <h3 className="original-advise">Original de Courflix</h3>
        <h1 className="content-title">{title}</h1>
        <div className="series-infos">
          <p className="info">2012</p>
          <p className="info">16+</p>
          <p className="info">7 temporadas</p>
        </div>
        <div className="action-wrapper">
          <a href="#" className="action">
            Reproducir
          </a>
          <a href="#" className="action">
            + Mi lista
          </a>
        </div>
        <p className="content-season">Ve la temporada 1</p>
        <>
          <p className="content-description">{plot}</p>
        </>
      </div>
    </div>
  );
}

export default Main;
