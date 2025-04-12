import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faLightbulb } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme based on preference
    setTheme(mediaQuery.matches ? "light" : "dark");
    if (mediaQuery.matches)
      document.body.classList.add("dark-mode");
    else
      document.body.classList.remove("dark-mode");

    // Listen for changes in preference
    const handleChange = (e) => {
      if (e.matches)
        document.body.classList.add("dark-mode");
      else
        document.body.classList.remove("dark-mode");
      setTheme(e.matches ? "light" : "dark");

    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
      document.body.classList.toggle("dark-mode");
      setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme} className={"header__button header__button--"+(darkMode ?"dark":"light")}>
        {darkMode ? <FontAwesomeIcon icon={faCloud} /> : <FontAwesomeIcon icon={faLightbulb} />}
    </button>

  );
}

function HeaderBP(){
return(
  
    <header className='header'>
      <div className="wrapper header__wrapper"><Link to="/">
        <img className="header__logo" src="/cornerstone-logo.png" alt="Cornerstone Church"  />
    </Link>
        <h1 className="header__title">Cornerstone Church Mission Trip</h1>
      </div>
    <ThemeToggle />
    </header>
    
);
}
function FooterBP(){
  return (
    <footer className="footer">
      <div className="wrapper">
        <p className="footer__content"><Link to="/contact">Contact Us</Link></p>
        <p className="footer__copy">&copy;2025 Randy Pospisil</p>
      </div>

    </footer>
  )
}

export {
  HeaderBP,
  FooterBP,
  ThemeToggle
}