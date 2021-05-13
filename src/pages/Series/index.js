import "../../reset.css";
import "./style.scss";
import Navbar from "../../components/Navbar";
import Recommendations from "../../components/Recommendations";
import SelectedCover from "../../components/SelectedCover";

function Series() {
  return (
    <>
      <Navbar />
      <SelectedCover />
      <Recommendations />
    </>
  );
}

export default Series;
