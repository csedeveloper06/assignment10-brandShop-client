import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import AddProduct from "./components/AddProduct.jsx";
import MyCart from "./components/MyCart.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import AuthProvider from "./components/providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);
