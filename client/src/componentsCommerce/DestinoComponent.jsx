import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DestinoComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="booking-sec">
      <div className="container">
        <form
          action="mail.php"
          method="POST"
          className="booking-form ajax-contact"
        >
          <div className="input-wrap">
            <div className="row align-items-center justify-content-between">
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span class="material-symbols-outlined">flight_takeoff</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Origen</label>
                  <div className="nice-select form-select" tabIndex="0">
                    <span className="current">Bogota (BOG)</span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span class="material-symbols-outlined">flight_land</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Destino</label>
                  <div className="nice-select" tabIndex="0">
                    <span className="current">Seleccione</span>
                    <ul className="list">
                      <li
                        data-value="Adventure"
                        className="option selected disabled"
                      >
                        Seleccione
                      </li>
                      <li data-value="Beach" className="option">
                        Beach
                      </li>
                      <li data-value="Group Tour" className="option">
                        Group Tour
                      </li>
                      <li data-value="Couple Tour" className="option">
                        Couple Tour
                      </li>
                      <li data-value="Family Tour" className="option">
                        Family Tour
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span class="material-symbols-outlined">calendar_month</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Ida</label>
                  <div className="nice-select form-select" tabIndex="0">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="form-control date-picker"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span class="material-symbols-outlined">calendar_month</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Vuelta</label>
                  <div className="nice-select form-select" tabIndex="0">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="form-control date-picker"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <span class="material-symbols-outlined">person</span>
                </div>
                <div className="search-input" style={{ width: "120px" }}>
                  <label>Pasajeros</label>
                  <select
                    name="subject"
                    id="category"
                    className="form-select nice-select"
                    style={{ display: "none" }}
                  >
                    <option
                      value="Normal"
                      selected="selected"
                      disabled="disabled"
                    >
                      Luxury
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <div className="nice-select form-select" tabIndex="0">
                    <span className="current">+ 1</span>
                  </div>
                </div>
              </div>
              <div className="form-btn col-md-12 col-lg-auto">
                <button className="th-btn">
                  <img src="assets/img/icon/search.svg" alt="" />
                  Buscar
                </button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DestinoComponent;
