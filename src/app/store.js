import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import hotelsReducer from "@/features/hotels/hotelsSlice";
import rootSaga from "@/saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
