export type Product = {
  title: string;            // Nome del modello
  category: string;         // "smartphone"
  brand: string;            // Apple, Samsung, Xiaomi, ecc.
  price: number;            // Prezzo in euro
  releaseYear: number;      // Anno di uscita

  storageGB: number;        // Memoria interna
  ramGB: number;            // RAM
  screenSize: number;       // Pollici
  refreshRateHz: number;    // 60, 90, 120...

  batteryMah: number;       // Capacità batteria
  fastChargingW: number;    // Watt di ricarica rapida

  rearCameraMP: number;     // Fotocamera principale
  frontCameraMP: number;    // Fotocamera selfie

  os: "iOS" | "Android";    // Sistema operativo
  has5G: boolean;           // Supporto 5G

  imageUrl?: string; // immagine smartphone
};
