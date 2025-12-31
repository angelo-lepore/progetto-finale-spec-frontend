import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-light py-5">
        <div className="container text-center py-5">
          <i className="bi bi-info-circle-fill display-3 mb-3 text-warning"></i>
          <h1 className="fw-bold mb-3">Chi siamo</h1>
          <p className="lead text-muted mb-4">
            PhoneCompare nasce per aiutarti a scegliere il miglior smartphone
            confrontando specifiche, prezzi e prestazioni in modo semplice e
            veloce.
          </p>
          <Link to="/smartphones" className="btn btn-warning btn-lg">
            Scopri i nostri smartphone
          </Link>
        </div>
      </section>

      {/* CONTATTI E INFORMAZIONI */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Contattaci</h2>
            <p className="text-muted">
              Hai domande o suggerimenti? Siamo qui per aiutarti!
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-4 border-0">
                <i className="bi bi-envelope-fill fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Email</h5>
                <p className="text-muted">support@phonecompare.com</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-4 border-0">
                <i className="bi bi-telephone-fill fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Telefono</h5>
                <p className="text-muted">+39 123 456 7890</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-4 border-0">
                <i className="bi bi-geo-alt-fill fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Indirizzo</h5>
                <p className="text-muted">Via Roma 100, 00100 Roma, Italia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Seguici sui social</h2>
          <p className="text-muted mb-4">
            Rimani aggiornato su novità, recensioni e consigli per il tuo
            smartphone.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              className="btn btn-outline-primary btn-lg"
            >
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="btn btn-outline-info btn-lg"
            >
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="btn btn-outline-danger btn-lg"
            >
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ISCRIVITI ALLA NEWSLETTER */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Resta aggiornato!</h2>
          <p className="text-light opacity-75 mb-4">
            Iscriviti alla nostra newsletter per ricevere consigli e novità
            sugli smartphone.
          </p>
          <form className="d-flex justify-content-center gap-2 flex-wrap">
            <input
              type="email"
              placeholder="La tua email"
              className="form-control form-control-lg"
              style={{ maxWidth: "300px" }}
            />
            <button type="submit" className="btn btn-warning btn-lg">
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
