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
<<<<<<< HEAD
    slidesToShow: 6,
=======
    slidesToShow: 5,
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
<<<<<<< HEAD
          slidesToShow: 5,
=======
          slidesToShow: 4,
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
<<<<<<< HEAD
          slidesToShow: 4,
=======
          slidesToShow: 3,
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
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

<<<<<<< HEAD
  const catalogImages2 = data.series.map((item) => {
=======
  const progressBar = data.series.map((item) => {
    return <div className="progress" style={{ width: item.progress }}></div>;
  });

  const catalogImages = data.series.map((item) => {
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
    return (
      <div className="content-and-progress">
        <a href="#" className="catalog-content">
          <img src={item.image} alt="" className="cover-images" />
        </a>
<<<<<<< HEAD
        <div className="progress-bar">
          <div className="progress" style={{ width: item.progress }}></div>
        </div>
=======
        <div className="progress-bar">{}</div>
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
      </div> /*falta lograr que sea un progress por imagen*/
    );
  });

<<<<<<< HEAD
  const catalogImages = data.series.map((item) => {
    return (
      <a href="#" className="catalog-content">
        <img src={item.image} alt="" className="cover-images2" />
      </a>

      /*falta lograr que sea un progress por imagen*/
    );
  });

=======
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
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
<<<<<<< HEAD
          {catalogImages.slice(2, 10)}
        </Slider>
        <h3 className="catalog-title">Seguir viendo contenido de Alan</h3>
        <div className="catalog-content-wrapper">
          <Slider {...settings}> {catalogImages2.slice(2, 7)}</Slider>
        </div>
        <h3 className="catalog-title">Agregados recientemente</h3>
        <Slider {...settings}>{catalogImages.slice(2, 10).reverse()}</Slider>
=======
          {catalogImages.slice(2, 7)}
        </Slider>
        <h3 className="catalog-title">Seguir viendo contenido de Alan</h3>
        <div className="catalog-content-wrapper">
          {catalogImages.slice(2, 3)}
        </div>
        <h3 className="catalog-title">Agregados recientemente</h3>
        <Slider {...settings}>{catalogImages.slice(2, 8)}</Slider>
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
      </section>
    </div>
  );
}

export default catalogWrapper;
