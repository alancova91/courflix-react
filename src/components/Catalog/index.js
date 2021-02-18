import { Link } from "react-router-dom";
import "./style.scss";
import data from "../../data/seriesData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function catalogWrapper() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2.5,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const catalogImages = data.series.map((item) => {
    return (
      <a href="#" className="catalog-content">
        <img src={item.image} alt="" className="cover-images2" />
      </a>
    );
  });

  const catalogImages2 = data.series.map((item) => {
    return (
      <div className="content-and-progress">
        <a href="#" className="catalog-content">
          <img src={item.image} alt="" className="cover-images" />
        </a>
        <div className="progress-bar">
          <div className="progress" style={{ width: item.progress }}></div>
        </div>
      </div>
    );
  });

  return (
    <div className="catalog-wrapper">
      <section className="catalog">
        <h3 className="catalog-title">Series</h3>
        <Slider {...settings}>
          <Link to="/series" className="catalog-content">
            <img
              src="images/arrow.png"
              alt="arrow-img"
              className="cover-images2"
            />
          </Link>
          {catalogImages.slice(2, 10)}
        </Slider>
        <h3 className="catalog-title">Seguir viendo contenido de Alan</h3>
        <div className="catalog-content-wrapper">
          <Slider {...{ ...settings, slidesToShow: 5, arrows: false }}>
            {catalogImages2.slice(2, 7)}
          </Slider>
        </div>
        <h3 className="catalog-title">Agregados recientemente</h3>
        <Slider {...settings}>{catalogImages.slice(2, 10).reverse()}</Slider>
      </section>
    </div>
  );
}

export default catalogWrapper;
