import "./style.scss";
import data from "../../data/seriesData.json";

function ChaptersList() {
  const serieFiltrada = data.series.filter(
    (item) => item.title.toLowerCase() === "arrow"
  );

  const ut = serieFiltrada[0];

  const epImg = ut.seasons[1].map((item) => {
    return (
      <img src={item.episodeImg} alt="arrow-ep01" className="episodes-images" />
    );
  });

  const episodesContent = ut.seasons[1].map((item) => {
    return (
      <div className="ep-content">
        <p className="ep-title">{item.title}</p>
        <p className="ep-plot">{item.plot}</p>
      </div>
    );
  });

  return (
    <div className="episodes-wrapper">
      <h3 className="season">Temporada 1</h3>
      <div className="catalogs">
        <div className="chapter-content-wrapper">
          <a
            href="https://www.youtube.com/watch?v=82iLDVrS3wQ&list=PLkGACYlyiRSfwsiQZ8hyvmXNsBZVmE6XD&ab_channel=GreenArrow"
            className="episode-content"
          >
            {epImg[0]}
          </a>
          {episodesContent[0]}
        </div>
        <div className="chapter-content-wrapper">
          <a
            href="https://www.youtube.com/watch?v=hzr65SznWuA&list=PLkGACYlyiRSfwsiQZ8hyvmXNsBZVmE6XD&index=8&ab_channel=Arrow#"
            className="episode-content"
          >
            {epImg[1]}
          </a>
          {episodesContent[1]}
        </div>
        <div className="chapter-content-wrapper">
          <a
            href="https://www.youtube.com/watch?v=AdvHWSZtRBw&list=PLedVbPgikoR9MmEXVK2X20Lp2RkG9LTFH&ab_channel=AlbertAdrienn"
            className="episode-content"
          >
            {epImg[2]}
          </a>
          {episodesContent[2]}
        </div>
      </div>
    </div>
  );
}

export default ChaptersList;
