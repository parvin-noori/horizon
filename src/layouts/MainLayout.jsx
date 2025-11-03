import { Listbox, ListboxItem } from "@heroui/react";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoLockClosed } from "react-icons/io5";
import { MdHome, MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import getPro from "/imgs/GetPRO.svg";

const sidebarItems = [
  {
    name: "dashboard",
    key: "dashboard",
    to: "dashboard",
    icon: <MdHome />,
  },
  {
    name: "NFT marketplace",
    key: "nft-marketplace",
    to: "marketPlace",
    icon: <MdOutlineShoppingCart />,
  },
  {
    name: "tables",
    key: "tables",
    to: "tables",
    icon: <BsFillBarChartFill />,
  },
  { name: "kanban", key: "kanban", to: "kanban", icon: <HiMiniSquares2X2 /> },
  { name: "profile", key: "profile", to: "profile", icon: <FaUserLarge /> },
  { name: "sign in", key: "sign-in", to: "sign-in", icon: <IoLockClosed /> },
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
          {/* <Listbox
            aria-label="Listbox Variants"
            color={"primary"}
            variant={"light"}
          > */}
          <ul>
            {sidebarItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.to}
                  className={(isActive) => {
                    `text-xl ${isActive ? "text-primary" : "text-gray-700"}`;
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            </ul>
          {/* </Listbox> */}
        </div>
        <div className="sider-footer mt-0">
          <img src={getPro} alt="Get Pro" className="mx-auto mt-20" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
