import "../../reset.css";
import "./App.scss";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Catalog from "../../components/Catalog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Catalog />
    </div>
  );
}

export default App;
