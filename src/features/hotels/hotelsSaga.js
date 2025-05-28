import { call, put, takeLatest } from "redux-saga/effects";
import apiClient from "@/services/axiosClient";
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  bookHotelRequest,
  bookHotelSuccess,
  bookHotelFailure,
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

export default function* hotelsSaga() {
  yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga);
  yield takeLatest(bookHotelRequest.type, bookHotelSaga);
}
