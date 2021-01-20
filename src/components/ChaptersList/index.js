import "./style.scss";

function ChaptersList() {
  return (
    <div classNameName="episodes-wrapper">
      <div className="catalogs">
        <h3 className="season">Temporada 1</h3>
        <div className="chapter-content-wrapper">
          <a href="https://youtu.be/xAuByUkxrPE" className="episode-content">
            <img
              src="images/arrow-ep01.jpg"
              alt="arrow-ep01"
              className="episodes-images"
            />
          </a>
          <div className="ep-content">
            <p className="ep-title">1. Piloto</p>
            <p className="ep-plot">
              Supuestamente muerto por cinco años antes de que lo descubrieran
              en una isla del Pacífico, el multimillonario Oliver Queen vuelve a
              casa como un hombre distinto.
            </p>
          </div>
        </div>
      </div>
      <div className="catalogs">
        <div className="chapter-content-wrapper">
          <a href="#" className="episode-content">
            <img
              src="images/arrow-ep01x1.jpg"
              alt=""
              className="episodes-images"
            />
          </a>
          <div className="ep-content">
            <p className="ep-title">2. Honra a tu padre</p>
            <p className="ep-plot">
              Oliver pone su mira en derrotar a un criminal relacionado con la
              tríada china: Martin Somers, a quien Laurel está demandando.
            </p>
          </div>
        </div>
      </div>
      <div className="catalogs">
        <div className="chapter-content-wrapper">
          <a href="#" className="episode-content">
            <img
              src="images/arrow-ep03.jpg"
              alt=""
              className="episodes-images"
            />
          </a>
          <div className="ep-content">
            <p className="ep-title">3. Pistoleros Solitarios</p>
            <p className="ep-plot">
              Cuando un pistolero mata a uno de los objetivos de Oliver, él
              solicita la ayuda de la detective Lance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChaptersList;
