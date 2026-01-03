import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SmartphonesPage() {
  // Stato per salvare la lista completa di smartphone ricevuta dal backend
  const [smartphones, setSmartphones] = useState([]);
  // Stato per gestire il caricamento
  const [loading, setLoading] = useState(true);
  // Stato per la ricerca
  const [searchTerm, setSearchTerm] = useState("");

  // Recuperiamo i dati dal backend
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

  // Filtriamo gli smartphone in base al termine di ricerca
  const filteredSmartphones = smartphones.filter((phone) =>
    phone.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <section className="py-5 bg-light">
        <div className="container">
          {/* Barra di ricerca */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Cerca smartphone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="row g-4">
            {/* Ciclo sugli smartphone filtrati */}
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
              <p className="text-center mt-3">Nessuno smartphone trovato</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
