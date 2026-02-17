'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const SocialSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='relative max-w-[1440px] mb-4 px-2 sm:px-2 md:px-2 lg:px-2'>
        <Image  
            src="/bg2.svg"
            alt="Watermark"
            width={1440}
            height={560}
            className="absolute mt-10 sm:mt-28 md:mt-50 lg:mt-55 xl:mt-40 w-full h-auto"
        />
        <div className='relative'>
            <Image
                src={"/polygon-bg.svg"}
                alt='Star'
                width={1473}
                height={550}
                className='absolute w-full max-w-[1440px]'
            />
                
            <div className='relative pt-[27px] sm:pt-[55px] md:pt-[65px] lg:pt-[85px] xl:pt-[113px] ml-[35px] sm:ml-[70px] md:ml-[90px] lg:ml-[160px] xl:ml-[200px] pb-[40px] sm:pb-[40px]'>
                <Image
                    src={"/sialkot-logo.svg"}
                    alt='Sialkotionz'
                    width={149}
                    height={153}
                    className='relative top-2 sm:top-3 md:top-5 lg:top-8 w-[15px] sm:w-[50px] md:w-[67px] lg:w-[115px] xl:w-[149px] h-auto'
                />
                <p className='text-[6px] sm:text-[10px] md:text-[12px] lg:text-[18px] xl:text-[18px] font-medium mt-1 sm:mt-1  lg:mt-2'>
                    Join the Stallionz Family
                </p>
                <p className='text-[5px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-light xl:mt-2'>
                    Hum Sialkot Stallionz. Become part of the<br/> 
                    10,000+ growing STALLIONZ. We look <br/> 
                    forward to welcoming you in the family.
                </p>
                <button className='bg-[#000000] text-[#FFFFFF] rounded px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 xl:mt-3 sm:mt-1 text-[4px] sm:text-[10px] lg:text-[14px] hover:bg-[#E3A43E] hover:text-[#000000] transition-colors sm:block hidden'>
                    Become a Member
                </button>
            </div>
        </div>
        
        <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row justify-between items-center  lg:items-center md:items-center sm:items-center lg:justify-between md:justify-between sm:justify-between sm:px-2 md:px-2 lg:px-4'>
            <div className='relative xl:top-40 lg:top-30 md:top-15 lg:w-auto'>
                <p className='text-[12px] sm:text-[16px] lg:text-[18px] font-medium text-[#E3A43E]'>
                    Latest Videos
                </p>
                <p className='text-[12px] sm:text-[18px] lg:text-[20px] font-medium mt-2'>
                    Check out some of the latest <br/>
                    content straight out of <br />
                    <span className='text-[14px] sm:text-[18px] lg:text-[20px] font-bold'>
                        SIALKOT STALLIONZ
                    </span>
                </p>
            </div>
        
            {/* <Image
                src="/Uholder.svg"
                alt="Youtube"
                width={992}
                height={551}
                className="relative w-full lg:w-[750px] md:w-[500px] sm:w-[400px] h-auto max-w-[992px] xl:w-[992px] md:mt-[70px] "
            /> */}

                <div className="relative w-full lg:w-[750px] md:w-[500px] sm:w-[400px] max-w-[992px] xl:w-[992px] md:mt-[70px]">
                    
                <div className='relative w-full overflow-hidden rounded-lg' style={{ paddingBottom: '56.25%' }}>
                    {!isPlaying ? (
                        // Placeholder Image with Play Button
                        <div 
                            onClick={() => setIsPlaying(true)}
                            className='absolute top-0 left-0 w-full h-full cursor-pointer group'
                        >
                            <Image
                                src="/Uholder.svg"
                                alt="Video Thumbnail"
                                fill
                                className="object-cover rounded-lg"
                            />
                            {/* Play Button Overlay */}
                            <div className='absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors'>
                                <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                                    <svg 
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // YouTube Video
                        <iframe
                            className='absolute top-0 left-0 w-full h-full rounded-lg'
                            src="https://www.youtube.com/embed/pPaWMS3qozc?autoplay=1&loop=1&playlist=pPaWMS3qozc&rel=0"
                            title="Sialkot Stallionz Latest Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>

        </div>
    </div>
  )
}

export default SocialSection