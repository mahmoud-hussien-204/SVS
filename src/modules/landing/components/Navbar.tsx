"use client";
import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const {pathname: path} = useLocation();

  const logoRef = useRef(null);
  const btnsRef = useRef(null);
  const navbarLinksRef = useRef(null);

  useEffect(() => {
    if (document !== undefined) {
      window.onscroll = (e) => {
        if (window.scrollY) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
    }
  }, []);
  useEffect(() => {
    // text animation
    gsap.to(logoRef.current, {
      translateX: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power1.inOut",
    });

    gsap.to(btnsRef.current, {
      opacity: 1,
      translateX: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });

    gsap.to(navbarLinksRef.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, []);

  const isActive = (to: string) => path === to;

  return (
    <nav
      className={`${
        scroll ? "bg-slate-800" : "bg-transparent"
      } fixed start-0 top-0 z-50 w-full text-white ${path === "/whitepaper" && "hidden"}`}
    >
      <div
        className={`container mx-auto flex flex-wrap items-center justify-between gap-8 transition-all md:justify-start ${
          scroll ? "py-2" : "py-4"
        }`}
      >
        <a
          to='https://svscoin.org/theme-assets/images-3d-graphics/ctcbig.png'
          className='relative ml-4 flex h-[60px] w-[60px] -translate-x-40 items-center space-x-3 opacity-0 md:ml-0 md:h-[90px] md:w-[90px] rtl:space-x-reverse'
          ref={logoRef}
          target='_blank'
        >
          <img
            src='/landing/logoo.png'
            // src="https://svscoin.org/theme-assets/images-3d-graphics/ctcbig.png"
            alt=''
            ref={logoRef}
          />
        </a>
        <div className='flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
          <div className='flex translate-x-40 gap-2 opacity-0 md:gap-4' ref={btnsRef}>
            {/* <button
              type="button"
              className="px-4 py-1 text-xs font-medium text-center text-white bg-transparent border border-white rounded-lg md:text-base md:px-6 md:py-2"
            >
              Login
            </button>
            <button
              type="button"
              // className="px-4 py-1 text-xs font-medium text-center text-gray-800 rounded-lg bg-primary-500 hover:bg-primary-500 focus:text-primary-500 focus:outline-none focus:ring-primary-500 md:text-base md:px-6 md:py-2 "
              className="px-4 py-1 text-xs font-medium text-center text-gray-800 rounded-lg bg-secondary hover:bg-secondary focus:text-secondaryfocus:outline-none focus:ring-secondary md:text-base md:px-6 md:py-2 "
            >
              Register
            </button> */}
          </div>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-100 hover:bg-transparent focus:outline-none md:hidden dark:bg-transparent dark:text-gray-400'
            aria-controls='navbar-sticky'
            aria-expanded='false'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            navbarOpen ? "bg-slate-800" : "hidden"
          } w-full md:order-1 md:flex md:w-auto`}
          id='navbar-sticky'
        >
          <ul
            className='mt-4 flex -translate-y-40 flex-col rounded-lg border border-gray-700 p-4 text-lg font-medium opacity-0 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse'
            ref={navbarLinksRef}
          >
            <li>
              <Link
                to='/'
                // className="block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 md:dark:text-primary-500 after:w-full after:h-0.5 after:bg-primary-500 after:absolute after:-bottom-2 after:rounded-full after:left-0 relative"
                className={`${
                  isActive("/")
                    ? "bg-secondary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-secondary md:text-secondary md:after:w-full md:dark:text-secondary"
                    : ""
                } relative z-40 block rounded px-3 py-2 text-white md:bg-transparent md:p-0`}
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/team'
                className={`${
                  isActive("/team") || path.includes("/teams")
                    ? "bg-secondary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-secondary md:text-secondary md:after:w-full md:dark:text-secondary"
                    : ""
                } relative z-40 block rounded px-3 py-2 text-white md:bg-transparent md:p-0`}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to='/news'
                className={`${
                  isActive("/news")
                    ? "bg-secondary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:rounded-full after:bg-secondary md:text-secondary md:after:w-full md:dark:text-secondary"
                    : ""
                } relative z-40 block rounded px-3 py-2 text-white md:bg-transparent md:p-0`}
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
