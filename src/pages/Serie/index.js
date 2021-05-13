import "../../reset.css";
import Navbar from "../../components/Navbar";
import Chapters from "../../components/ChaptersList";
import SelectedCover from "../../components/SelectedCover";
import { useParams } from "react-router-dom";

function Series() {
  let { id } = useParams();

  return (
    <>
      <Navbar />
      <SelectedCover id={id} />
      <Chapters id={id} />
    </>
  );
}

export default Series;
