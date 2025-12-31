// Import di Bootstrap (CSS, JS e icone)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import dei componenti di routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import del layout e delle pagine
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SmartphonesPage from "./pages/SmartphonesPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import SmartphoneDetailPage from "./pages/SmartphoneDetailPage.jsx";

// Componente principale dell'app
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout di default che racchiude le varie pagine */}
          <Route element={<DefaultLayout />}>
            {/* Rotte principali */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/smartphones" element={<SmartphonesPage />} />
            <Route path="/smartphones/:id" element={<SmartphoneDetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
