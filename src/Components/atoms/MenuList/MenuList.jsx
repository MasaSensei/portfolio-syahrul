import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenuList = (props) => {
  const { menuItems } = props;
  const [currentSection, setCurrentSection] = useState("");

  const handleMenuItemClick = (link) => {
    // Cari elemen dengan ID yang sesuai
    const targetSection = document.querySelector(link);

    if (targetSection) {
      // Gulirkan halaman ke posisi bagian yang sesuai dengan smooth scroll
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Fungsi untuk menentukan bagian mana yang sedang terlihat
  const handleScroll = () => {
    menuItems.forEach((menuItem) => {
      const targetSection = document.querySelector(menuItem.link);

      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          setCurrentSection(menuItem.link);
        }
      }
    });
  };

  useEffect(() => {
    // Tambahkan event listener saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700 md:opacity-50 backdrop-filter backdrop-blur-md">
      {menuItems.map((menuItem, index) => (
        <li key={index}>
          <Link
            to={menuItem.link}
            className={`menu-item ${
              menuItem.link === currentSection
                ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
                : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
            } py-2 pl-3 pr-4 ${
              menuItem.link === currentSection ? "" : "hover:text-blue-500"
            } md:p-0 dark:text-white md:dark:hover:text-blue-500 ${
              menuItem.link === currentSection
                ? "dark:bg-blue-700"
                : "dark:hover:bg-gray-700"
            } dark:hover:text-white md:dark:hover:bg-transparent`}
            onClick={() => handleMenuItemClick(menuItem.link)}
          >
            {menuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
