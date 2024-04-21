import Link from "next/link";
import React from "react";

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">X.based</span>
        </a>
        <nav className="flex">
          <ul className="flex flex-wrap items-center text-base justify-center md:ml-auto font-bold ">
            <li className={`mx-2 border-2 p-2 rounded ${currentPage === '/' ? 'bg-blue-200' : ''} hover:shadow-lg shadow-gray-400`}>
              <Link href="/">Trang chủ</Link>
            </li>
            <li className={`mx-2 border-2 p-2 rounded ${currentPage === '/about' ? 'bg-blue-200' : ''} hover:shadow-lg shadow-gray-400`}>
              <Link href="/about">Giới thiệu</Link>
            </li>
            <li className={`mx-2 border-2 p-2 px-4 rounded ${currentPage === '/contact' ? 'bg-blue-200' : ''} hover:shadow-lg shadow-gray-400`}>
              <Link href="/contact">Liên Hệ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
