import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="
             text-xs text-black text-center
             fixed
             inset-x-0
             bottom-0
             p-1
              bg-white footer"
      >
        Copyright &copy; 2023 Cesar & Co. Developed and Designed by <Link href="https://uchenna.io" target="_blank"><span className="hover:text-roman-coffee-600 font-bold">uchenna.io</span>.</Link>
      </footer>
    </div>
  );
};

export default Footer;
