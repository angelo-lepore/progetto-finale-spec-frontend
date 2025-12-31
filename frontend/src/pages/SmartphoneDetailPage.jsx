import { useParams, Link } from "react-router-dom";

// Dati fittizi degli smartphone - per esempio
const smartphonesData = [
  {
    id: "1",
    name: "iPhone 15",
    brand: "Apple",
    price: "999€",
    battery: "3279 mAh",
    camera: "48 MP",
    display: '6.1"',
    description: "L'ultimo iPhone con prestazioni al top.",
  },
  {
    id: "2",
    name: "Galaxy S24",
    brand: "Samsung",
    price: "899€",
    battery: "4000 mAh",
    camera: "50 MP",
    display: '6.2"',
    description: "Smartphone potente con display brillante.",
  },
  {
    id: "3",
    name: "Pixel 9",
    brand: "Google",
    price: "799€",
    battery: "4100 mAh",
    camera: "50 MP",
    display: '6.3"',
    description: "Fotocamera eccellente e software pulito.",
  },
];

export default function SmartphoneDetailPage() {
  const { id } = useParams();
  const phone = smartphonesData.find((p) => p.id === id);

  if (!phone) {
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

  return (
    <main>
      {/* Dettagli */}
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="fw-bold mb-3">{phone.name}</h1>
          <h2 className="fw-bold mb-4">Specifiche tecniche</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Batteria
              <span className="fw-bold">{phone.battery}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Fotocamera
              <span className="fw-bold">{phone.camera}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Display
              <span className="fw-bold">{phone.display}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Prezzo
              <span className="fw-bold">{phone.price}</span>
            </li>
          </ul>
          <div className="text-center mt-4">
            <Link to="/compare" className="btn btn-warning btn-lg">
              Confronta con altri smartphone
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
