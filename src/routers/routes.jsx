import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";
import ContactUs from "../pages/contact/ContactUs";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import DashbortLayout from "../layout/dashbortLayout/DashbortLayout";
import MyCard from "../pages/dashbort/MyCard";
import AdmitHome from "../pages/dashbort/AdmitHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            {" "}
            <ContactUs />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "dashbort",
    element: <DashbortLayout />,
    children: [
      {
        path: "Mycard",
        element: <MyCard />,
      },
      {
        path: "adminHome",
        element: <AdmitHome />,
      },
    ],
  },
]);

export default router;
