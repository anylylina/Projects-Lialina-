import { useEffect, useState } from "react";
import axiosClient from "@/services/axiosClient";

const useRecommendedHotels = (limit = 3) => {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axiosClient.get("/hotels");
        const shuffled = res.data.sort(() => 0.5 - Math.random());
        setRecommended(shuffled.slice(0, limit));
      } catch (error) {
        console.error("Failed to fetch hotels", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, [limit]);

  return { recommended, loading };
};

export default useRecommendedHotels;
