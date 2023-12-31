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
import Brand from "./components/Brand";
import BrandDetails from "./components/BrandDetails";
import ProductDetails from "./components/ProductDetails";
import UpdateProduct from "./components/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader: ()=> fetch('http://localhost:5000/carts')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/brand",
        element: <Brand></Brand>
      },
      {
        path: "/branddetails/:brand",
        element: <BrandDetails></BrandDetails>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: "/productdetails/:_id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: '/updateproduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);
