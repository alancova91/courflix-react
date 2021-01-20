import "./style.scss";

function Main() {
  return (
    <div className="cover-wrapper">
      <div className="cover-content-wrapper">
        <h3 className="original-advise">Original de COURFLIX</h3>
        <h1 className="content-title">BLACK SUMMER</h1>
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
        <p className="content-description">
          Una ansiada luna de miel. Un asesinato terrible. Varios sospechosos.
          Si sobreviven, serán unas vacaciones de ensueño.
        </p>
      </div>
    </div>
  );
}

export default Main;
