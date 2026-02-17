import Image from 'next/image'
import React from 'react'

const StallionzStore = () => {
    return (
        <div className='mt-12 sm:mt-20 md:mt-24 lg:mt-28 mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-6 md:px-8'>
            <div className='justify-items-center'>
                <p className='text-[24px] font-bold font-inter leading-[132%] uppercase text-center'>
                    Stallionz Store
                </p>
                <p className='text-[14px] font-light leading-[100%] text-center mt-2'>
                    Check out the latest collection.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-[40px] sm:gap-[60px] md:gap-[70px] lg:gap-[85px] xl:gap-[105px] mt-[35px] sm:mt-[45px] lg:mt-[55px]">

                <div className="flex flex-col gap-[40px] sm:gap-[60px] md:gap-[70px] lg:gap-[85px] xl:gap-[105px] items-center">

                    <div className="w-full max-w-[531px] rounded-[32px] border-2 border-[#C0C0C0] border-dashed bg-[#F1F1F1] flex flex-col items-center">
                        <Image
                            src="/BACK-FRONT.svg"
                            alt="Ahmed"
                            width={467}
                            height={467}
                            className="mt-[56px] w-[467px] h-auto max-w-[85%]"
                        />
                        <div className="relative justify-items-center py-1 sm:py-3 mt-4 sm:mt-[29px]">
                            <p className='text-[12px] sm:text-[28px] font-bold uppercase text-center px-2 sm:px-4'>
                                OZ Cricket Jersey Red Black
                            </p>
                            <div className='flex gap-2 justify-center mt-1'>
                                <p className='text-[12px] sm:text-[16px] font-light'>
                                    Official Kit – PSL 11
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[531px] rounded-[32px] border-2 border-[#C0C0C0] border-dashed bg-[#F1F1F1] flex flex-col items-center">
                        <Image
                            src="/FRONT-LEFT.svg"
                            alt="Ahmed"
                            width={467}
                            height={467}
                            className="mt-[56px] w-[467px] h-auto max-w-[85%]"
                        />
                        <div className="relative justify-items-center py-1 sm:py-3 mt-4 sm:mt-[29px]">
                            <p className='text-[12px] sm:text-[28px] font-bold uppercase text-center px-2 sm:px-4'>
                                OZ Cricket Jersey Red Black
                            </p>
                            <div className='flex gap-2 justify-center mt-1'>
                                <p className='text-[12px] sm:text-[16px] font-light'>
                                    Official Kit – PSL 11
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-[40px] sm:gap-[60px] md:gap-[70px] lg:gap-[85px] xl:gap-[105px] md:mt-[70px] lg:mt-[90px] xl:mt-[110px] items-center">

                    <div className="w-full max-w-[531px] rounded-[32px] border-2 border-[#C0C0C0] border-dashed bg-[#F1F1F1] flex flex-col items-center">
                        <Image
                            src="/front.svg"
                            alt="Ahmed"
                            width={467}
                            height={467}
                            className="mt-[56px] w-[467px] h-auto max-w-[85%]"
                        />
                        <div className="relative justify-items-center py-1 sm:py-3 mt-4 sm:mt-[29px]">
                            <p className='text-[12px] sm:text-[28px] font-bold uppercase text-center px-2 sm:px-4'>
                                OZ Cricket Jersey Red Black
                            </p>
                            <div className='flex gap-2 justify-center mt-1'>
                                <p className='text-[12px] sm:text-[16px] font-light'>
                                    Official Kit – PSL 11
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[531px] rounded-[32px] border-2 border-[#C0C0C0] border-dashed bg-[#F1F1F1] flex flex-col items-center">
                        <Image
                            src="/right.svg"
                            alt="Ahmed"
                            width={467}
                            height={467}
                            className="mt-[56px] w-[467px] h-auto max-w-[85%]"
                        />
                        <div className="relative justify-items-center py-1 sm:py-3 mt-4 sm:mt-[29px]">
                            <p className='text-[12px] sm:text-[28px] font-bold uppercase text-center px-2 sm:px-4'>
                                OZ Cricket Jersey Red Black
                            </p>
                            <div className='flex gap-2 justify-center mt-1'>
                                <p className='text-[12px] sm:text-[16px] font-light'>
                                    Official Kit – PSL 11
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default StallionzStore