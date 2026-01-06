import { useEffect } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../components/ui/MyButtons";
import { RootState } from "../../types/store";
import { changeTheme } from "./ThemeSlice";

export default function ThemeButton({ className }: { className: string }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
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
    <MyButton
      isOnlyIcon
      variant="light"
      radius="none"
      className={`!min-w-auto shrink-0 p-0 !aspect-square ${className}`}
      onPress={() =>
        dispatch(changeTheme(theme === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? <IoMdMoon className="text-lg" /> : <MdWbSunny />}
    </MyButton>
  );
}
