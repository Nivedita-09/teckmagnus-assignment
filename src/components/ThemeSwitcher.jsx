import React, { useState } from "react";
import Switch from "react-switch";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <h2>Theme Switcher</h2>
      <Switch
        onChange={handleThemeChange}
        checked={isDarkMode}
        onColor="#000"
        offColor="#888"
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
      />
    </div>
  );
};

export default ThemeSwitcher;
