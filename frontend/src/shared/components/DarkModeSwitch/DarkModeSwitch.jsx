import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../TheamProvider";

const DarkModeSwitch = () => {
  const { setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState("light");

  const handleCheckboxChange = () => {
    setIsDarkMode(isDarkMode === "light" ? "dark" : "light");
    localStorage.setItem("Mode", isDarkMode);
    document.body.classList.toggle("dark");
    setTheme(isDarkMode);
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
