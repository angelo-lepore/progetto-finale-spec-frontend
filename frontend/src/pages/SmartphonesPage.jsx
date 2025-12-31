import { Link } from "react-router-dom";

export default function SmartphonesPage() {
  // Lista di smartphone - per esempio
  const smartphones = [
    {
      id: 1,
      name: "iPhone 15",
      brand: "Apple",
      price: "999€",
      image: "/images/iphone15.png",
    },
    {
      id: 2,
      name: "Galaxy S24",
      brand: "Samsung",
      price: "899€",
      image: "/images/galaxys24.jpg",
    },
    {
      id: 3,
      name: "Pixel 9",
      brand: "Google",
      price: "799€",
      image: "/images/pixel9.jpg",
    },
  ];

  return (
    <main>
      {/* Lista smartphone */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {smartphones.map((phone) => (
              <div key={phone.id} className="col-md-4">
                <div className="card h-100 shadow-sm text-center p-4 border-0">
                  {/* Immagine dello smartphone */}
                  <div className="mb-3" style={{ height: "200px" }}>
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="img-fluid h-100"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <h5 className="fw-bold">{phone.name}</h5>
                  <p className="text-muted">{phone.brand}</p>
                  <p className="fw-bold">{phone.price}</p>
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
      </section>
    </main>
  );
}
