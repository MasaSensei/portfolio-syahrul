import { useState, useEffect } from "react";
import Atoms from "../../atoms";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  // daftar Menu
  const menuItems =
    location.pathname === "/project"
      ? [
          {
            label: "Home",
            link: "/",
            current: true,
          },
        ]
      : [
          {
            label: "Home",
            link: "#home",
            current: true,
          },
          {
            label: "About Me",
            link: "#about_me",
            current: false,
          },
          {
            label: "Project",
            link: "#project",
            current: false,
          },
          {
            label: "Contact",
            link: "#contact",
            current: false,
          },
        ];

  let idleTimer; // Timer to track user inactivity
  let stickyTimer; // Timer to make navbar sticky for 3 seconds

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    resetIdleTimer();
  };

  const resetIdleTimer = () => {
    setIsIdle(false);
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      setIsMenuOpen(false);
      setIsIdle(true);
    }, 3000); // 3 seconds of inactivity to trigger idle state
  };

  const resetStickyTimer = () => {
    setIsSticky(true);
    clearTimeout(stickyTimer);
    stickyTimer = setTimeout(() => {
      setIsSticky(false); // Hide the navbar after 3 seconds of being sticky
    }, 3000); // 3 seconds of stickiness
  };

  const handleScroll = () => {
    resetStickyTimer();
    resetIdleTimer();
  };

  // Add a scroll event listener to determine if the navbar should be sticky
  useEffect(() => {
    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("mousedown", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);
    window.addEventListener("scroll", handleScroll);

    resetIdleTimer();
    resetStickyTimer(); // Start the sticky timer initially

    return () => {
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("mousedown", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimer);
      clearTimeout(stickyTimer);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky || isMenuOpen
          ? "fixed top-0 left-0 right-0 backdrop-blur-md"
          : "absolute"
      } bg-transparent border-gray-200 w-full py-5 z-50 transition-all duration-500`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center">
          <img src="src/assets/images/logo_2.png" alt="logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Syahrul Mubarak
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <Atoms.MenuList menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
