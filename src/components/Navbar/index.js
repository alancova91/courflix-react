import { Link } from "react-router-dom";
import "./style.scss";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  let open;

  if (isOpen) {
    open = (
      <div className="hidden-menu">
        <Link className="link-hidden-menu" to="/">
          Inicio
        </Link>
        <p className="link-hidden-menu" href="#">
          Series
        </p>
        <p className="link-hidden-menu" href="#">
          Peliculas
        </p>
        <p className="link-hidden-menu" id="no-separation" href="#">
          Agregados Recientemente
        </p>
        <p className="link-hidden-menu" href="#">
          Mi lista
        </p>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="nav-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {open}
      </div>
      <Link to="/" className="logo-wrapper">
        <img src="/images/courflix-icon.png" className="logo" alt="courflix" />
      </Link>
      <nav className="links-wrapper">
        <Link to="/" className="link">
          Inicio
        </Link>
        <a href="/" className="link">
          Series
        </a>
        <a href="/" className="link">
          Peliculas
        </a>
        <a href="/" className="link">
          Agregados Recientemente
        </a>
        <a href="/" className="link">
          Mi lista
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
