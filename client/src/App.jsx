import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommercePage from "./pages/CommercePage";
import "./styles/HeaderComponent.css";
import "./styles/grid.css";
import "./styles/css2.css";
import "./styles/bootstrap.min.css";
import "./styles/fontawesome.min.css";
import "./styles/magnific-popup.min.css";
import "./styles/pipToggle.css";
import "./styles/swiper-bundle.min.css";
import "./styles/style.css";
import HeaderComponent from "./componentsCommerce/HeaderComponent";
import NavComponent from "./componentsCommerce/NavComponent";
import ReservasComponent from "./componentsReservas/ReservasComponent";

function App() {
  return (
    <main>
      <Router>
        <HeaderComponent />
        <NavComponent />
        <Routes>
          <Route path="/" element={<CommercePage />} />
          <Route path="/reservas" element={<ReservasComponent />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
