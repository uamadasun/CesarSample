'use client'
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MainLogo from "../assets/main_logo.png";
import MobileLogo from "../assets/mobile_logo.png";
import Image from "next/image";
import Link from "next/link";
// import BookButton from "./BookButton";

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home')


  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav
          className="flex justify-around px-0 lg:px-8  "
          aria-label="Global"
        >
          <div className="flex lg:flex-2  gap-2  w-fit ">
            <Link href="/" className=" p-2.5 flex "  onClick={() => setCurrentPage('Home')} >
              <span className="sr-only">Cesar and Co Construction</span>
              
              <Image  src={MainLogo} alt="cesar and co logo" width={200} height={50} className="hidden md:block"/>
              <Image  src={MobileLogo} alt="cesar and co logo" width={200} height={50} className="block md:hidden justify-center h-full w-full "/>
              
            </Link>
          </div>
          <div className="flex justify-end lg:hidden  mr-3">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-roman-coffee-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className={mobileMenuOpen ? `h-6 w-6 hidden fill-white` : `h-6 w-6 fill-white`} aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-10 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={item.name !== currentPage ? "text-md font-semibold font-serif leading-6 text-black hover:text-roman-coffee-600" : " px-2 py-1 text-md font-semibold font-serif leading-6 bg-roman-coffee-400 rounded-md text-white hover:text-dodger-blue-600 hover:bg-white"}
                onClick={(e)=> setCurrentPage(e.target.text)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* <BookButton mobile={false}/> */}
          </div>
        </nav>

        {/* MOBILE NAV BAR */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/5 overflow-y-auto bg-roman-coffee-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Cesar and Co Construction</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black bg-roman-coffee-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-20 w-6 fill-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-white">
                <div className="space-y-2 py-4 ">
                  {navigation.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={item.name !== currentPage ? "-mx-3 block rounded-lg px-3 py-2 font-serif text-center font-semibold leading-6 text-roman-coffee-700 " : "-mx-3 block px-3 py-1 text-center font-semibold font-serif leading-7 text-white bg-roman-coffee-600 rounded-md  "}
                      onClick={(e)=> setCurrentPage(e.target.text)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <BookButton mobile={true}/> */}
                  
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </div>
  );
};

export default NavBar;
