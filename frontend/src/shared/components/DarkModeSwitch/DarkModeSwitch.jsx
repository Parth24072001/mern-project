import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCheckboxChange = () => {
    setIsDarkMode((prevState) => !prevState);
    document.body.classList.toggle("dark");
  };

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={isDarkMode}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <FaMoon className="fas fa-moon" />
        <FaSun className="fas fa-sun" />
        <span className="ball"></span>
      </label>
      <div className={isDarkMode ? "dark" : ""}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default DarkModeSwitch;
