import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layouts from "./Layouts/Layouts";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Newsletter from "./pages/Newsletter/Newsletter";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
const routes = createBrowserRouter(
  [
    {
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />,
        },
      ],
    },
  ],
  {
    basename: "/blogs",
  },
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
);
