import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../../pages/index.js";


const Navbar = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer hidden"
          hidden=""
          aria-hidden="true"
        />
        <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
          <div className="xl:container m-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div className="w-full flex justify-between lg:w-auto">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200" />
                    <div className="h-6 w-2 bg-primary dark:bg-primaryLight" />
                  </div>
                  <span className="text-base font-bold text-gray-600 dark:text-white">
                    Tuity
                  </span>
                </a>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  />
                </label>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/auth/login"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>login</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/auth/register"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>register</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {user?.role === "admin" ? (
                  <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                    <Link
                      href="/admin"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                        Admin
                      </span>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
