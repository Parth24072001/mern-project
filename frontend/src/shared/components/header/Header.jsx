import { useEffect } from "react";
import clsx from "clsx";
import styles from "../../../assets/css/header.module.css";
import ProfileIcon from "../../../assets/images/icons/user.svg?react";
import QrIcon from "../../../assets/images/icons/qr-code.svg?react";
import NotificationIcon from "../../../assets/images/icons/bell-dot.svg?react";

import MenuIcon from "../../../assets/images/icons/menu.svg?react";

import { useNavigate } from "react-router-dom";

function Header({ setSidebarOpen, width }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (width <= 1023) {
      setSidebarOpen(false);
    }
  }, [width]);

  return (
    <>
      <div className={clsx(styles.header)}>
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <div className="svg_icon">
            <MenuIcon />
          </div>
          {/* <span className="sr-only">Open sidebar</span> */}
        </button>

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end ">
          <div className="flex items-center gap-5 ">
            <button onClick={() => navigate("/")}>
              <QrIcon />
            </button>
            <button onClick={() => navigate("/")}>
              <NotificationIcon />
            </button>
            <button onClick={() => navigate("/profile")}>
              <ProfileIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
