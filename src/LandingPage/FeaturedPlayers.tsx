"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const FeaturedPlayers = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const playersPerPage = 6;

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);


    const players: {
        number: string;
        name: string;
        country: string;
        image: string;
        nameClass?: string;
    }[] = [
            { number: "01", name: "Ahmed Daniyal", country: "pakistan", image: "/danyial.svg" },
            { number: "23", name: "M.Nawaz", country: "pakistan", image: "/nawaz.svg", nameClass: "pr-6 sm:pr-13 lg:pr-15" },
            { number: "12", name: "Salman Mirza", country: "pakistan", image: "/mirza.svg" },
            { number: "34", name: "Steve Smith", country: "Australia", image: "/smith.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "22", name: "Saad Masood", country: "pakistan", image: "/saad.svg" },
            { number: "23", name: "Sahibzada f.", country: "pakistan", image: "/farhan.svg" },
            { number: "45", name: "aston", country: "pakistan", image: "/danyial.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "56", name: "Awis", country: "pakistan", image: "/nawaz.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "67", name: "delano", country: "pakistan", image: "/mirza.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "78", name: "jahazaib", country: "Australia", image: "/smith.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "89", name: "josh p.", country: "pakistan", image: "/saad.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "90", name: "momin", country: "pakistan", image: "/farhan.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "11", name: "peter", country: "pakistan", image: "/danyial.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "22", name: "shan ma.", country: "pakistan", image: "/nawaz.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "33", name: "shaw", country: "pakistan", image: "/mirza.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
            { number: "33", name: "Tabraiz", country: "pakistan", image: "/mirza.svg", nameClass: "pr-3 sm:pr-7 lg:pr-8" },
        ];

    const totalPages = Math.ceil(players.length / playersPerPage);
    const currentPlayers = players.slice(currentPage * playersPerPage, (currentPage + 1) * playersPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1 && !isAnimating) {
            setSlideDirection('left');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(prev => prev + 1);
                setSlideDirection(null);
                setIsAnimating(false);
            }, 300);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0 && !isAnimating) {
            setSlideDirection('right');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(prev => prev - 1);
                setSlideDirection(null);
                setIsAnimating(false);
            }, 300);
        }
    };

    const getSlideClass = () => {
        if (slideDirection === 'left') return 'animate-slide-left';
        if (slideDirection === 'right') return 'animate-slide-right';
        return '';
    };

    const PlayerCard = ({ player }: { player: typeof players[0] }) => (
        <div className='relative rounded-tl-4xl overflow-hidden bg-[linear-gradient(360deg,_#E3A43E_12.49%,_#000000_124.93%)] w-full aspect-square cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#E3A43E]/50 hover:-translate-y-2 group'>
            <Image
                src={"/hero-bg2.svg"}
                alt=''
                fill
                className='object-cover py-[50px] sm:py-[55px] md:py-[65px] lg:py-[70px] rotate-[-12deg]'
            />
            <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-contain object-right"
            />
            <Image
                src="/Sialkot-logo.svg"
                alt="Sialkot Stallionz"
                width={83}
                height={85}
                className="absolute top-2.5 sm:top-0.5 w-[15%] h-auto left-1 sm:left-0"
            />
            <div className='absolute top-[5%] text-[#E3A43E] text-[24px] sm:text-[75px] md:text-[85px] lg:text-[93px] font-extrabold left-[16%]'>
                {player.number}
            </div>
            <div className='absolute bottom-[43px] sm:bottom-[25%] xl:bottom-[23%] lg:bottom-[30%] flex gap-1 md:gap-2'>
                <Image
                    src="/logo.svg"
                    alt="Sialkot Stallionz Logo"
                    width={63}
                    height={28}
                    className="w-[32px] md:w-[50px] h-auto"
                />
            </div>
            <div className={`absolute bottom-[2%] rounded-e-full bg-[#000000] opacity-[75%] inline-block px-2 py-2 ${player.nameClass || ''}`}>
                <p className='text-[10px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#FFFFFF] font-bold italic uppercase'>
                    {player.name}
                </p>
                <p className='text-[6px] sm:text-[11px] lg:text-[12px] font-normal md:font-light text-[#FFFFFF] uppercase ml-1'>
                    {player.country}
                </p>
            </div>
        </div>
    );

    return (
        <div className='mt-4 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 md:px-8'>
            <style>{`
                @keyframes slideOutLeft {
                  from { transform: translateX(0); opacity: 1; }
                  to { transform: translateX(-100%); opacity: 0; }
                }

                @keyframes slideOutRight {
                  from { transform: translateX(0); opacity: 1; }
                  to { transform: translateX(100%); opacity: 0; }
                }

                .animate-slide-left {
                   animation: slideOutLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                 }
                            
                 .animate-slide-right {
                   animation: slideOutRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                 }`
                }
            </style>


            <div className='justify-items-center'>
                <p className='text-[14px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold font-inter leading-[145%] uppercase text-center'>
                    Sialkot Stallionz
                </p>
                <p className='text-[12px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium text-[#E69B1F] leading-[145%] uppercase text-center'>
                    Featured Players psl 11
                </p>
                <p className='text-[11px] sm:text-[15px] lg:text-[16px] font-light leading-[100%] text-center max-w-[600px] mx-auto mt-2'>
                    Here is your Sialkot Stallionz which will be going all in this season.
                </p>
            </div>

            <div className='flex items-center justify-end gap-2 px-12 mt-4'>
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className='cursor-pointer w-[40px] h-[40px] bg-[#E3A43E] rounded-full text-[#FFFFFF] flex items-center justify-center hover:bg-[#c9893a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className='flex gap-1'>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-full transition-all duration-300 ${i === currentPage ? 'w-4 h-3 bg-[#E3A43E]' : 'w-3 h-3 bg-[#E3A43E]/40'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    className='cursor-pointer w-[40px] h-[40px] bg-[#E3A43E] rounded-full text-[#FFFFFF] flex items-center justify-center hover:bg-[#c9893a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className='overflow-hidden'>
                <div className={`grid grid-cols-2 lg:grid-cols-3 gap-[15px] sm:gap-[18px] lg:gap-[23px] px-0 sm:px-[20px] md:px-[30px] lg:px-[45px] mt-[10px] sm:mt-[15px] lg:mt-[20px] justify-items-center ${getSlideClass()}`}>
                    {currentPlayers.map((player, index) => (
                        <PlayerCard key={index} player={player} />
                    ))}
                </div>
            </div>

            <div className='flex justify-center'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='text-[12px] sm:text-[17px] lg:text-[18px] font-semibold text-[#E3A43E] border mt-[20px] sm:mt-[38px] lg:mt-[47px] px-5 sm:px-8 lg:px-9 py-2 sm:py-2.5 lg:py-3 rounded hover:bg-[#E3A43E] hover:text-[#000000] transition-colors cursor-pointer'
                >
                    See More
                </button>
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 z-5000000000 flex items-center justify-center bg-black/80 p-4'>
                    <div className='relative bg-[#111111] rounded-2xl w-full max-w-[1200px] max-h-[90vh] overflow-y-auto p-6'>

                        {/* Modal Header */}
                        <div className='flex items-center justify-between mb-6'>
                            <div>
                                <p className='text-[18px] sm:text-[28px] font-bold text-[#FFFFFF] uppercase'>All Players</p>
                                <p className='text-[12px] sm:text-[16px] font-medium text-[#E69B1F] uppercase'>Sialkot Stallionz PSL 11</p>
                            </div>
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className='w-[40px] h-[40px] bg-[#E3A43E] rounded-full text-[#FFFFFF] flex items-center justify-center hover:bg-[#c9893a] transition-colors'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* All Players Grid */}
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-[15px] sm:gap-[18px] lg:gap-[23px]'>
                            {players.map((player, index) => (
                                <PlayerCard key={index} player={player} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FeaturedPlayers