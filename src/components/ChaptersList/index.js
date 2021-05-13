import "./style.scss";
import data from "../../data/seriesData.json";

function ChaptersList({ id = 2 }) {
  const findSerie = data.series.find(serie => {
    return serie.id == id;
  });

  const episodesImages = findSerie.seasons[1].map(item => {
    return <img src={`/${item.episodeImg}`} alt={item.title} className="episode-image" />;
  });

  const episodesContent = findSerie.seasons[1].map(item => {
    return (
      <div className="episode-content">
        <p className="episode-title">{item.title}</p>
        <p className="episode-plot">{item.plot}</p>
      </div>
    );
  });

  return (
    <div className="episodes-wrapper">
      <h3 className="season">Temporada 1</h3>
      <div className="episodes-list">
        <div className="episodes-content-wrapper">
          <a
            href="https://www.youtube.com/watch?v=82iLDVrS3wQ&list=PLkGACYlyiRSfwsiQZ8hyvmXNsBZVmE6XD&ab_channel=GreenArrow"
            className="episodes-links"
          >
            {episodesImages[0]}
          </a>
          {episodesContent[0]}
        </div>
        <div className="episodes-content-wrapper">
          <a
            href="https://www.youtube.com/watch?v=hzr65SznWuA&list=PLkGACYlyiRSfwsiQZ8hyvmXNsBZVmE6XD&index=8&ab_channel=Arrow#"
            className="episodes-links"
          >
            {episodesImages[1]}
          </a>
          {episodesContent[1]}
        </div>
        <div className="episodes-content-wrapper">
          <a
            href="https://www.youtube.com/watch?v=AdvHWSZtRBw&list=PLedVbPgikoR9MmEXVK2X20Lp2RkG9LTFH&ab_channel=AlbertAdrienn"
            className="episodes-links"
          >
            {episodesImages[2]}
          </a>
          {episodesContent[2]}
        </div>
      </div>
    </div>
  );
}

export default ChaptersList;
