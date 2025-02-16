import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <MainLayout>
        <Services />
      </MainLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  },
]);

export default router;
