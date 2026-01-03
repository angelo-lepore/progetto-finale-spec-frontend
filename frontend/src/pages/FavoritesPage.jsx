import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../utils/favorites";

export default function FavoritesPage() {
  // Stato per salvare gli smartphone preferiti
  const [favorites, setFavorites] = useState([]);
  // Stato per gestire il caricamento
  const [loading, setLoading] = useState(true);

  // useEffect per recuperare i preferiti
  useEffect(() => {
    const ids = getFavorites();
    if (ids.length === 0) {
      setFavorites([]);
      setLoading(false);
      return;
    }
    // Recuperiamo tutti i prodotti e filtriamo
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) => ids.includes(p.id));
        setFavorites(filtered);
        setLoading(false);
      });
  }, []);

  // Mostriamo messaggio di caricamento finché i dati non arrivano
  if (loading) return <p className="text-center mt-5">Caricamento...</p>;

  // Se non ci sono preferiti, mostriamo un messaggio
  if (favorites.length === 0) {
    return (
      <main className="text-center py-5">
        <h1>Nessun preferito </h1>
        <Link to="/smartphones" className="btn btn-warning mt-3">
          Scopri smartphone
        </Link>
      </main>
    );
  }

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
