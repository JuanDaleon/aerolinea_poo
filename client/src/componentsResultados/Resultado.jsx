import React from "react";

const ResultadosComponent = ({ vuelos }) => {
  console.log(vuelos);

  return (
    <div className="results">
      {vuelos.length > 0 ? (
          <h3 style={{marginBottom: '1rem'}}>Vuelos Disponibles</h3>
      ) : (
          <h3 style={{marginBottom: '1rem'}}>No hay vuelos disponibles</h3>
      )}
      {vuelos.length > 0 ? (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
          {vuelos.map((vuelo) => (
            <div
              style={{
                width: "100%",
                padding: ".9rem 2rem",
                borderRadius: "40px",
                backgroundColor: "#fafafa",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                key={vuelo.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: '100%'
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "70%",
                      position: "relative",
                      paddingRight: "2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        width: "20%",
                      }}
                    >
                      <h3 style={{ margin: "0" }}>
                        {new Date(
                          `1970-01-01T${vuelo.hora_salida}`
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </h3>
                      <h6 style={{ margin: "0" }}>
                        {vuelo.ciudad_origen.nombre}
                      </h6>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "relative",
                        width: "70%",
                      }}
                    >
                      <a style={{ color: "var(--theme-color)" }}>Directo</a>
                      <span
                        className="material-symbols-outlined"
                        style={{
                          transform: "rotate(90deg)",
                          color: "#000",
                          fontSize: "19px",
                          zIndex: "3",
                          padding: "9px 0px",
                          background: "#fafafa",
                        }}
                      >
                        flight
                      </span>
                      <p style={{ margin: "0" }}>{vuelo.duracion} h</p>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          height: "1px",
                          backgroundColor: "#ccc5",
                          transform: "translateY(-50%)",
                          width: "100%",
                          zIndex: "2",
                        }}
                      ></div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        justifyContent: "center",
                        width: "20%",
                      }}
                    >
                      <h3 style={{ margin: "0" }}>
                        {new Date(
                          `1970-01-01T${vuelo.hora_llegada}`
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </h3>
                      <h6 style={{ margin: "0" }}>
                        {vuelo.ciudad_destino.nombre}
                      </h6>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "30%",
                      padding: "1rem",
                      flexDirection: "column",
                      borderLeft: "1px solid #ccc",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p style={{ margin: "0" }}>Desde:</p>
                      <div
                        style={{
                          display: "flex",
                          gap: "7px",
                          alignItems: "end",
                        }}
                      >
                        <h6 style={{ margin: "0" }}>COP</h6>
                        <h3 style={{ margin: "0" }}>
                          {vuelo.precio.toLocaleString("de-DE")}
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                      }}
                    >
                      <button
                        className="th-btn"
                        style={{ padding: "2px 10px", borderRadius: "20px", gap: '0'}}
                      >
                        Reservar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fafafa",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span className="material-symbols-outlined">
              airplanemode_inactive
            </span>
            <h6>No hay vuelos disponibles este día</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultadosComponent;
