import clsx from "clsx";
import ProfileIcon from "../../../assets/images/icons/Home.svg?react";
import SplitIcon from "../../../assets/images/icons/split.svg?react";
import SettingsIcon from "../../../assets/images/icons/settings.svg?react";
import LogoutIcon from "../../../assets/images/icons/log-out.svg?react";

import CloseIcon from "../../../assets/images/icons/cross-23.svg?react";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeItemInCookie } from "../../helpers/utils";
function Sidebar({ setSidebarOpen, sidebarOpen }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: ProfileIcon,
      activeMenu: "/",
    },

    {
      name: "Splitwise",
      href: "/splitwise",
      icon: SplitIcon,
      activeMenu: "/splitwise",
    },

    {
      name: "Setting",
      href: "/setting",
      icon: SettingsIcon,
      activeMenu: "/setting",
    },
  ];

  const onClickLogout = () => {
    removeItemInCookie("accessToken");
    removeItemInCookie("refreshToken");
    navigate("/login");
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 "
          onClose={() => setSidebarOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1 bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5 svg_icon"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </Transition.Child>
                <div className="sidebarContent">
                  <nav className="flex flex-1 flex-col">
                    <ul
                      role="list"
                      className="flex flex-1 flex-col gap-y-7 mt-[63px]"
                    >
                      <li>
                        <ul role="list" className="-mx-2 space-y-1 ">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className={clsx("sidebarList", {
                                  "bg-slate-200": item.activeMenu === pathname,
                                })}
                              >
                                <item.icon aria-hidden="true" />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                    <button
                      onClick={() => onClickLogout()}
                      className={clsx("sidebarList")}
                    >
                      <LogoutIcon />
                      Logout
                    </button>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col ">
        <div className="sidebarContent border-r border-gray-200 bg-white dark:bg-dark  ">
          <nav className="flex flex-1 flex-col mt-[63px]">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1 ">
                  {navigation.map((item) => (
                    <li key={item.name} className={clsx({})}>
                      <Link
                        to={item.href}
                        className={clsx("sidebarList", {
                          "bg-slate-200": item.activeMenu === pathname,
                        })}
                      >
                        <item.icon aria-hidden="true" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <button
              onClick={() => onClickLogout()}
              className={clsx("sidebarList")}
            >
              <LogoutIcon />
              Logout
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
