import Image from 'next/image'
import React from 'react'

const MediaPartners = () => {
  return (
      <div className='mb-20'>
      
              <div className='justify-items-center pt-[34px] sm:pt-[73px]'>
                  <p className='text-[18px] sm:text-[42px] font-bold font-inter leading-[132%]'>
                      OUR MEDIA PARTNERS
                  </p>
                  <p className=' text-[12px] sm:text-6 font-light leading-[100%] text-center mt-3'>
                      We bring solutions to make life amazing for our customers.
                  </p>
              </div>
              <div className='flex justify-center gap-[23px] mt-[50px] '>
                  <div className='rounded-[16px] md:rounded-[32px] border-2 border-[#C0C0C0] border-dashed'><Image src={"/oz-sports.svg"} alt='' width={96} height={69} className='w-20 h-12 px-[20px] py-1 md:w-50 md:h-25 md:px-[70px] md:py-[20px]'/></div>
                  <div className='rounded-[16px] md:rounded-[32px] border-2 border-[#C0C0C0] border-dashed'><Image src={"/Wise-Pakistan.svg"} alt='' width={60} height={60} className='w-20 h-12 px-[20px] py-1 md:w-50 md:h-25 md:px-[70px] md:py-[20px]'/></div>
              </div>
      
          </div>
        )
}

export default MediaPartners