import "../../reset.css";
import "../Home/App.scss";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Catalog from "../../components/Catalog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Catalog />
    </div>
  );
}

export default App;
