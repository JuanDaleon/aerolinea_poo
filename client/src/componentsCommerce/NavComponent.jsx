import React from "react";
import images from "../images/images";
import { Link, useNavigate } from "react-router-dom";

const NavComponent = () => {
  const navigate = useNavigate();

  const handleReservasClick = (e) => {
    e.preventDefault();

    const usuario = localStorage.getItem("usuario");
    const accessToken = localStorage.getItem("access_token");

    if (usuario && accessToken) {
      navigate('/reservas');
    } else {
      navigate('/');
    }
  };

  return (
    <div
      className="sticky-wrapper"
      style={{ position: "sticky", top: "0", zIndex: "34" }}
    >
      <div className="menu-area">
        <div className="container th-container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <a
                  href="#"
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img
                    src={images.avionLogo}
                    style={{ width: "140px" }}
                    alt="Tourm"
                  />
                </a>
              </div>
            </div>
            <div className="col-auto me-xl-auto">
              <nav className="main-menu d-none d-xl-inline-block">
                <ul>
                  <li>
                    <Link to="/" style={{ cursor: "pointer" }}>
                      Reservar
                    </Link>
                  </li>
                  <li>
                    <a href="#">Ofertas y destinos</a>
                  </li>
                  <li>
                    <a href="#">Destinos</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{ cursor: "pointer" }}
                      onClick={handleReservasClick}
                    >
                      Tus reservas
                    </a>
                  </li>
                  <li>
                    <a href="#">Información y ayuda</a>
                  </li>
                </ul>
              </nav>
              <button
                type="button"
                className="th-menu-toggle d-block d-xl-none"
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;