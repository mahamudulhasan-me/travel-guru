import { createBrowserRouter } from "react-router-dom";
import BannerWithSlider from "../components/Banner/BannerWithSlider";
import Booking from "../components/Booking/Booking";
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
        loader: () => fetch(`http://localhost:5000/place`),
      },
      {
        path: "booking/:id",
        element: <Booking />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
