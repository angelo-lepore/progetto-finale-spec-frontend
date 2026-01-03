// Recupera i preferiti
export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

// Aggiunge/rimuove un preferito
export const toggleFavorite = (id) => {
  const favorites = getFavorites();
  const updated = favorites.includes(id)
    ? favorites.filter((fav) => fav !== id)
    : [...favorites, id];

  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
};

// Controlla se è nei preferiti
export const isFavorite = (id) => {
  return getFavorites().includes(id);
};
