import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const logos: { src: string; width: number; height: number; href:string }[] = [
    { src: "/OZ-Group.svg", width: 50, height: 46, href: "https://ozgroup.pk/" },
    { src: "/OZ-Developers.svg", width: 55, height: 39, href: "https://ozdevelopers.com/"  },
    { src: "/Bahria-Sky2.svg", width: 50, height: 45, href: "https://ozdevelopers.com/bahria-sky-2"  },
    { src: "/Bahria-Sky2.svg", width: 50, height: 42, href: "https://ozdevelopers.com/bahria-sky"  },
    { src: "/Lahore-Sky.svg", width: 50, height: 39, href: "https://lahoresky.com.pk/"  },
    { src: "/Wise-Wheels.svg", width: 50, height: 20, href: "https://wisewheels.com.pk/"  },
    { src: "/WM.svg", width: 55, height: 11, href: "https://wisemarket.com.pk/"  },
    { src: "/oz-enterprises.svg", width: 51, height: 34, href: "/about-us"  },
    { src: "/OZ-Techwork.svg", width: 34, height: 47, href: "https://oztechwork.com/"  },
    { src: "/Victoria's-Coffee.svg", width: 55, height: 42, href: "https://thevictoriascoffee.com/"  },
  ];

  return (
    <div className="relative w-full min-h-[200px] sm:min-h-[400px] md:min-h-[550px] lg:min-h-[700px] xl:min-h-[800px] overflow-hidden">
      <Image
        src="/hero-bg1.svg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />
      <Image
        src="/hero-bg2.svg"
        alt="Hero Background"
        fill
        priority
        className="object-contain object-center"
      />

      <div className="absolute right-0 top-[20px] sm:top-[50px] md:top-[60px] z-10 rounded-s-full bg-[#000000] opacity-[75%] inline-block pl-2 py-2 sm:pl-4 sm:pr-2 sm:py-2">
        <Image
          src="/logo.svg"
          alt="Sialkot Stallionz Logo"
          width={86}
          height={61}
          className="w-[40px] h-[28px] sm:w-[60px] sm:h-[43px] md:w-[70px] md:h-[50px] lg:w-[86px] lg:h-[61px]"
        />
      </div>

      <Image
        src="/players.svg"
        alt="Players"
        width={1435}
        height={684}
        priority
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1435px] z-10"
      />

      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 w-[95%] sm:w-[90%] max-w-[1123px]">
        <div className="flex items-center justify-between bg-[#000000] border rounded-[50px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] px-2 sm:px-3 md:px-4 py-2 opacity-[75%] gap-1 sm:gap-2 md:gap-3 lg:gap-5 w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex w-[26px] h-[26px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[72px] xl:h-[72px] bg-[#FFFFFF] rounded-full flex items-center justify-center"
            >
              <Link href={logo.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
                className="cursor-pointer px-1 py-1 w-full h-full object-contain"
              />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;