import { createBrowserRouter } from "react-router-dom";
import BannerWithSlider from "../components/Banner/BannerWithSlider";
import Booking from "../components/Booking/Booking";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Login from "../layouts/Login";
import Main from "../layouts/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <BannerWithSlider />,
        loader: () =>
          fetch(
            `https://travel-guru-server-mahamudulhasan-me.vercel.app/place`
          ),
      },
      {
        path: "booking/:id",
        element: <Booking />,
        loader: ({ params }) =>
          fetch(
            `https://travel-guru-server-mahamudulhasan-me.vercel.app/${params.id}`
          ),
      },
    ],
  },
  {
    path: "user",
    element: <Login />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
]);

export default router;
