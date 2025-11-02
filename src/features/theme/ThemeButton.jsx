import { useEffect } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./ThemeSlice";

export default function ThemeButton() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      type="button"
      onClick={() =>
        dispatch(changeTheme(theme === "light" ? "dark" : "light"))
      }
      className="absolute hover:bg-white/30 transition-color duration-300 bottom-0 cursor-pointer end-5 text-white size-12 bg-white/20 dark:bg-background/20 backdrop-blur-md grid place-content-center rounded-full"
    >
      {theme === "light" ? <IoMdMoon className="text-lg" /> : <MdWbSunny />}
    </button>
  );
}
