import {
  Avatar,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";
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
import { useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import MyButton from "../components/ui/MyButtons";
import LanguageButton from "../features/language/LanguageButton";
import ThemeButton from "../features/theme/ThemeButton";
import { useGetData } from "../hooks/useGetData";
import { useItemTranslation } from "../hooks/useTranslation";
import { RootState } from "../types/store";
import {
  SidebarItems,
  UserInfo,
  UserInfoResponse,
} from "./types/mainLayout.types";

import getPro from "/imgs/GetPRO.svg";
import darkGetPro from "/imgs/darkGetPRO.svg";

export interface UseGetDataResult {
  data?: { userInfo?: UserInfo };
  isLoading: boolean;
  error?: Error | null;
}

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();
  const { t } = useTranslation();
  const language = useSelector((state: RootState) => state.lang.lang);
  const title = t(`pages.${lastSegment}.title`);
  const { translateItem } = useItemTranslation("pages.profile");

  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetData<UserInfoResponse>();
  const userInfo = data?.userInfo;
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { name, email, jobPosition, followers, following, avatar } =
    userInfo ?? {};

  const sidebarItems: SidebarItems[] = [
    {
      name: t("mainLayout.sidebar.dashboard"),
      key: "dashboard",
      to: "/dashboard",
      icon: <MdHome />,
    },
    {
      name: t("mainLayout.sidebar.NFTMarket"),
      key: "nft-marketplace",
      to: "/marketPlace",
      icon: <MdOutlineShoppingCart />,
    },
    {
      name: t("mainLayout.sidebar.tables"),
      key: "tables",
      to: "/tables",
      icon: <MdBarChart />,
    },
    {
      name: t("mainLayout.sidebar.kanban"),
      key: "kanban",
      to: "/kanban",
      icon: <MdGridView />,
    },
    {
      name: t("mainLayout.sidebar.profile"),
      key: "profile",
      to: "/profile",
      icon: <MdPerson />,
    },
    {
      name: t("mainLayout.sidebar.singOut"),
      key: "sign-out",
      icon: <MdLock />,
      action: "logout",
    },
  ];

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    setCollapsed(false);
    navigate("/");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
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

  const sidebarPosition = document.body.dataset.sidebarPosition;

  return (
    <div className="bg-secondary  dark:bg-background  h-full flex lg:items-stretch relative ">
      {/* sidebar */}
      <div
        className={`bg-black/70 fixed  inset-0 z-20 ${
          collapsed ? "block" : "hidden"
        }`}
      ></div>
      <div
        ref={sidebarRef}
        className={`sidebar bg-white dark:bg-secondary  h-full fixed lg:sticky lg:translate-x-0 z-30 lg:z-0  top-0 flex flex-col py-2 min-w-[250px] ${
          collapsed
            ? "translate-x-0"
            : sidebarPosition === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        }   transition-transform duration-300 `}
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
                {item.action === "logout" ? (
                  <NavLink to="#" onClick={handleLogout}>
                    <div className=" capitalize flex items-center gap-x-5 py-1.5 px-5 text-slate-400 dark:text-white hover:text-primary">
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </NavLink>
                ) : (
                  <NavLink to={item.to!} onClick={() => setCollapsed(false)}>
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
                )}
              </ListboxItem>
            ))}
            {/* </ul> */}
          </Listbox>
        </div>
        <div className="sider-footer mt-0">
          <img
            src={theme === "light" ? getPro : darkGetPro}
            alt="Get Pro"
            className="mx-auto"
          />
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
              <BreadcrumbItem>{t("mainLayout.pages")}</BreadcrumbItem>
              <BreadcrumbItem>
                {language === "fa" ? title : lastSegment}
              </BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex items-center gap-3">
              <MyButton
                isOnlyIcon
                onPress={() => setCollapsed(!collapsed)}
                variant="light"
                className="bg-secondary lg:hidden size-9 aspect-square min-w-auto shrink-0 p-0 text-primary dark:text-white dark:bg-white/5"
              >
                {collapsed ? <MdMenuOpen /> : <RiMenuFold4Line />}
              </MyButton>
              <span className=" text-2xl font-semibold dark:text-white">
                {language === "fa" ? title : lastSegment}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2 bg-white dark:bg-secondary rounded-full p-2">
            <Input
              isClearable
              startContent={<FiSearch />}
              placeholder={t("header.search")}
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
            {/* <Button
              isOnlyIcon
              variant="light"
              radius="full"
              className="!min-w-auto shrink-0 p-0 !aspect-square"
            >
              <LuBell className="text-lg" />
            </Button> */}
            <ThemeButton
              className={"!min-w-auto shrink-0 p-0 !aspect-square rounded-full"}
            />
            <LanguageButton
              className={"!min-w-auto shrink-0 p-0 !aspect-square rounded-full"}
            />
            {/* <Button
              isOnlyIcon
              variant="light"
              radius="full"
              className="!min-w-auto shrink-0 p-0 !aspect-square"
            >
              <AiOutlineExclamationCircle className="text-lg" />
            </Button> */}
            <Popover placement="bottom">
              <PopoverTrigger>
                <Avatar
                  showFallback
                  src={avatar}
                  className="!shrink-0 cursor-pointer"
                />
              </PopoverTrigger>

              <PopoverContent className="p-0">
                <Card
                  className="max-w-[300px] border-none bg-white dark:bg-secondary shadow-lg"
                  shadow="none"
                >
                  <CardHeader className="justify-between">
                    <div className="flex gap-3">
                      <Avatar isBordered radius="full" size="md" src={avatar} />

                      <div className="flex flex-col items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                          {isLoading ? "loading..." : name}
                        </h4>
                        <h5 className="text-small tracking-tight text-default-500">
                          {isLoading ? "loading..." : email}
                        </h5>
                      </div>
                    </div>
                    <Button
                      className="bg-transparent text-foreground border-default-200"
                      color="primary"
                      radius="full"
                      size="sm"
                    ></Button>
                  </CardHeader>
                  <CardBody className="px-3 py-0">
                    <p className="text-small pl-px text-default-500 text-start">
                      {isLoading
                        ? "loading..."
                        : String(translateItem(jobPosition))}
                      <span aria-label="confetti" role="img">
                        {" "}
                        🎉
                      </span>
                    </p>
                  </CardBody>
                  <CardFooter className="gap-3">
                    <div className="flex gap-1">
                      <p className="font-semibold text-default-600 text-small">
                        {isLoading ? "loading..." : following}
                      </p>
                      <p className=" text-default-500 text-small">
                        {t("pages.profile.followings")}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <p className="font-semibold text-default-600 text-small">
                        {isLoading ? "loading..." : followers}
                      </p>
                      <p className="text-default-500 text-small">
                        {" "}
                        {t("pages.profile.followers")}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </PopoverContent>
            </Popover>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
