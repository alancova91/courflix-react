import "./style.scss";
import { Link } from "react-router-dom";
import data from "../../data/seriesData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Recommendations() {
  const catalogImages = data.series.map((item) => {
    return (
      <a href="#" className="catalog-content">
        <img src={item.image} alt="" className="cover-images" />
      </a>
    );
  });

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
<<<<<<< HEAD
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: false,
=======
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
          dots: true,
        },
      },
      {
<<<<<<< HEAD
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
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
=======
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
<<<<<<< HEAD
          arrows: false,
=======
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
        },
      },
    ],
  };

  return (
    <>
      <h3 className="catalog-title">Series</h3>
      <div className="recommendations-content-wrapper">
<<<<<<< HEAD
        <Slider {...settings}>{catalogImages.slice(1, 10)}</Slider>
      </div>
      <h3 className="catalog-title">Porque viste Arrow</h3>
      <div className="recommendations-content-wrapper">
        <Slider {...settings}>{catalogImages.slice(3, 9).reverse()}</Slider>
=======
        <Slider {...settings}>{catalogImages.slice(1, 7)}</Slider>
      </div>
      <h3 className="catalog-title">Porque viste Arrow</h3>
      <div className="recommendations-content-wrapper">
        <Slider {...settings}>{catalogImages.slice(1, 7)}</Slider>
>>>>>>> 073400713bf140f6ca177594860e83ab66ac9bb5
      </div>
    </>
  );
}

export default Recommendations;
