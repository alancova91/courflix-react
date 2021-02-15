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
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
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

  return (
    <>
      <h3 className="catalog-title">Series</h3>
      <div className="recommendations-content-wrapper">
        <Slider {...settings}>{catalogImages.slice(1, 10)}</Slider>
      </div>
      <h3 className="catalog-title">Porque viste Arrow</h3>
      <div className="recommendations-content-wrapper">
        <Slider {...settings}>{catalogImages.slice(3, 9).reverse()}</Slider>
      </div>
    </>
  );
}

export default Recommendations;
