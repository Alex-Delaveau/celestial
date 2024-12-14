import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import SkyMapCarousel from "./pages/SkyMapCarousel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/carousel" element={<SkyMapCarousel />} />
      </Routes>
    </Router>
  );
}

export default App;
