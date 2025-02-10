import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search.jsx";
import Offers from "./components/Offers.jsx";
import RestaurantDetails from "./components/RestaurantDetails.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "/restaurant/:id", // dynamic routing
        element: <RestaurantDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
