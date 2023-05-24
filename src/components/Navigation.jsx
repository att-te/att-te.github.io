// ./components/Navigation.jsx
const { default: Link } = require("next/link");
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dynamicRoute = useRouter().asPath

  useEffect(() => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }
  }, [dynamicRoute]);

  return (
    <nav className="nav">
      <div className="menu-content">
        <ul className="lang-switch">
          <li>
            <a href="#" title="PT EN" aria-label="language"> PT / EN </a>
          </li>
        </ul>

        <div className="flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
          >
            <svg
              className="w-10 h-10 text-black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div id="overlay" className={isMenuOpen ? "showMenu" : "hideMenu"}>
          <div className="overlay-content">
            <ul id="menu">
              <li>
                <Link href={"/"}>home</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
};

export default Navigation;
