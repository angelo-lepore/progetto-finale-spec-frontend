import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center py-5">
          <i className="bi bi-phone-fill display-3 mb-3 text-warning"></i>

          <h1 className="fw-bold mb-3">
            Confronta smartphone in modo semplice
          </h1>

          <p className="lead text-light opacity-75 mb-4">
            Scopri il miglior smartphone per le tue esigenze. Confronta
            specifiche, prezzi e prestazioni in pochi secondi.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/smartphones" className="btn btn-outline-light btn-lg">
              Sfoglia smartphone
            </Link>
            <Link to="/compare" className="btn btn-warning btn-lg">
              Confronta ora
            </Link>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section
        className="py-5"
        style={{ backgroundColor: "rgba(248, 249, 250, 0.9)" }}
      >
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Perché scegliere PhoneCompare?</h2>
            <p className="text-muted">
              Tutto ciò che ti serve per scegliere il tuo prossimo smartphone
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-4 border-0">
                <i className="bi bi-arrow-left-right fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Confronto intelligente</h5>
                <p className="text-muted">
                  Confronta più smartphone fianco a fianco e individua subito le
                  differenze principali.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-4 border-0">
                <i className="bi bi-sliders fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Filtri avanzati</h5>
                <p className="text-muted">
                  Filtra per marca, prezzo, batteria, fotocamera e prestazioni.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-4 border-0">
                <i className="bi bi-star-fill fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Recensioni e valutazioni</h5>
                <p className="text-muted">
                  Consulta opinioni degli utenti e valutazioni degli esperti
                  prima dell’acquisto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">
            Pronto a trovare il tuo prossimo smartphone?
          </h2>
          <p className="text-light opacity-75 mb-4">
            Inizia subito il confronto e fai la scelta giusta.
          </p>
          <Link to="/compare" className="btn btn-warning btn-lg">
            Inizia il confronto
          </Link>
        </div>
      </section>
    </main>
  );
}
