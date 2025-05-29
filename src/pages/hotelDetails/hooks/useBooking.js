import { useDispatch, useSelector } from "react-redux";
import { bookHotelRequest } from "@/features/hotels/hotelsSlice";

export const useBooking = () => {
  const dispatch = useDispatch();
  const bookingLoading = useSelector((state) => state.hotels.bookingLoading);

  const bookHotel = (hotelId) => {
    dispatch(bookHotelRequest({ hotelId }));
  };

  return { bookHotel, bookingInProgress: bookingLoading };
};
