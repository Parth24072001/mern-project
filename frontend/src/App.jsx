import "./assets/css/styles.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./modules/users/components/Signup";
import Login from "./modules/users/components/Login";
import withAuthentication from "./shared/components/auth/withAuthentication";
import withoutAuthentication from "./shared/components/auth/withoutAuthentication";
import { useEffect } from "react";
import { getItemFromCookie, setItemInCookie } from "./shared/helpers/utils";
import { ACCESSTOKEN, REFRESHTOKEN } from "./shared/helpers/constant";
import { rereshToken } from "./shared/api";
import { ThemeProvider } from "./shared/components/TheamProvider";

function App() {
  const storedItem = localStorage.getItem("Mode");

  useEffect(() => {
    if (localStorage.getItem("Mode")) {
      document.body.classList.add(storedItem);
    } else {
      document.body.classList.remove("light");
    }
  }, []);

  const UnAuthenticated = () => <Outlet />;
  useEffect(() => {
    const fetchData = async () => {
      const refreshToken = getItemFromCookie(REFRESHTOKEN);
      if (refreshToken) {
        try {
          const data = await rereshToken(refreshToken);

          setItemInCookie(ACCESSTOKEN, `${data?.data?.data?.accessToken}`);
        } catch (error) {
          console.error("Error refreshing token:", error);
        }
      }
    };

    const refreshTokenFromCookie = getItemFromCookie(REFRESHTOKEN);

    if (refreshTokenFromCookie) {
      const delayInMilliseconds = 1 * 60 * 1000;
      setTimeout(() => {
        fetchData();
      }, delayInMilliseconds);
    }
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey={storedItem}>
        <Routes>
          <Route path="/*" element={withAuthentication(Home)}>
            <Route index element={<Navigate to={"/"} />} />
          </Route>
          <Route path="" element={withoutAuthentication(UnAuthenticated)}>
            <Route path="login" index element={<Login />} />
            <Route path="signup" index element={<Signup />} />
            <Route path=":invite_id/signup" index element={<Signup />} />

          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
