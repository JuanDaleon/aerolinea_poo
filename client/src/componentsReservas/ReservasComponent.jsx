import React, { useState, useEffect } from "react";
import axios from "axios";
import images from "../images/images";

const ReservasComponent = () => {
  const [reservas, setReservas] = useState([]);
  const [selectedReserva, setSelectedReserva] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const getImageForAirline = (airlineName) => {
    const imageMap = {
      Avianca: images.Avianca,
      Latam: images.Latam,
    };
    return imageMap[airlineName] || images.default;
  };

  useEffect(() => {
    const fetchReservas = async () => {
      const userId = localStorage.getItem("user_id");
      try {
        const response = await axios.get(
          `http://localhost:8000/api/reservas/usuario/?user_id=${userId}`
        );
        setReservas(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchReservas();
  }, []);

  const cancelarReserva = async (reservaId) => {
    try {
      await axios.delete(`http://localhost:8000/api/reservas/${reservaId}/`);
      setReservas(reservas.filter((reserva) => reserva.id !== reservaId));
      alert("Reserva cancelada con éxito");
    } catch (error) {
      console.error("Error al cancelar la reserva:", error);
      alert("No se pudo cancelar la reserva");
    }
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Por favor selecciona un método de pago.");
      return;
    }

    try {
      await axios.put(
        `http://localhost:8000/api/reservas/${selectedReserva.id}/`,
        {
          estado: "Pagada",
        }
      );

      const updatedReservas = reservas.map((reserva) =>
        reserva.id === selectedReserva.id
          ? { ...reserva, estado: "Pagada" }
          : reserva
      );
      setReservas(updatedReservas);

      alert("Pago realizado con éxito y asiento marcado como ocupado.");
      setShowPaymentModal(false);
      setPaymentMethod("");
      setSelectedReserva(null);
    } catch (error) {
      console.error("Error al realizar el pago:", error);
      alert("No se pudo completar el pago.");
    }
  };

  console.log("reservas", reservas);

  const cantidadAsientosDisponibles = (reserva) => {
    const cantidadAsientosTrue = reserva.vuelo.asientos.filter(
      (asiento) => asiento.disponibilidad === false
    );

    return reserva.vuelo.asientos.length - cantidadAsientosTrue.length;
  };
  return (
    <div
      style={{ display: "flex", padding: "2rem 5rem", flexDirection: "column" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          marginBottom: "1rem",
          padding: "1rem",
        }}
      >
        <h3 style={{ margin: "0" }}>Tus Reservas</h3>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "35px", color: "#000" }}
        >
          flight_takeoff
        </span>
      </div>

      <div style={{ display: "flex" }}>
        {reservas.length > 0 ? (
          <div className="grid-responsive">
            {reservas.map((reserva) => (
              <div
                key={reserva.id}
                style={{
                  width: "100%",
                  padding: "1rem 2rem",
                  borderRadius: "40px",
                  backgroundColor: "#fafafa",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                {reserva.vuelo ? (
                  <>
                    <div
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
                          height: "100%",
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
                                `1970-01-01T${reserva.vuelo.hora_salida}`
                              ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false,
                              })}
                            </h3>
                            <h6 style={{ margin: "0" }}>
                              {reserva.vuelo.ciudad_origen.nombre}
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
                            <a style={{ color: "var(--theme-color)" }}>
                              Directo
                            </a>
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
                            <p style={{ margin: "0" }}>
                              {reserva.vuelo.duracion} h
                            </p>
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
                                `1970-01-01T${reserva.vuelo.hora_llegada}`
                              ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false,
                              })}
                            </h3>
                            <h6 style={{ margin: "0" }}>
                              {reserva.vuelo.ciudad_destino.nombre}
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
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "end",
                              width: "100%",
                            }}
                          >
                            <div style={{ width: "70px" }}>
                              <img
                                src={getImageForAirline(
                                  reserva.vuelo.aerolinea.nombre
                                )}
                                alt={reserva.vuelo.aerolinea.nombre}
                              />
                            </div>
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <p style={{ margin: "0" }}>Costo:</p>
                            <div
                              style={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "end",
                              }}
                            >
                              <h6 style={{ margin: "0" }}>COP</h6>
                              <h3 style={{ margin: "0" }}>
                                {reserva.vuelo.precio.toLocaleString("de-DE")}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div
                          style={{
                            margin: "0",
                            display: "flex",
                            padding: "2px 5px",
                            borderRadius: "10px",
                            background: "var(--theme-color)",
                            width: "fit-content",
                            color: "#fff",
                          }}
                        >
                          {reserva.estado}
                        </div>
                        <div
                          style={{
                            padding: "10px 5px",
                            gap: "1rem",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              alignItems: "baseline",
                            }}
                          >
                            <p
                              style={{
                                textTransform: "capitalize",
                                margin: "0",
                              }}
                            >
                              Pasajero
                            </p>
                            <h6
                              style={{
                                margin: "0",
                                textTransform: "capitalize",
                              }}
                            >
                              {reserva.pasajero.nombre}{" "}
                              {reserva.pasajero.apellido}
                            </h6>

                            <p
                              style={{
                                textTransform: "capitalize",
                                marginTop: "8px",
                                marginBottom: "0",
                              }}
                            >
                              Documento
                            </p>
                            <h6
                              style={{
                                margin: "0",
                                textTransform: "capitalize",
                              }}
                            >
                              {reserva.pasajero.tipo_documento}{" "}
                              {reserva.pasajero.numero_documento}
                            </h6>

                            <p
                              style={{
                                textTransform: "capitalize",
                                marginTop: "8px",
                                marginBottom: "0",
                              }}
                            >
                              Telefono
                            </p>
                            <h6
                              style={{
                                margin: "0",
                                textTransform: "capitalize",
                              }}
                            >
                              {reserva.pasajero.telefono}
                            </h6>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "baseline",
                              flexDirection: "column",
                            }}
                          >
                            <p style={{ margin: "0" }}>Fecha Salida</p>
                            <h6
                              style={{
                                margin: "0",
                                textTransform: "capitalize",
                              }}
                            >
                              {reserva.vuelo.fecha_salida}
                            </h6>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "baseline",
                              flexDirection: "column",
                            }}
                          >
                            <p style={{ margin: "0" }}>Fecha LLegada</p>
                            <h6
                              style={{
                                margin: "0",
                                textTransform: "capitalize",
                              }}
                            >
                              {reserva.vuelo.fecha_llegada}
                            </h6>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "baseline",
                              flexDirection: "column",
                            }}
                          >
                            <p style={{ margin: "0" }}>Fecha Reserva</p>
                            <h6
                              style={{
                                margin: "0",
                                textTransform: "capitalize",
                              }}
                            >
                              {reserva.fecha}
                            </h6>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "baseline",
                              flexDirection: "column",
                            }}
                          >
                            <p style={{ margin: "0" }}>Asientos</p>
                            <h6
                              style={{
                                margin: "0",
                                textTransform: "capitalize",
                              }}
                            >
                              {cantidadAsientosDisponibles(reserva)}/30
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'end', gap: '1rem'}}>
                        <button
                          onClick={() => cancelarReserva(reserva.id)}
                          style={{
                            backgroundColor: "#dc3545",
                            color: "#fff",
                            border: "none",
                            borderRadius: "15px",
                            padding: "10px",
                            cursor: "pointer",
                            width: "90px",
                          }}
                        >
                          Cancelar
                        </button>
                          
                        {reserva.estado === "Pagada" ? (
                          <p></p>
                        ) :
                          <button
                          onClick={() => {
                            setSelectedReserva(reserva);
                            setShowPaymentModal(true);
                          }}
                          style={{
                            backgroundColor: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: "15px",
                            padding: "10px",
                            width: "90px",
                            cursor: "pointer",
                          }}
                        >
                          Pagar
                        </button>
                        }
                        
                      </div>
                    </div>
                  </>
                ) : (
                  <p>Vuelo no disponible</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron reservas.</p>
        )}{" "}
      </div>

      {showPaymentModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "2rem",
            zIndex: "1000",
          }}
        >
          <h4>Selecciona el método de pago</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Tarjeta de Crédito"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Tarjeta de Crédito
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Tarjeta de Débito"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Tarjeta de Débito
            </label>
          </div>

          <div>
            <button
              onClick={handlePayment}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Confirmar Pago
            </button>
            <button
              onClick={() => {
                setShowPaymentModal(false);
                setPaymentMethod("");
                setSelectedReserva(null);
              }}
              style={{
                backgroundColor: "#6c757d",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservasComponent;
