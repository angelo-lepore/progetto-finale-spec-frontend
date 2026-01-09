// src/contexts/GlobalContext.jsx
import { createContext, useState, useEffect } from "react";

// Creiamo il contesto globale
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // Stato dei preferiti, inizializzato da localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Sincronizziamo sempre i preferiti su localStorage quando cambiano
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Funzione per controllare se un prodotto è nei preferiti
  const isFavorite = (id) => {
    return favorites.some((p) => p.id === id);
  };

  // Funzione per aggiungere un prodotto ai preferiti
  const addFavorite = (product) => {
    if (!isFavorite(product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  // Funzione per rimuovere un prodotto dai preferiti
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((p) => p.id !== id));
  };

  // Funzione toggle per aggiungere/rimuovere dai preferiti
  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  // Tutti i dati/funzioni che vogliamo esporre
  const contextValue = {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
