import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "../../../assets/css/header.module.css";
import ProfileIcon from "../../../assets/images/icons/user.svg?react";
import QrIcon from "../../../assets/images/icons/qr-code.svg?react";
import NotificationIcon from "../../../assets/images/icons/bell-dot.svg?react";

import MenuIcon from "../../../assets/images/icons/menu.svg?react";

import { useNavigate } from "react-router-dom";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import { useUser } from "../../provider/user-provider/UserProvider";
import useNotification from "../../../modules/users/hooks/useNotification";
import useReadNotiFicationAll from "../../../modules/users/hooks/useReadNotiFicationAll";

function Header({ setSidebarOpen, width }) {
  const navigate = useNavigate();

  const { mutate: NotiFication } = useNotification();
  const { mutate: NotiFicationReadAll } = useReadNotiFicationAll();

  const user = useUser();
  console.log(user?.user?.notification);
  const [notifiOpen, setNotifiOpen] = useState(false);

  useEffect(() => {
    if (width <= 1023) {
      setSidebarOpen(false);
    }
  }, [width]);

  return (
    <div className={clsx(styles.header, "dark:bg-dark")}>
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden "
        onClick={() => setSidebarOpen(true)}
      >
        <div className="svg_icon">
          <MenuIcon />
        </div>
        {/* <span className="sr-only">Open sidebar</span> */}
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end ">
        <div className="flex items-center gap-5 ">
          <DarkModeSwitch />
          <button onClick={() => navigate("/")}>
            <QrIcon />
          </button>
          <div className=" relative flex justify-center items-center">
            <button
              onClick={() => setNotifiOpen(!notifiOpen)}
              className={clsx({
                notification: !user?.user?.allNotificationsRead,
              })}
            >
              <NotificationIcon />
            </button>

            {notifiOpen && (
              <div className=" absolute top-[30px] right-0 max-h-[400px] w-[300px] overflow-scroll bg-white border">
                {user?.user?.notification &&
                  user?.user?.notification.map((noti, index) => {
                    return (
                      <div
                        className=" relative flex justify-between items-center p-2 border-b-2"
                        key={index}
                      >
                        <p className=" text-wrap text-sm text-left  pl-3 ">
                          {noti?.message}
                        </p>
                        {noti?.read === false && (
                          <span className=" absolute top-[15px] left-[6px] rounded-full w-2 h-2 bg-green-400"></span>
                        )}
                        {noti?.read === false && (
                          <button
                            className="text-sm cursor-pointer text-blue-600 border p-1"
                            onClick={() => NotiFication(noti?._id)}
                          >
                            Read
                          </button>
                        )}
                      </div>
                    );
                  })}
                {!user?.user?.allNotificationsRead && (
                  <button
                    className="text-sm cursor-pointer text-blue-600 border p-1"
                    onClick={() => NotiFicationReadAll()}
                  >
                    Read All
                  </button>
                )}
              </div>
            )}
          </div>
          <button onClick={() => navigate("/profile")}>
            <ProfileIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
