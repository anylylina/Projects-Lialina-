import { call, put, takeLatest } from "redux-saga/effects";
import apiClient from "@/services/axiosClient";
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  bookHotelRequest,
  bookHotelSuccess,
  bookHotelFailure,
  fetchFilterHotels,
} from "./hotelsSlice";

function* fetchHotelsSaga() {
  console.log("fetchHotelSaga called");
  try {
    const response = yield call(apiClient.get, "/hotels");
    yield put(fetchHotelsSuccess(response.data));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message || "Failed to fetch hotels"));
  }
}

function* bookHotelSaga(action) {
  try {
    const { hotelId } = action.payload;
    const response = yield call(apiClient.patch, `/hotels/${hotelId}`, {
      booked: true,
    });
    yield put(bookHotelSuccess(response.data));
  } catch (error) {
    yield put(bookHotelFailure(error.message || "Failed to book hotel"));
  }
}

function* fetchFilterHotelsSaga(action) {
  try {
    const { priceFrom, priceTo, location } = action.payload;
    const response = yield call(apiClient.get, "/hotels");

    const filteredHotels = response.data.filter((hotel) => {
      const matchLocation = !!location
        ? hotel.locations.find(
            (l) => l.toLowerCase() === location.toLowerCase(),
          )
        : response.data;
      const matchPrice = hotel.price >= priceFrom && hotel.price <= priceTo;
      return matchLocation && matchPrice;
    });

    yield put(fetchHotelsSuccess(filteredHotels));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message || "Failed to fetch hotels"));
  }
}

export default function* hotelsSaga() {
  yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga);
  yield takeLatest(fetchFilterHotels.type, fetchFilterHotelsSaga);
  yield takeLatest(bookHotelRequest.type, bookHotelSaga);
}
