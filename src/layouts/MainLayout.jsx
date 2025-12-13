import {
  Avatar,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Input,
  Listbox,
  ListboxItem,
} from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import {
  MdBarChart,
  MdGridView,
  MdHome,
  MdLock,
  MdMenuOpen,
  MdOutlineShoppingCart,
  MdPerson,
} from "react-icons/md";
import { RiMenuFold4Line } from "react-icons/ri";
import { NavLink, Outlet, useLocation } from "react-router";
import ThemeButton from "../features/theme/ThemeButton";
import getPro from "/imgs/GetPRO.svg";
import user from "/imgs/user.png";

const sidebarItems = [
  {
    name: "dashboard",
    key: "dashboard",
    to: "/dashboard",
    icon: <MdHome />,
  },
  {
    name: "NFT marketplace",
    key: "nft-marketplace",
    to: "/marketPlace",
    icon: <MdOutlineShoppingCart />,
  },
  {
    name: "tables",
    key: "tables",
    to: "/tables",
    icon: <MdBarChart />,
  },
  { name: "kanban", key: "kanban", to: "/kanban", icon: <MdGridView /> },
  { name: "profile", key: "profile", to: "/profile", icon: <MdPerson /> },
  { name: "sign in", key: "sign-in", to: "/", icon: <MdLock /> },
];

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setCollapsed(false);
      }
    }
    if (collapsed) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [collapsed]);
  return (
    <div className="bg-secondary dark:bg-background  h-full flex lg:items-stretch relative ">
      {/* sidebar */}
      <div
        className={`bg-black/70 fixed  inset-0 z-20 ${
          collapsed ? "block" : "hidden"
        }`}
      ></div>
      <div
        ref={sidebarRef}
        className={`sidebar bg-white dark:bg-secondary  h-full fixed lg:sticky lg:translate-x-0 z-30 lg:z-0  top-0 flex flex-col py-2 min-w-[250px] ${
          collapsed ? "translate-x-0" : "-translate-x-full"
        }  lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="sider-header p-12 border-b border-secondary dark:border-slate-800">
          <span className=" uppercase text-2xl text-[#2B3674] dark:text-white">
            <b>horizon </b>
            free
          </span>
        </div>
        <div className="sider-body capitalize grow overflow-y-auto">
          <Listbox
            aria-label="Listbox Variants"
            color={"primary"}
            variant={"light"}
            className="px-0 py-4"
          >
            {/* <ul> */}
            {sidebarItems.map((item) => (
              <ListboxItem
                key={item.key}
                textValue={item.name}
                className="px-0"
              >
                <NavLink to={item.to} onClick={() => setCollapsed(false)}>
                  {({ isActive }) => (
                    <div
                      className={`flex items-center gap-x-5 py-1.5 px-5 group outline-0 ${
                        isActive
                          ? "text-primary dark:text-white border-e-3 border-primary"
                          : "text-slate-400 dark:text-white"
                      }`}
                    >
                      <span
                        className={`text-2xl transition-all duration-200 ${
                          isActive
                            ? "text-primary dark:text-white"
                            : "text-slate-400 dark:text-white group-hover:text-primary"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span
                        className={`transition-all duration-200 ${
                          isActive
                            ? ""
                            : "text-slate-400 dark:text-white group-hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  )}
                </NavLink>
              </ListboxItem>
            ))}
            {/* </ul> */}
          </Listbox>
        </div>
        <div className="sider-footer mt-0">
          <img src={getPro} alt="Get Pro" className="mx-auto" />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-y-4 w-full overflow-x-hidden text-[#2B3674] dark:text-white">
        <header className="flex lg:flex-row flex-col gap-3 lg:justify-between lg:items-center w-full lg:py-12 py-1">
          <div className="flex flex-col gap-y-2 capitalize">
            <Breadcrumbs
              itemClasses={{
                separator: "px-2",
              }}
              separator="/"
            >
              <BreadcrumbItem>pages</BreadcrumbItem>
              <BreadcrumbItem>{lastSegment}</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-3">
              <Button
                isOnlyIcon
                onPress={() => setCollapsed(!collapsed)}
                variant="light"
                className="bg-secondary lg:hidden size-9 aspect-square min-w-auto shrink-0 p-0 text-primary dark:text-white dark:bg-white/5"
              >
                {collapsed ? <MdMenuOpen /> : <RiMenuFold4Line />}
              </Button>
              <span className=" text-2xl font-semibold dark:text-white">
                {lastSegment}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2 bg-white dark:bg-secondary rounded-full p-2">
            <Input
              isClearable
              startContent={<FiSearch />}
              color="white"
              placeholder="search"
              size="md"
              type="text"
              radius="full"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-sm",
                  "bg-secondary",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-secondary/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "cursor-text!",
                ],
              }}
            />
            <Button
              isOnlyIcon
              variant="light"
              radius="full"
              className="!min-w-auto shrink-0 p-0 !aspect-square"
            >
              <LuBell className="text-lg" />
            </Button>
            <ThemeButton
              className={"!min-w-auto shrink-0 p-0 !aspect-square"}
            />
            <Button
              isOnlyIcon
              variant="light"
              radius="full"
              className="!min-w-auto shrink-0 p-0 !aspect-square"
            >
              <AiOutlineExclamationCircle className="text-lg" />
            </Button>
            <Avatar showFallback src={user} name="user" className="!shrink-0" />
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
