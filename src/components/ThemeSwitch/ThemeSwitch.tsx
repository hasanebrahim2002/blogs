import { FiMoon } from "react-icons/fi";
import { LuSunDim } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  return (
    <button className="cursor-pointer" onClick={() => dispatch(toggleTheme())}>
      <div className="relative w-96 h-40 p-15 bg-black dark:bg-white rounded-full transition-all duration-300">
        <LuSunDim
          className="
        absolute left-15 top-8 
        text-white text-2xl
        dark:hidden
      "
        />
        <FiMoon
          className="
        absolute right-15 top-8
        text-black text-2xl
        hidden dark:block
      "
        />
        <div
          className="
        absolute top-8 right-15
        w-24 h-24
        bg-white rounded-full
        transition-all duration-300

        dark:left-15
        dark:right-auto
        dark:bg-black
      "
        />
      </div>
    </button>
  );
};

export default ThemeSwitch;
