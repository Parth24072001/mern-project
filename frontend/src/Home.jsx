import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/users/components/Dashboard";

const Home = () => {
    return (
        <>
            <div className={"common_parent_container"}>
                <Routes>
                    <Route path="/dashboard" index element={<Dashboard />} />
                </Routes>
            </div>
        </>
    );
};

export default Home;
