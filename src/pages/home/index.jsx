import { useNavigate } from "react-router-dom";
import useRecommendedHotels from "@/pages/home/hooks/useRecommendedHotels";
import { Filters } from "./components/Filters";

const HomePage = () => {
  const navigate = useNavigate();
  const { recommended, loading } = useRecommendedHotels();

  const hendleHotelRedirect = (id) => {
    navigate(`/hotels/${id}`);
  };

  return (
    <section className="max-w-4xl mx-auto px-8 py-2 space-y-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Your next adventure starts here...
      </h2>
      <Filters />

      <div className="mt-10">
        <h3 className="text-xl font-semibold text-yellow-500 mb-4">
          Recommended for you...
        </h3>

        {loading ? (
          <p className="text-white">Loading recommended hotels...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {recommended.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-gray-800 text-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
                onClick={() => hendleHotelRedirect(hotel.id)}
              >
                {hotel.image && (
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                )}
                <h4 className="text-lg font-bold">{hotel.title}</h4>
                <p className="text-gray-300">{hotel.locations.join(",")}</p>
                <p className="text-yellow-300 font-semibold mt-1">
                  {hotel.price}₴
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
