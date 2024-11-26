import React, { useState, useEffect } from "react";
import images from "../images/images";
import BarraAdicionalRightComponent from "../reusable/BarraAdicionalRightComponent";
import LoginPage from "../componentsLogin/LoginPage"

const HeaderComponent = () => {
  const [isBarraAdicionalRightVisible, setIsBarraAdicionalRightVisible] = useState(false);

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
                        className="material-symbols-outlined"
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
                        className="material-symbols-outlined"
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
                      className="material-symbols-outlined"
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
                      <a style={{cursor: 'pointer'}} className="popup-content" onClick={() => setIsBarraAdicionalRightVisible(true)}>
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

      {isBarraAdicionalRightVisible && (
        <BarraAdicionalRightComponent onClose={() => setIsBarraAdicionalRightVisible(false)}>
          <LoginPage />
        </BarraAdicionalRightComponent>
        
      )}
    </header>
  );
};

export default HeaderComponent;
