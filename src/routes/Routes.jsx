import {
    createBrowserRouter,
 } from "react-router-dom";
import MainlLayout from "../layouts/MainlLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetsCards from "../components/GadgetsCards";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlLayout></MainlLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
              {
                path: '/category/:category',
                element: <GadgetsCards></GadgetsCards>,
                loader: () => fetch('../products.json')
              }
            ]
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
        },
      ]
    },
  ]);

export default router;  