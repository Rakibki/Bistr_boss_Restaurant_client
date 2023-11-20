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
import AddItem from "../pages/dashbort/AddItem";
import ManageItem from "../pages/dashbort/ManageItem";
import ManageBookings from "../pages/dashbort/ManageBookings";
import Users from "../pages/dashbort/Users";
import MyBooking from "../pages/dashbort/MyBooking";
import Error from "../pages/error/Error";
import AdminRouter from "./AdminRouter";
import UpdateItem from "../pages/dashbort/UpdateItem";
import UserHoem from "../pages/dashbort/UserHoem";
// import Payment from "../pages/dashbort/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
    errorElement: <Error />,
    element: (
      <PrivateRoute>
        {" "}
        <DashbortLayout />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "Mycard",
        element: <MyCard />,
      },
      {
        path: "adminHome",
        element: <AdminRouter> <AdmitHome /> </AdminRouter>,
      },
      {
        path: "addItem",
        element: <AdminRouter> <AddItem /> </AdminRouter>,
      },
      {
        path: "manageItem",
        element: <AdminRouter> <ManageItem /> </AdminRouter>,
      },
      {
        path: "managebookings",
        element: <AdminRouter> <ManageBookings /> </AdminRouter>,
      },
      {
        path: "users",
        element: <AdminRouter> <Users /> </AdminRouter>,
      },
      {
        path: "myBooking",
        element: <MyBooking />,
      },
      {
        path: "userHome",
        element: <UserHoem />,
      },
      // {
      //   path: "payment",
      //   element: <Payment />,
      // },
      {
        path: "updateItem/:id",
        element: <UpdateItem />,
        loader: ({params}) => fetch(`http://localhost:4500/menu/${params.id}`)
      },
    ],
  },
]);

export default router;
