'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="relative w-auto sticky top-0 z-[100000] bg-[#F8AA2C] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-1 sm:px-2 md:px-8 lg:px-10 py-1">
         <div className="relative sm:hidden" >

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className=" text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute sm:hidden bg-[#1a1a1a] px-2 w-28 text-[12px] ml-3 opacity-80">
          <p className="text-white cursor-pointer hover:text-[#F29D11] py-1">
            <Link
                href="/"
            >
                Home
            </Link>
          </p>
          <p className="text-white cursor-pointer hover:text-[#F29D11] py-1">
            Team
          </p>
          <p className="text-white cursor-pointer hover:text-[#F29D11] py-1">
            Fixture
          </p>
          <p className="text-white cursor-pointer hover:text-[#F29D11] py-1">
            Press Release
          </p>
          <p className="text-white cursor-pointer hover:text-[#F29D11] py-1">
            News
          </p>
          <p className="text-white cursor-pointer hover:text-[#F29D11] py-1">
            Gallery
          </p>
        </div>
      )}
      </div>

        <Image
          src="/Sialkot-logo.svg"
          alt="Sialkot Stallionz"
          width={83}
          height={85}
          className="h-auto w-[40px] sm:w-[70px] md:w-[75px] lg:w-[83px]"
        />
        
        <div className="hidden sm:flex text-[#000000] uppercase gap-[10px] sm:gap-[10px] lg:gap-[30px] md:gap-[20px] text-[14px] md:text-[13px] sm:text-[13px]">
          <p className="cursor-pointer hover:text-[#FFFFFF] transition-colors">
            <Link
                href="/"
            >
                Home
            </Link>
          </p>
          <p className="cursor-pointer hover:text-[#FFFFFF] transition-colors">Team</p>
          <p className="cursor-pointer hover:text-[#FFFFFF] transition-colors">Fixture</p>
          <p className="cursor-pointer hover:text-[#FFFFFF] transition-colors">Press Release</p>
          <p className="cursor-pointer hover:text-[#FFFFFF] transition-colors">News</p>
          <p className="cursor-pointer hover:text-[#FFFFFF] transition-colors">Gallery</p>
        </div>

        <div className="flex items-center gap-1">
          <Link href={"https://wisemarket.com.pk/"} target="_blank" rel="noopener noreferrer">
          <button 
            className="text-[10px] sm:text-[13px] lg:text-[14px] font-semibold bg-[#F29D11] w-[58px] sm:w-[80px] lg:w-[85px] h-[25px] sm:h-[35px] lg:h-[37px] rounded cursor-pointer hover:bg-[#d88a0e] transition-colors">
            Store
          </button>
          </Link>
          <button className="text-[10px] sm:text-[13px] lg:text-[14px] text-[#000000] font-semibold w-[82px] sm:w-[110px] lg:w-[120px] h-[25px] sm:h-[35px] lg:h-[37px] rounded cursor-pointer hover:bg-[#F29D11] hover:border-[#F29D11] transition-colors">
            Memberships
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;