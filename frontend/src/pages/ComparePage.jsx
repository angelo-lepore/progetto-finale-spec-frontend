import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ComparePage() {
  // Recupera lo stato passato dalla pagina precedente (dettaglio/lista)
  const location = useLocation();
  const { products: initialProducts } = location.state || {};

  // Stato per tutti gli smartphone disponibili
  const [allSmartphones, setAllSmartphones] = useState([]);
  // Stato per il primo smartphone selezionato (pre-selezionato se passato nello state)
  const [phone1, setPhone1] = useState(initialProducts?.[0] || null);
  // Stato per il secondo smartphone selezionato
  const [phone2, setPhone2] = useState(null);

  // Carica tutti gli smartphone dal backend una volta all'inizio
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setAllSmartphones(data)) // salva tutti i prodotti nello stato
      .catch((err) => console.error("Errore fetch:", err));
  }, []);

  // Funzione per gestire la selezione di uno smartphone da un dropdown
  const handleSelect = (id, setter) => {
    if (!id) {
      // Se viene selezionata un'opzione vuota, resetta lo stato
      setter(null);
      return;
    }

    // Fetch del singolo prodotto dal backend
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.product) {
          setter(data.product); // Aggiorna lo stato con il prodotto selezionato
        }
      })
      .catch((err) => console.error("Errore fetch prodotto:", err));
  };

  return (
    <main>
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center mb-5">Confronto smartphone</h1>

          {/* Dropdown per selezionare i due smartphone */}
          <div className="row mb-4">
            {/* Primo smartphone */}
            <div className="col-md-6 mb-2">
              <select
                className="form-select yellow-focus"
                value={phone1?.id || ""} // mostra il prodotto selezionato se presente
                onChange={(e) =>
                  handleSelect(Number(e.target.value), setPhone1)
                }
              >
                <option value="">Seleziona il primo smartphone</option>
                {allSmartphones
                  .filter((p) => !phone2 || p.id !== phone2.id) // esclude lo smartphone già selezionato come secondo
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
              </select>
            </div>

            {/* Secondo smartphone */}
            <div className="col-md-6 mb-2">
              <select
                className="form-select yellow-focus"
                value={phone2?.id || ""} // mostra il prodotto selezionato se presente
                onChange={(e) =>
                  handleSelect(Number(e.target.value), setPhone2)
                }
              >
                <option value="">Seleziona il secondo smartphone</option>
                {allSmartphones
                  .filter((p) => !phone1 || p.id !== phone1.id) // esclude lo smartphone già selezionato come primo
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Confronto visuale solo se entrambi i telefoni sono selezionati */}
          {phone1 && phone2 && (
            <div className="row g-4">
              {[phone1, phone2].map((phone) => (
                <div key={phone.id} className="col-md-6">
                  <div className="card h-100 shadow-sm p-4 text-center d-flex flex-column">
                    {/* Titolo smartphone */}
                    <h3 className="fw-bold">{phone.title}</h3>

                    {/* Immagine smartphone */}
                    {phone.imageUrl && (
                      <img
                        src={phone.imageUrl}
                        alt={phone.title}
                        className="img-fluid mx-auto mb-3"
                        style={{ height: "200px", objectFit: "contain" }}
                      />
                    )}

                    {/* Lista delle specifiche */}
                    <ul className="list-group list-group-flush text-start flex-grow-1">
                      <li className="list-group-item d-flex justify-content-between">
                        Brand <span className="fw-bold">{phone.brand}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        Prezzo <span className="fw-bold">{phone.price}€</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        OS <span className="fw-bold">{phone.os}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        Schermo{" "}
                        <span className="fw-bold">{phone.screenSize}"</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        Batteria{" "}
                        <span className="fw-bold">{phone.batteryMah} mAh</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        Fotocamera posteriore{" "}
                        <span className="fw-bold">{phone.rearCameraMP} MP</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        Fotocamera frontale{" "}
                        <span className="fw-bold">
                          {phone.frontCameraMP} MP
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        RAM <span className="fw-bold">{phone.ramGB} GB</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        Memoria interna{" "}
                        <span className="fw-bold">{phone.storageGB} GB</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        5G{" "}
                        <span className="fw-bold">
                          {phone.has5G ? "Sì" : "No"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pulsante per tornare alla lista */}
          <div className="text-center mt-4">
            <Link to="/smartphones" className="btn btn-dark btn-lg">
              Torna alla lista
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
