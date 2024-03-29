import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/users/components/Dashboard";
import ChangePassword from "./modules/users/components/ChangePassword";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Sidebar from "./shared/components/sidebar/Sidebar";
import Header from "./shared/components/header/Header";
import Profile from "./modules/users/components/Profile";

import SplitWise from "./modules/group/components/SplitWise";
import ArchiveExpence from "./modules/Archiv/components/ArchiveExpence";
import ArchieveGroup from "./modules/Archiv/components/ArchieveGroup";
import SplitWiseExpence from "./modules/splitWise/components/SplitWiseExpence";
import { UserProvider } from "./shared/provider/user-provider/UserProvider";

const Home = () => {
  const { width } = useWindowSize();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <UserProvider>
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div className="lg:pl-72">
          <Header setSidebarOpen={setSidebarOpen} width={width} />
          <main className="md:py-[35px] py-[22px] px-4 sm:px-6 lg:px-[30px]">
            <Routes>
              <Route path="/dashboard" index element={<Dashboard />} />
              <Route path="/" index element={<Dashboard />} />
              <Route
                path="/change-password"
                index
                element={<ChangePassword />}
              />
              <Route path="/profile" index element={<Profile />} />
              <Route
                path="/archive-expence"
                index
                element={<ArchiveExpence />}
              />
              <Route path="/splitwise" index element={<SplitWise />} />
              <Route path="/archive-group" index element={<ArchieveGroup />} />
              <Route
                path="/splitwise/:groupid"
                index
                element={<SplitWiseExpence />}
              />
            </Routes>
          </main>
        </div>
      </UserProvider>
    </>
  );
};

export default Home;
