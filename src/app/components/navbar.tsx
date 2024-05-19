"use client"; // This is a client component 👈🏽
import React from "react";

const scrollTo = (position: number) => {
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
};

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen bg-white border-gray-200 dark:bg-gray-900 shadow-xl mb-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-black whitespace-nowrap dark:text-white">
            Mondher Jandoubi
          </span>
        </a>

        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <button
                  onClick={() => scrollTo(0)}
                  className="text-gray-900 dark:text-white hover:underline text-2xl font-bold"
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo(400)}
                  className="text-gray-900 dark:text-white hover:underline text-2xl font-bold"
                >
                  About me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo(1000)}
                  className="text-gray-900 dark:text-white hover:underline text-2xl font-bold"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo(1800)}
                  className="text-gray-900 dark:text-white hover:underline text-2xl font-bold"
                >
                  Qualification
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
