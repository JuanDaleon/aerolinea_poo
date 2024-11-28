import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Select from 'react-select';
import ResultadosComponent from "../componentsResultados/Resultado";

import BarraAdicionalLeftComponent from "../reusable/BarraAdicionalLeftComponent";

const DestinoComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [origen, setOrigen] = useState(null);
  const [destino, setDestino] = useState(null);
  const [pasajeros, setPasajeros] = useState(1);
  const [vuelos, setVuelos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [isBarraAdicionalLeftVisible, setIsBarraAdicionalLeftVisible] = useState(false);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      padding: '0px 0px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

  useEffect(() => {
    const fetchCiudades = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/aeropuertos/");
        const ciudadesOptions = response.data.map(ciudad => ({
          value: ciudad.nombre,
          label: `${ciudad.ciudad.nombre}, ${ciudad.ciudad.pais.nombre}`
        }));
        setCiudades(ciudadesOptions);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCiudades();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formattedDate = startDate.toISOString().split('T')[0];
    try {
      const response = await axios.get("http://localhost:8000/api/vuelos/", {
        params: {
          origen: origen ? origen.value : "",
          destino: destino ? destino.value : "",
          fecha_salida: formattedDate,
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
                <div className="search-input" style={{ width: "200px" }}>
                  <label>Origen</label>
                  <Select
                    value={origen}
                    onChange={setOrigen}
                    options={ciudades}
                    placeholder="Seleccione"
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span className="material-symbols-outlined">flight_land</span>
                </div>
                <div className="search-input" style={{ width: "200px" }}>
                  <label>Destino</label>
                  <Select
                    value={destino}
                    onChange={setDestino}
                    options={ciudades}
                    placeholder="Seleccione"
                    styles={customStyles}
                  />
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
                <button className="th-btn" type="submit" onClick={() => setIsBarraAdicionalLeftVisible(true)}>
                  <img src="assets/img/icon/search.svg" alt="" />
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </form>
        {isBarraAdicionalLeftVisible && (
        <BarraAdicionalLeftComponent onClose={() => setIsBarraAdicionalLeftVisible(false)} initialWidth="70%">
          <ResultadosComponent vuelos={vuelos} />
        </BarraAdicionalLeftComponent>
        
      )}
      </div>
    </div>
  );
};

export default DestinoComponent;