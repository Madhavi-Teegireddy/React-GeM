import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Props/Home";
import Restaurant from "../AccessDataDirectly/Restaurant"

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/data",
    element: <Restaurant/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AllRoutes} />
);

export default AllRoutes;