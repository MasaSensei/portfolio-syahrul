import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Pages from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.MainPage />,
  },
  {
    path: "/project",
    element: <Pages.ProjectPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
