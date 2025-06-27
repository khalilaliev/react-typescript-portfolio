import { FC, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { NAVBAR_ITEMS } from "../../constants/navbarItems";
import DropdownMenu from "../DropdownMenu/DropdownMenu.tsx";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`max-w-7xl dark:shadow-xl  my-0 mx-auto dark:bg-header-bg dark:text-dark-text bg-white shadow-lg z-50 rounded-xl max-md:rounded-none container fixed top-0 left-0 right-0 transition-colors duration-300 ${
          isScrolled
            ? "bg-opacity-55 backdrop-blur-md dark:bg-opacity-70 dark:backdrop-blur-lg"
            : "bg-opacity-100"
        }`}
      >
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="font-semibold flex items-center justify-between "
          >
            <FaReact className="text-4xl hover:rotate-180 hover:scale-110 transition-all duration-1000" />
          </Link>
          <nav className="hidden md:flex gap-1">
            {NAVBAR_ITEMS.map((item) => {
              const isActive: boolean =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-light border-b-2 border-transparent dark:hover:text-blue-700 hover:bg-blue-200 dark:hover:bg-hover-bg rounded-lg p-2 transition-all duration-300 ease-in-out ${
                    isActive ? "text-blue-500" : ""
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
          {/* <DropdownMenu /> */}
          <label className="relative cursor-pointer inline-block w-[56px] h-[30px]">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div className="w-full ц h-full bg-gray-300 cursor-pointer dark:bg-gray-600 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>

            <div className="absolute top-[2px] left-[2px] w-[26px] h-[26px] bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 peer-checked:translate-x-[26px]">
              <MdOutlineLightMode
                className={` text-[18px] transition-all duration-300
        ${
          theme === "dark"
            ? "opacity-0 -translate-x-2"
            : "opacity-100 translate-x-0"
        }`}
              />
              <MdOutlineDarkMode
                className={`absolute text-[18px]  text-gray-800 transition-all duration-300
        ${
          theme === "dark"
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
              />
            </div>
          </label>

          <button
            className="text-2xl p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden absolute flex flex-col space-y-4 top-17 right-0 w-40 bg-white dark:bg-dark-bg shadow-md  p-4 transition-all duration-300">
            {NAVBAR_ITEMS.map((item) => {
              const isActive: boolean =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`font-light border-b-2 border-transparent hover:bg-blue-200 rounded-lg px-2 duration-300 transition-all ${
                    isActive ? "text-blue-500" : ""
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </>
  );
};

export default Header;
