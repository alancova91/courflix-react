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
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
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
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h3 className="catalog-title">Series</h3>
      <div className="recommendations-content-wrapper">
        <Slider {...settings}>{catalogImages.slice(1, 7)}</Slider>
      </div>
      <h3 className="catalog-title">Porque viste Arrow</h3>
      <div className="recommendations-content-wrapper">
        <Slider {...settings}>{catalogImages.slice(1, 7)}</Slider>
      </div>
    </>
  );
}

export default Recommendations;
