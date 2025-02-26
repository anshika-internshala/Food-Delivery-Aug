import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search.jsx";
import Offers from "./components/Offers.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import { lazy, Suspense } from "react";

// Lazy Loading
const Cart = lazy(() => import("./components/Cart.jsx"));
const RestaurantDetails = lazy(() =>
  import("./components/RestaurantDetails.jsx")
);

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
        path: "cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id", // dynamic routing
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantDetails />,
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

// Lazy loading
// On Demand loading
