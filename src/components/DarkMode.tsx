import { BsMoonFill, BsMoonStarsFill, BsSun, BsSunFill } from "react-icons/bs"
import useDarkMode from "../hooks/useDarkMode";

export function DarkMode() {
  const [darkMode, setDarkMode] = useDarkMode()

  return(
    <div className="flex items-center" aria-hidden="true">
      <button
        title={ `Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
        onClick={() => setDarkMode(!darkMode)}
        className="zm-dark-mode-toggle"
      >
        <span>
          <BsMoonFill className="zm-moon" />
          <BsMoonStarsFill className="zm-moon-star"/>
          <BsSunFill className="zm-sun-fill"/>
          <BsSun className="zm-sun"/>
        </span>
      </button>
    </div>
  );
}