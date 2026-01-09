// Import useContext
import { useContext } from "react";
// Import Link
import { Link } from "react-router-dom";
// Import GlobalContext
import { GlobalContext } from "../contexts/GlobalContext";

export default function FavoritesPage() {
  // Prendiamo i preferiti dal contesto globale
  const { favorites } = useContext(GlobalContext);

  // Se non ci sono preferiti, mostriamo un messaggio
  if (!favorites || favorites.length === 0)
    return (
      <main className="text-center py-5">
        <h1>Nessun preferito</h1>
        <Link to="/smartphones" className="btn btn-warning mt-3">
          Scopri smartphone
        </Link>
      </main>
    );

  // Render lista dei preferiti
  return (
    <main className="py-5 bg-light">
      <div className="container">
        {/* Titolo della pagina */}
        <h1 className="text-center mb-4">I tuoi preferiti ★</h1>
        <div className="row g-4">
          {favorites.map((phone) => (
            <div key={phone.id} className="col-md-4">
              {/* Card per ogni smartphone preferito */}
              <div className="card h-100 shadow-sm text-center p-4">
                <h5 className="fw-bold">{phone.title}</h5>
                <p className="text-muted">{phone.brand}</p>
                {/* Link alla pagina di dettaglio */}
                <Link
                  to={`/smartphones/${phone.id}`}
                  className="btn btn-outline-dark"
                >
                  Dettagli
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
