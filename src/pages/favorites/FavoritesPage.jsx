import HotelCard from "@/pages/hotelsList/components/hotelCard";
import useFavorites from "@/pages/favorites/hooks/useFavorites";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg">
        You haven't added any hotels to your favorites yet.
      </p>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {favorites.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </section>
  );
};

export default FavoritesPage;
