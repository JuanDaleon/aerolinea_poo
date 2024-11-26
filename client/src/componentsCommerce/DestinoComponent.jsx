import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const DestinoComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [pasajeros, setPasajeros] = useState(1);
  const [vuelos, setVuelos] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    // Obtener las ciudades disponibles para los campos de origen y destino
    const fetchCiudades = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/aeropuertos/");
        setCiudades(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCiudades();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/api/vuelos/", {
        params: {
          origen: origen,
          destino: destino,
          fecha_salida: startDate.toISOString().split('T')[0],
          pasajeros: pasajeros,
        },
      });
      setVuelos(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  return (
    <div className="booking-sec">
      <div className="container">
        <form onSubmit={handleSearch} className="booking-form">
          <div className="input-wrap">
            <div className="row align-items-center justify-content-between">
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span className="material-symbols-outlined">flight_takeoff</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Origen</label>
                  <select
                    value={origen}
                    onChange={(e) => setOrigen(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Seleccione</option>
                    {ciudades.map((ciudad) => (
                      <option key={ciudad.id} value={ciudad.nombre}>
                        {ciudad.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span className="material-symbols-outlined">flight_land</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Destino</label>
                  <select
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Seleccione</option>
                    {ciudades.map((ciudad) => (
                      <option key={ciudad.id} value={ciudad.nombre}>
                        {ciudad.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Ida</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="form-control date-picker"
                  />
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Pasajeros</label>
                  <input
                    type="number"
                    value={pasajeros}
                    onChange={(e) => setPasajeros(e.target.value)}
                    className="form-control"
                    min="1"
                  />
                </div>
              </div>
              <div className="form-btn col-md-12 col-lg-auto">
                <button className="th-btn" type="submit">
                  <img src="assets/img/icon/search.svg" alt="" />
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="results">
          {vuelos.length > 0 ? (
            <ul>
              {vuelos.map((vuelo) => (
                <li key={vuelo.id}>
                  {vuelo.origen} &gt; {vuelo.destino} ({vuelo.fecha_salida})
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron vuelos.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinoComponent;