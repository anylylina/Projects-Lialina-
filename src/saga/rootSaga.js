import { all } from "redux-saga/effects";
import hotelsSaga from "@/features/hotels/hotelsSaga";

export default function* rootSaga() {
  yield all([hotelsSaga()]);
}
