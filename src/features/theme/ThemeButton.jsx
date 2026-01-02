import { useEffect } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./ThemeSlice";
import { Button } from "@heroui/react";

export default function ThemeButton({className}) {
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
     <Button isOnlyIcon variant="light" radius="none" className={`!min-w-auto shrink-0 p-0 !aspect-square ${className}`}
      onPress={() =>
        dispatch(changeTheme(theme === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? <IoMdMoon className="text-lg" /> : <MdWbSunny />}
    </Button>
  );
}
