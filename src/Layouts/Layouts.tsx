import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import Footer from "../components/Footer/Footer";

const Layouts = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "dark bg-[#090D1F] text-white"
          : "bg-white text-[#090D1F]"
      } pl-20 pr-20 md:pl-40 md:pr-20 lg:pl-60 lg:pr-60 pt-10 text-Inter`}
    >
      <NavBar
        logo="Your name"
        links={[
          { content: "Blog", path: "/" },
          { content: "Projects", path: "/projects" },
          { content: "About", path: "/about" },
          { content: "Newsletter", path: "/newsletter" },
        ]}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
