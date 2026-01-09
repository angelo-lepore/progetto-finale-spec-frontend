// Import useEffect e useState
import { useEffect, useState } from "react";
// Import Link
import { Link } from "react-router-dom";

export default function SmartphonesPage() {
  // Stato per salvare la lista completa di smartphone ricevuta dal backend
  const [smartphones, setSmartphones] = useState([]);
  // Stato per gestire il caricamento
  const [loading, setLoading] = useState(true);
  // Stato per la ricerca
  const [searchTerm, setSearchTerm] = useState("");
  // Stato per l'ordinamento alfabetico
  const [sortOrder, setSortOrder] = useState("asc"); // asc | desc

  // useEffect per recuperare i dati dal backend
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setSmartphones(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
        setLoading(false);
      });
  }, []);

  // Mostriamo messaggio di caricamento finché i dati non arrivano
  if (loading) {
    return <p className="text-center mt-5">Caricamento...</p>;
  }

  // Filtriamo e ordiniamo gli smartphone in base alla ricerca e all'ordinamento
  const filteredSmartphones = smartphones
    // Filter per cercare
    .filter((phone) =>
      phone.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // Sort per ordinare
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <main>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            {/* Barra di ricerca */}
            <div className="col-md-10 mb-2">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Cerca smartphone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Select ordinamento */}
            <div className="col-md-2 mb-2">
              <select
                className="form-select yellow-focus"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">A → Z</option>
                <option value="desc">Z → A</option>
              </select>
            </div>
          </div>

          {/* Lista smartphone */}
          <div className="row g-4">
            {filteredSmartphones.length > 0 ? (
              filteredSmartphones.map((phone) => (
                <div key={phone.id} className="col-md-4">
                  <div className="card h-100 shadow-sm text-center p-4 border-0">
                    {/* Titolo */}
                    <h5 className="fw-bold">{phone.title}</h5>
                    {/* Categoria */}
                    <p className="text-muted">{phone.category}</p>
                    {/* Link alla pagina di dettaglio */}
                    <Link
                      to={`/smartphones/${phone.id}`}
                      className="btn btn-outline-dark mt-3"
                    >
                      Dettagli
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              // Messaggio se non ci sono smartphone che corrispondono alla ricerca
              <p className="text-center mt-3">Nessuno smartphone trovato</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
