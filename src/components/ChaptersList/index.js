import "./style.scss";
import data from "../../data/seriesData.json";

function ChaptersList({ id = 2 }) {
  const findSerie = data.series.find((serie) => {
    return serie.id == id;
  });

  return (
    <div className="episodes-wrapper">
      <h3 className="season">Temporada 1</h3>
      <div className="episodes-list">
        {findSerie.seasons[1].map((episode) => {
          return (
            <div className="episodes-content-wrapper">
              <a
                href="https://www.youtube.com/watch?v=82iLDVrS3wQ&list=PLkGACYlyiRSfwsiQZ8hyvmXNsBZVmE6XD&ab_channel=GreenArrow"
                className="episodes-links"
              >
                <img
                  src={`${episode.episodeImg}`} /*cual es la diferencia entre este y el de abajo*/
                  alt={episode.title}
                  className="episode-image"
                />
              </a>
              <div className="episode-content">
                <p className="episode-title">{episode.title}</p>
                <p className="episode-plot">{episode.plot}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChaptersList;
