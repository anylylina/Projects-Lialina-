import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout";
import HomePage from "../pages/home";
import HotelsListPage from "../pages/hotelsList";
import HotelDetailsPage from "../pages/hotelDetails";
import AboutPage from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "hotels", element: <HotelsListPage /> },
      { path: "hotels/:id", element: <HotelDetailsPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);
