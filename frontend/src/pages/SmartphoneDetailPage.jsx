import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SmartphoneDetailPage() {
  // Prendiamo l'id dello smartphone dall'URL
  const { id } = useParams();

  // Stato per salvare il prodotto selezionato
  const [phone, setPhone] = useState(null);

  // Stato per gestire il caricamento e eventuali errori
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect eseguito al montaggio del componente o quando cambia l'id
  useEffect(() => {
    // Fetch dei dati del singolo smartphone dal backend
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json()) // Convertiamo la risposta in JSON
      .then((data) => {
        console.log("Dati ricevuti:", data);

        // Controlliamo se la risposta è valida e contiene il prodotto
        if (!data.success || !data.product) {
          setError(true); // Se non ci sono dati, impostiamo l'errore
        } else {
          setPhone(data.product); // Salviamo il prodotto nello stato
        }

        setLoading(false); // Caricamento completato
      })
      .catch((err) => {
        // Se il fetch fallisce, impostiamo l'errore e terminiamo il loading
        console.error("Errore fetch:", err);
        setError(true);
        setLoading(false);
      });
  }, [id]); // Rieffettua il fetch solo se l'id cambia

  // Mostriamo un messaggio di caricamento mentre attendiamo i dati
  if (loading) return <p className="text-center mt-5">Caricamento...</p>;

  // Se c'è un errore o il prodotto non esiste, mostriamo un messaggio
  if (error || !phone) {
    return (
      <main className="py-5 text-center">
        <h1>Smartphone non trovato</h1>
        <p>L’ID fornito non corrisponde a nessuno smartphone.</p>
        <Link to="/smartphones" className="btn btn-warning">
          Torna alla lista
        </Link>
      </main>
    );
  }

  // Render principale della pagina dettaglio
  return (
    <main>
      <section className="py-5 bg-light">
        <div className="container text-center">
          {/* Titolo dello smartphone */}
          <h1 className="fw-bold mb-3">{phone.title}</h1>
          {/* Immagine */}
          {phone.imageUrl && (
            <img
              src={phone.imageUrl}
              alt={phone.title}
              className="img-fluid mb-4"
              style={{ maxWidth: "300px" }}
            />
          )}
          {/* Specifiche tecniche */}
          <h2 className="fw-bold mb-4">Specifiche tecniche</h2>
          <ul className="list-group list-group-flush text-start">
            {/* Brand */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Brand
              <span className="fw-bold">{phone.brand}</span>
            </li>
            {/* Prezzo */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Prezzo
              <span className="fw-bold">{phone.price}€</span>
            </li>
            {/* Sistema operativo */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Sistema operativo
              <span className="fw-bold">{phone.os}</span>
            </li>
            {/* Dimensioni dello schermo */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Schermo
              <span className="fw-bold">{phone.screenSize}"</span>
            </li>
            {/* Batteria */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Batteria
              <span className="fw-bold">{phone.batteryMah} mAh</span>
            </li>
            {/* Fotocamera posteriore */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Fotocamera posteriore
              <span className="fw-bold">{phone.rearCameraMP} MP</span>
            </li>
            {/* Fotocamera frontale */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Fotocamera frontale
              <span className="fw-bold">{phone.frontCameraMP} MP</span>
            </li>
            {/* RAM */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              RAM
              <span className="fw-bold">{phone.ramGB} GB</span>
            </li>
            {/* Memoria interna */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Memoria interna
              <span className="fw-bold">{phone.storageGB} GB</span>
            </li>
            {/* Supporto 5G */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              5G
              <span className="fw-bold">{phone.has5G ? "Sì" : "No"}</span>
            </li>
          </ul>
          {/* Bottone per confrontare con altri smartphone */}
          <div className="text-center mt-4">
            <Link
              to="/compare"
              state={{ products: [phone] }}
              className="btn btn-warning btn-lg"
            >
              Confronta con altri smartphone
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
