import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/users/components/Dashboard";
import ChangePassword from "./modules/users/components/ChangePassword";

const Home = () => {
    return (
        <>
            <div className={"common_parent_container"}>
                <Routes>
                    <Route path="/dashboard" index element={<Dashboard />} />
                    <Route path="/" index element={<Dashboard />} />
                    <Route
                        path="/change-password"
                        index
                        element={<ChangePassword />}
                    />
                </Routes>
            </div>
        </>
    );
};

export default Home;
