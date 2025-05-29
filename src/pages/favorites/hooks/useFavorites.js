import { useState, useEffect } from "react";

const FAVORITES_KEY = "favoriteHotels";

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
  };

  const addFavorite = (hotel) => {
    const updated = [...favorites, hotel];
    setFavorites(updated);
    saveToLocalStorage(updated);
  };

  const removeFavorite = (hotelId) => {
    const updated = favorites.filter((h) => h.id !== hotelId);
    setFavorites(updated);
    saveToLocalStorage(updated);
  };

  const isFavorite = (hotelId) => favorites.some((h) => h.id === hotelId);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
