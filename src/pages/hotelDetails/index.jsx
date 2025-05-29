import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "@/services/axiosClient";
import clsx from "clsx";
import { useBooking } from "@/pages/hotelDetails/hooks/useBooking";
import useFavorites from "@/pages/favorites/hooks/useFavorites";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const { bookHotel, bookingInProgress } = useBooking();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axiosClient.get(`/hotels/${id}`);
        setHotel(response.data);
      } catch (error) {
        console.error("Error while fetching hotel", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, []);

  const handleBooking = () => {
    if (hotel && !hotel.booked) {
      bookHotel(hotel.id);
    }
  };

  const toggleFavorite = () => {
    if (!hotel) return;

    if (isFavorite(hotel.id)) {
      removeFavorite(hotel.id);
    } else {
      const { id, image, title, location, price, description } = hotel;
      addFavorite({ id, image, title, location, price, description });
    }
  };

  if (loading) {
    return <p className="text-center text-yellow-400">Loading...</p>;
  }

  if (!hotel) {
    return <p className="text-center text-red-400">Hotel is not found</p>;
  }

  return (
    <section className="flex flex-col gap-6">
      <button
        onClick={() => navigate("/hotels")}
        className="text-yellow-500 text-l hover-underline self-start"
      >
        ⭠ Back to list
      </button>

      <img
        src={hotel.image}
        alt={hotel.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      <div>
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">
          {hotel.title}
        </h2>
        <p className="text-gray-400 mb-2">{hotel.location}</p>

        <div className="flex items-center justify-between mb-4">
          <p className="text-yellow-500 font-semibold text-xl">
            {hotel.price}₴
          </p>
          <button
            onClick={toggleFavorite}
            className="text-2xl"
            title={
              isFavorite(hotel.id)
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            {isFavorite(hotel.id) ? "❤️" : "💛"}
          </button>
        </div>

        <p className="text-gray-800 text-lg leading-relaxed">
          {hotel.description}
        </p>
      </div>

      <button
        onClick={handleBooking}
        disabled={hotel.booked || bookingInProgress}
        className={clsx(
          "mt-4 w-full py-3 text-lg font-bold rounded transition",
          hotel.booked
            ? "bg-gray-700 text-gray-400 !cursor-not-allowed"
            : "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
        )}
      >
        {hotel.booked
          ? "Already booked"
          : bookingInProgress
            ? "Booking..."
            : "Book"}
      </button>
    </section>
  );
};

export default HotelDetailsPage;
