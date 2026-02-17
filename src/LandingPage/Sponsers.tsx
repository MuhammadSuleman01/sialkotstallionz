import Image from 'next/image'
import React from 'react'

const Sponsers = () => {
  return (
    <div className='relative mt-16 mb-8'>
        <div className='relative'>
        <Image
            src={"/Sponsers-bg.svg"}
            alt=''
            fill
            className='object-cover absolute [clip-path:polygon(0_0,100%_0%,100%_99%,0_79%)] max-w-[1440px] h-auto'
        />

        <div className='relative justify-items-center py-10 lg:py-12 '>
            <p className='text-[20px] sm:text-[42px] font-bold font-inter leading-[132%] text-center'>
                OUR SPONSERS
            </p>
            <p className='text-[12px] sm:text-[16px] font-medium text-center text-[#E69B1F] uppercase mt-2 px-4'>
                We are trusted by our soponsers to provide them the better experience.<br className='hidden sm:block'/> 
                grateful for thir contribution.
            </p>
            <p className='text-[12px] sm:text-[16px] font-light text-center mt-3 px-4'>
                We are grateful for their trust in Sialkot Stallionz and helping us make a<br className='hidden sm:block'/> 
                difference in the lives of people around us.
            </p>
        </div>
        </div>
        <div className='flex justify-center gap-2 mt-11 sm:gap-[23px] sm:mt-[47px] px-1 '>
            <div className='rounded-[32px] border-2 border-[#C0C0C0] border-dashed'><Image src={"/New-Balance.svg"} alt='' width={165} height={110} className='w-20 h-20 px-1 py-1 sm:w-50 sm:h-50 sm:px-[25px] sm:py-[50px]'/></div>
            <div className='rounded-[32px] border-2 border-[#C0C0C0] border-dashed'><Image src={"/Alfa-OZ.svg"} alt='' width={152} height={47} className='w-20 h-20 px-1 py-1 sm:w-50 sm:h-50 sm:px-[25px] sm:py-[50px]'/></div>
            <div className='rounded-[32px] border-2 border-[#C0C0C0] border-dashed'><Image src={"/Pak-Champ.svg"} alt='' width={103} height={124} className='w-20 h-20 px-1 py-1 sm:w-50 sm:h-50 sm:px-[25px] sm:py-[50px]'/></div>
        </div>
    </div>
  )
}

export default Sponsers