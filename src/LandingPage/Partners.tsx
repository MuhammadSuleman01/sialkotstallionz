import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='relative'>
        <Image
            src={"/partners-bg.svg"}
            alt=''
            fill
            className='absolute max-w-[1440px] object-cover '
        />

        <div className='relative justify-items-center pt-20 sm:pt-28 lg:pt-35'>
            <p className='text-[18px] sm:text-[42px] font-bold font-inter leading-[132%] text-center'>
                OUR PARTNERS
            </p>
            <p className='text-[12px] sm:text-[16px] font-medium leading-[100%] text-center text-[#E69B1F] uppercase mt-2 px-4'>
                Co-branded in a range of products for our stallionz Fans
            </p>
            <p className='text-[11px] sm:text-[16px] font-light leading-[100%] text-center mt-3 px-4'>
                We bring solutions to make life amazing for our customers.
            </p>
        </div>
        <div className='relative grid justify-center pb-6 sm:pb-12'>
            <div className='grid grid-cols-3 lg:grid-cols-5 justify-items-center gap-[20px] sm:gap-[18px] md:gap-[20px] lg:gap-[23px] mt-[35px] sm:mt-[40px] lg:mt-[50px] max-w-[1200px] px-4'>
            <div className='rounded-[16px] md:rounded-[32px] border-2 border-[#C0C0C0] border-dashed'>
                <Image 
                    src={"/Overc.svg"} 
                    alt='' 
                    width={130} 
                    height={130} 
                    className='w-15 h-15 md:w-50 md:h-50  px-1 py-1 md:px-[25px] md:py-[50px]'
                />
            </div>
            <div className='rounded-[16px] md:rounded-[32px] border-2 border-[#C0C0C0] border-dashed'>
                <Image 
                    src={"/Pak-Champ.svg"} 
                    alt='' 
                    width={125} 
                    height={150} 
                    className='w-15 h-15 md:w-50 md:h-50  px-1 py-1 md:px-[25px] md:py-[50px]'
                />
            </div>
            <div className='rounded-[16px] md:rounded-[32px] border-2 border-[#C0C0C0] border-dashed'>
                <Image 
                    src={"/Alfa-OZ.svg"} 
                    alt='' 
                    width={152} 
                    height={47} 
                    className='w-15 h-15 md:w-50 md:h-50  px-1 py-1 md:px-[25px] md:py-[50px]'
                />
            </div>
            <div className='rounded-[16px] md:rounded-[32px] border-2 border-[#C0C0C0] border-dashed'>
                <Image 
                    src={"/fz-logo.svg"} 
                    alt='' 
                    width={129} 
                    height={129} 
                    className='w-15 h-15 md:w-50 md:h-50  px-1 py-1 md:px-[25px] md:py-[50px]'
                />
            </div>
            <div className='rounded-[16px] md:rounded-[32px] border-2 border-[#C0C0C0] border-dashed'>
                <Image 
                    src={"/zarlay.svg"} 
                    alt='' 
                    width={156} 
                    height={54} 
                    className='w-15 h-15 md:w-50 md:h-50  px-1 py-1 md:px-[25px] md:py-[50px]'
                />
            </div>
        </div>
        </div>

    </div>
  )
}

export default Partners