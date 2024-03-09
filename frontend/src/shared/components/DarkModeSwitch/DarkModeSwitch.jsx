import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../TheamProvider";

const DarkModeSwitch = () => {

  const { setTheme } = useTheme();
  const storedItem = localStorage.getItem("Mode");

  const [isDarkMode, setIsDarkMode] = useState(storedItem === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    setTheme(isDarkMode ? "dark" : "light");
    localStorage.setItem("Mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode, setTheme]);

  const handleCheckboxChange = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <FaMoon className="fas fa-moon" />
        <FaSun className="fas fa-sun" />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
