import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelCard from "./components/hotelCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { fetchFilterHotels } from "@/features/hotels/hotelsSlice";

const HotelsListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = searchParams.get("location")?.toLowerCase() || "";
  const priceFromParam = searchParams.get("priceFrom");
  const priceToParam = searchParams.get("priceTo");

  const hotels = useSelector((state) => state.hotels.hotels);
  const loading = useSelector((state) => state.hotels.loading);
  const error = useSelector((state) => state.hotels.error);

  const priceFrom =
    priceFromParam && !isNaN(Number(priceFromParam))
      ? Number(priceFromParam)
      : 0;
  const priceTo =
    priceToParam && !isNaN(Number(priceToParam))
      ? Number(priceToParam)
      : Infinity;

  useEffect(() => {
    dispatch(fetchFilterHotels({ priceFrom, priceTo, location }));
  }, [dispatch, priceFrom, priceTo, location]);

  const handleRetry = () => {
    dispatch(fetchFilterHotels({ priceFrom, priceTo, location }));
  };

  const handleClearFilters = () => {
    setSearchParams("");
  };

  if (loading) {
    return <p className="text-center text-yellow-400">Hotels loading...</p>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <button
          onClick={handleRetry}
          className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!hotels.length) {
    return (
      <div className="text-center text-gray-400">
        <p>No hotels found for this query</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300"
        >
          ⭠ Back to Home
        </button>
      </div>
    );
  }

  return (
    <section>
      {searchParams.toString() !== "" && (
        <button
          className="text-yellow-400 hover:underline self-start mb-6"
          onClick={handleClearFilters}
        >
          Clear filters
        </button>
      )}
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Available hotels
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            {...hotel}
            className={clsx(hotel.booked && "grayscale")}
          />
        ))}
      </div>
    </section>
  );
};

export default HotelsListPage;
