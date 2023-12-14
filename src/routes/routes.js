import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const routes = [
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <br></br>
        <Footer />
      </div>
    ),
    path: "/",
    children: [
      {
        element: "",
        index: true,
      },
      {
        element: "",
        path: "woman",
      },
      {
        element: "",
        path: "child",
      },
    ],
  },
];

export default routes;
