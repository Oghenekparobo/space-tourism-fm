import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Crew, Destination, Home, Technology } from "./pages";
import Layout from "./pages/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "destination", element: <Destination /> },
        { path: "crew", element: <Crew /> },
        { path: "technology", element: <Technology /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
