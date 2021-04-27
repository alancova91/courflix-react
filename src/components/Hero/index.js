import "./style.scss";
import data from "../../data/seriesData.json";

function Main() {
  const callTitle = data.series.filter(
    (item) => item.title.toLowerCase() === "black summer"
  );

  const title = callTitle.map((item) => item.title);

  const plot = callTitle.map((item) => item.description);

  const year = callTitle.map((item) => item.year);

  const calification = callTitle.map((item) => item.calification);

  return (
    <div className="cover-wrapper">
      <div className="cover-content-wrapper">
        <h3 className="original-advise">Original de Courflix</h3>
        <h1 className="content-title">{title}</h1>
        <div className="content-info">
          <p className="info">{year}</p>
          <p className="info">{calification}</p>
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
          <p className="content-plot">{plot}</p>
        </>
      </div>
    </div>
  );
}

export default Main;
