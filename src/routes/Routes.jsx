import {
    createBrowserRouter,
    Navigate,
 } from "react-router-dom";
import MainlLayout from "../layouts/MainlLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetsCards from "../components/GadgetsCards";
import ProductsDetails from "../pages/ProductsDetails";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Errorpage from "../components/Errorpage";
import AboutUs from "../pages/AboutUs";



 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlLayout></MainlLayout>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
              {
                path: '/',
                element: <GadgetsCards></GadgetsCards>,
                loader: () => fetch('../products.json')
              },
              {
                path: '/category/:category',
                element: <GadgetsCards></GadgetsCards>,
                loader: () => fetch('../products.json')
              }
            ]
        },
        {
          path: '/product/:id',
          element: <ProductsDetails></ProductsDetails>,
          loader: () => fetch('../products.json')
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>,
            children: [
              {
                path: '/dashboard',
                element: <Navigate to='/dashboard/cart' replace></Navigate>
              },
              {
                path: '/dashboard/cart',
                element: <Cart></Cart>,
                loader: () => fetch('../products.json')
              },
              {
                path: '/dashboard/whislist',
                element: <Wishlist></Wishlist>,
                loader: () => fetch('../products.json')
              }
            ]
          },
          {
            path: '/about',
            element: <AboutUs></AboutUs>
          }
      ]
    },
  ]);

export default router;  