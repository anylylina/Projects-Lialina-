import { Toaster } from "react-hot-toast";
import { router } from "@/router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    </>
  );
};

export default App;
