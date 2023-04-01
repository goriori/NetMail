import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/auth/signin/Signin";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    Component: Signin,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
