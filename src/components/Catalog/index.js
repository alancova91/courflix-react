import { Link } from "react-router-dom";
import "./style.scss";

function catalogWrapper() {
  return (
    <div className="catalog-wrapper">
      <section className="catalog">
        <h3 className="catalog-title">Series</h3>
        <div className="catalog-content-wrapper">
          <Link to="/series" className="catalog-content">
            <img
              src="images/arrow.png"
              alt="arrow-img"
              className="cover-images"
            />
          </Link>
          <a href="#" className="catalog-content">
            <img
              src="images/sevendeadlysins.png"
              alt=""
              className="cover-images"
            />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/dark.png" alt="" className="cover-images" />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/vikings.png" alt="" className="cover-images" />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/flash.png" alt="" className="cover-images" />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/protector.png" alt="" className="cover-images" />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/arrow.png" alt="" className="cover-images" />
          </a>
        </div>
        <h3 className="catalog-title">Seguir viendo contenido de Alan</h3>
        <div className="catalog-content-wrapper">
          <div className="asdf">
            <a href="serie.html" className="catalog-content">
              <img src="images/arrow.png" alt="" className="cover-images" />
            </a>
            <div className="progress-bar">
              <div className="progress" style={{ width: "20%" }}></div>
            </div>
          </div>
          <div className="asdf">
            <a href="#" className="catalog-content">
              <img src="images/flash.png" alt="" className="cover-images" />
            </a>
            <div className="progress-bar">
              <div className="progress" style={{ width: "40%" }}></div>
            </div>
          </div>
          <div className="asdf">
            <a href="#" className="catalog-content">
              <img src="images/dark.png" alt="" className="cover-images" />
            </a>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="asdf">
            <a href="#" className="catalog-content">
              <img
                src="images/sevendeadlysins.png"
                alt=""
                className="cover-images"
              />
            </a>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>

        <h3 className="catalog-title">Agregados recientemente</h3>
        <div className="catalog-content-wrapper">
          <a href="#" className="catalog-content">
            <img src="images/vikings.png" alt="" className="cover-images" />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/protector.png" alt="" className="cover-images" />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/dark.png" alt="" className="cover-images" />
          </a>
          <a href="#" className="catalog-content">
            <img
              src="images/sevendeadlysins.png"
              alt=""
              className="cover-images"
            />
          </a>
          <a href="#" className="catalog-content">
            <img src="images/flash.png" alt="" className="cover-images" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default catalogWrapper;
