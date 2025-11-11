import {
  Avatar,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Input,
  Listbox,
  ListboxItem,
} from "@heroui/react";
import { FiSearch } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import {
  MdBarChart,
  MdGridView,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPerson,
} from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { NavLink, Outlet, useLocation } from "react-router";
import getPro from "/imgs/GetPRO.svg";
import user from "/imgs/user.png";
import ThemeButton from "../features/theme/ThemeButton";

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
  { name: "sign in", key: "sign-in", to: "/sign-in", icon: <MdLock /> },
];

export default function MainLayout() {
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();
  return (
    <div className="bg-secondary dark:bg-background h-full flex lg:items-stretch relative">
      {/* sidebar */}
      <div className="sidebar bg-white dark:bg-secondary  h-full fixed lg:sticky lg:translate-x-0 -translate-x-full  top-0 flex flex-col py-2 min-w-[250px]">
        <div className="sider-header p-12 border-b border-secondary dark:border-slate-800">
          <span className="text-[#2B3674] dark:text-white uppercase text-2xl">
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
                <NavLink to={item.to}>
                  {({ isActive }) => (
                    <div
                      className={`flex items-center gap-x-5 py-1.5 px-5 group ${
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
                            ? "text-[#2B3674] dark:text-white"
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
      <div className="p-4 flex flex-col gap-y-4 w-full">
        <header className="flex lg:flex-row flex-col gap-3 lg:justify-between lg:items-center w-full lg:py-12 py-1">
          <div className="flex flex-col gap-y-2 capitalize text-[#2B3674]">
            <Breadcrumbs
              itemClasses={{
                separator: "px-2",
              }}
              separator="/"
            >
              <BreadcrumbItem>pages</BreadcrumbItem>
              <BreadcrumbItem>{lastSegment}</BreadcrumbItem>
            </Breadcrumbs>
            <span className=" text-2xl font-semibold dark:text-white">{lastSegment}</span>
          </div>
          <div className="flex items-center gap-x-2 bg-white dark:bg-secondary rounded-full p-2">
            <Input
              startContent={<FiSearch />}
              color="white dark:bg-background"
              placeholder="search"
              size="md"
              type="email"
              radius="full"
            />
            <Button isOnlyIcon variant="light" radius="full" className="!min-w-auto shrink-0 p-0 !aspect-square">
              <LuBell className="text-lg"/>
            </Button>
            <ThemeButton className={'!min-w-auto shrink-0 p-0 !aspect-square'}/>
            <Button isOnlyIcon variant="light" radius="full" className="!min-w-auto shrink-0 p-0 !aspect-square">
              <AiOutlineExclamationCircle className="text-lg"/>
            </Button>
            <Avatar showFallback src={user} name="user" className="!shrink-0"/>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
