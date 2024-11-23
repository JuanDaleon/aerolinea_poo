import React from "react";
import images from "../images/images";

const HeaderComponent = () => {
  const fechaActual = new Date();
  const opcionesFecha = { weekday: "long", day: "numeric", month: "long" };
  const fechaFormateada = fechaActual.toLocaleDateString(
    "es-ES",
    opcionesFecha
  );

  return (
    <header className="th-header header-layout1">
      <div className="header-top">
        <div className="container th-container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto d-none d-md-block">
              <div className="header-links">
                <ul>
                  <li className="d-none d-xl-inline-block">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".4rem",
                      }}
                    >
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        pin_drop
                      </span>
                      <span>Colombia Risaralda, Pereira</span>
                    </div>
                  </li>
                  <li className="d-none d-xl-inline-block">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".4rem",
                      }}
                    >
                      <span
                        class="material-symbols-outlined"
                        style={{ fontSize: "15px" }}
                      >
                        schedule
                      </span>
                      <span>{`${fechaFormateada}: 8.00 am - 7.00 pm`}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-auto">
              <div className="header-right">
                <div className="currency-menu">
                  <div
                    className="nice-select form-select"
                    tabIndex="0"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "2rem",
                    }}
                  >
                    <span className="current">Español</span>
                    <span
                      class="material-symbols-outlined"
                      style={{ fontSize: "15px" }}
                    >
                      language
                    </span>
                  </div>
                </div>
                <div className="header-links">
                  <ul>
                    <li className="d-none d-md-inline-block">
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <a href="#">Soporte</a>
                    </li>
                    <li>
                      <a href="#login-form" className="popup-content">
                        Iniciar Sesion / Registrarse
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container th-container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="home-travel.html" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <img src={images.avionLogo} style={{width: '140px'}} alt="Tourm" />
                  </a>
                </div>
              </div>
              <div className="col-auto me-xl-auto">
                <nav className="main-menu d-none d-xl-inline-block">
                  <ul>
                    <li>
                      <a className="active" href="home-travel.html">
                        Reservar
                      </a>
                    </li>

                    <li>
                      <a href="about.html">Ofertas y destinos</a>
                    </li>
                    <li>
                      <a href="#">Destination</a>
                    </li>
                    <li>
                      <a href="#">Tu reserva</a>
                    </li>
                    <li>
                      <a href="#">Informacion y ayuda</a>
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
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <a href="#" className="th-btn style3 th-icon">
                    Comprar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
