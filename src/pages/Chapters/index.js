import "../../reset.css";
import "./style.scss";
import Navbar from "../../components/Navbar";
import SelectedCover from "../../components/SelectedCover";
import ChaptersList from "../../components/ChaptersList";

function Chapters() {
  return (
    <>
      <Navbar />
      <SelectedCover />
      <ChaptersList />
    </>
  );
}

export default Chapters;
