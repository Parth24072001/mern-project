import "./assets/css/styles.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./modules/users/components/Signup";
import Login from "./modules/users/components/Login";
import withAuthentication from "./shared/components/auth/withAuthentication";
import withoutAuthentication from "./shared/components/auth/withoutAuthentication";
// import { useEffect } from "react";
// import { getItemFromCookie, setItemInCookie } from "./shared/helpers/utils";
// import { ACCESSTOKEN, REFRESHTOKEN } from "./shared/helpers/constant";
// import { rereshToken } from "./shared/api";

function App() {
    const UnAuthenticated = () => <Outlet />;
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const refreshToken = getItemFromCookie(REFRESHTOKEN);

    //         if (refreshToken) {
    //             try {
    //                 const data = await rereshToken(refreshToken);

    //                 setItemInCookie(ACCESSTOKEN, `${data?.data?.accessToken}`);
    //                 setItemInCookie(
    //                     REFRESHTOKEN,
    //                     `${data?.data?.refreshToken}`
    //                 );
    //             } catch (error) {
    //                 // Handle errors if needed
    //                 console.error("Error refreshing token:", error);
    //             }
    //         }
    //     };

    //     getItemFromCookie(REFRESHTOKEN) && fetchData(); // Call the async function
    // }, []); // Ensure the dependency array is empty if you want it to run only once

    return (
        <>
            <Routes>
                <Route path="/*" element={withAuthentication(Home)}>
                    <Route index element={<Navigate to={"/"} />} />
                </Route>
                <Route path="" element={withoutAuthentication(UnAuthenticated)}>
                    <Route path="login" index element={<Login />} />
                    <Route path="signup" index element={<Signup />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
