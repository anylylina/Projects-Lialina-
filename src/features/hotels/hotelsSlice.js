import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    loading: false,
    error: null,
    bookingLoading: false,
    bookingError: null,
  },
  reducers: {
    fetchHotelsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHotelsSuccess(state, action) {
      state.hotels = action.payload;
      state.loading = false;
    },
    fetchHotelsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    bookHotelRequest(state, action) {
      state.bookingLoading = true;
      state.bookingError = null;
    },
    bookHotelSuccess(state, action) {
      const bookedHotel = action.payload;
      const index = state.hotels.findIndex((h) => h.id === bookedHotel.id);
      if (index !== -1) {
        state.hotels[index] = bookedHotel;
      }
      state.bookingLoading = false;
    },
    bookHotelFailure(state, action) {
      state.bookingLoading = false;
      state.bookingError = action.payload;
    },
  },
});

export const {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  bookHotelRequest,
  bookHotelSuccess,
  bookHotelFailure,
} = hotelsSlice.actions;

export default hotelsSlice.reducer;
