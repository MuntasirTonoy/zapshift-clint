import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";

import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About/About";
import Pricing from "../Pages/Pricing/Pricing";
import Services from "../Pages/Services/Services/Services";
import LoginPage from "../Pages/Authentication/LoginPage";
import RegisterPage from "../Pages/Authentication/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>Error loading page</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
    ],
  },
  {
    path: "/sign-in",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);
export default router;
