// Import di Bootstrap (CSS, JS e icone)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import gli strumenti di React Router per gestire le pagine dell’app
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import del Global Context per la gestione dello stato globale
import { GlobalProvider } from "./contexts/GlobalContext.jsx";

// Import del layout e tutte le pagine del sito
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SmartphonesPage from "./pages/SmartphonesPage.jsx";
import SmartphoneDetailPage from "./pages/SmartphoneDetailPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

// Componente principale dell'app
function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            {/* Layout di default che racchiude le varie pagine */}
            <Route element={<DefaultLayout />}>
              {/* Rotte principali */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/smartphones" element={<SmartphonesPage />} />
              <Route
                path="/smartphones/:id"
                element={<SmartphoneDetailPage />}
              />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

// Export del componente App per usarlo in main.jsx
export default App;
