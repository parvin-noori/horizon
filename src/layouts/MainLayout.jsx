import { Listbox, ListboxItem } from "@heroui/react";
import {
  MdBarChart,
  MdGridView,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPerson,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import getPro from "/imgs/GetPRO.svg";

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
  return (
    <div className="bg-secondary h-svh">
      <div className="sidebar bg-white fixed h-full flex flex-col py-2">
        <div className="sider-header p-12 border-b border-secondary">
          <span className="text-[#2B3674] uppercase text-2xl">
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
                          ? "text-primary border-e-3 border-primary"
                          : "text-slate-400"
                      }`}
                    >
                      <span
                        className={`text-2xl transition-all duration-200 ${
                          isActive ? "text-primary" : "text-slate-400 group-hover:text-primary"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span
                        className={`transition-all duration-200 ${
                          isActive ? "text-[#2B3674]" : "text-slate-400 group-hover:text-primary"
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
      <Outlet />
    </div>
  );
}
