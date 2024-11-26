import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommercePage from './pages/CommercePage';
import './styles/HeaderComponent.css';
import './styles/grid.css';
import './styles/css2.css';
import './styles/bootstrap.min.css';
import './styles/fontawesome.min.css';
import './styles/magnific-popup.min.css';
import './styles/pipToggle.css';
import './styles/swiper-bundle.min.css';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommercePage />} />
      </Routes>
    </Router>
  );
}

export default App;