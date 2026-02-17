'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Email regex (standard & safe)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    useEffect(()=>{
        if(!email){
            setError("");
        }
    },[email])

    const handleSubscribe = () => {
        setError('')

        if (!email.trim()) {
            setError('Email is required')
            return
        }
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address')
            return
        }

        const storedEmails = JSON.parse(
            localStorage.getItem('subscribedEmails') || '[]'
        )

        if (storedEmails.includes(email)) {
            setError('This email is already subscribed')
            return
        }
        const updatedEmails = [...storedEmails, email]
        localStorage.setItem('subscribedEmails', JSON.stringify(updatedEmails))

        toast.success("Subscribed Successfully 🎉");
        setEmail('')
    }
    return (
        <div className='bg-[#000000] text-[#FEFEFE]'>
            <div className='text-center justify-items-center px-4'>
                <Image
                    src="/logo.svg"
                    alt="Sialkot Stallionz"
                    width={67}
                    height={30}
                    className="pt-[32px]"
                />
                <p className='text-[16px] sm:text-[24px] font-medium uppercase'>Are you excited for PSL 11? Check out the fixtures</p>
                <button className='cursor-pointer font-semibold text-[12px] bg-[#E3A43E] rounded px-[27px] py-[11px] my-4 sm:my-9 hover:bg-[#d89520] transition-colors'>
                    View PSL 11 Fixtures
                </button>
            </div>

            <div className=' mx-4 sm:mx-8 md:mx-[115px] border border-[#FFFFFF] border-dashed opacity-[10%] max-w-[1440px] mx-auto'>
            </div>

            <div className='relative grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6 lg:gap-0 pt-5 px-4 sm:px-8 md:px-12 lg:px-0 max-w-[1440px] mx-auto'>
                <Image
                    src="/image 89.png"
                    alt="Sialkot Stallionz Logo"
                    width={1440}
                    height={64}
                    className="absolute brightness-40 hidden sm:block lg:h-68 sm:h-85"
                />

                <div className='relative lg:ml-[104px] flex flex-col items-center sm:items-start'>
                    <Link href={"#"}>
                        <Image
                            src="/Sialkot-logo.svg"
                            alt="Sialkot Stallionz"
                            width={117}
                            height={120}
                            className="cursor-pointer"

                        />
                    </Link>
                    <p className='font-regular text-[14px] sm:ml-5 uppercase mt-4 text-center sm:text-left'>
                        © 2026 sialkot stallionz. <br />
                        OZ DEVELOPER Pvt. Ltd. <br />
                        All rights reserved.
                    </p>
                    <p className='font-light text-[12px] mt-3 sm:ml-5'>
                        SOCIAL MEDIA CHANNELS
                    </p>
                    <div className="flex mt-2 sm:ml-[19px] gap-[19px]">
                        {[
                            { icon: "/facebook.svg" },
                            { icon: "/twitter.svg" },
                            { icon: "/instagram.svg" },
                            { icon: "/youtube.svg" },
                            { icon: "/tiktok.svg" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="cursor-pointer"
                            >
                                <Image
                                    src={item.icon}
                                    alt={`${item.icon} icon`}
                                    width={18}
                                    height={18}
                                    className="relative"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='relative lg:ml-[100px] mt-0 sm:mt-7 text-center sm:text-left'>
                    <p className='font-bold text-[18px]'>
                        #SSTALLIONZ
                    </p>
                    <p className='font-regular text-[14px]'>
                        Pride | Power | Passion
                    </p>
                </div>

                <div className='relative lg:ml-[50px] mt-0 sm:mt-7 text-center sm:text-left'>
                    <p className='font-bold text-[18px]'>
                        Learn More
                    </p>
                    <p className='font-regular text-[14px]'>
                        <Link
                            href="/about-us"
                            className="hover:underline cursor-pointer"
                        >
                            About Us
                        </Link> <br />
                        Fixtures <br />Stallionz Store <br /> Stallionz Memberships <br />Stallionz TV <br />
                        <Link
                            href="/privacy-policy"
                            className="hover:underline cursor-pointer"
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </div>

                <div className='relative lg:mr-[104px] mt-0 sm:mt-7 flex flex-col items-center sm:items-start'>
                    <p className='font-bold text-[18px]'>
                        Our Newsletter
                    </p>
                    <p className='font-regular text-[14px] text-center sm:text-left'>
                        Subscribe to our newsletter to get our news & deals delivered to you.
                    </p>
                    <div className="flex flex-col items-center sm:items-start mt-5 xl:flex-row gap-2 w-full sm:w-auto">
                        <div className='flex-col'>
                        <input
                            type="email"
                            placeholder="Enter email to sign up"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#FFFFFF] rounded text-[#000000] px-2 focus:outline-none font-normal text-[12px] h-[34px] w-[215px] sm:w-[145px] lg:w-[215px] border"
                        />
                        {error && (
                            <p className="text-red-500 text-[11px] mt-1 sm:mt-0">
                                {error}
                            </p>
                        )}
                        </div>
                        <button
                            disabled={!email.trim()}
                            onClick={handleSubscribe}
                            className={`font-semibold text-[12px] h-[34px] w-[82px]
                                        rounded xl:ml-2 transition-colors
                                        ${
                                            email.trim()
                                            ? 'bg-[#E3A43E] hover:bg-[#d89520] cursor-pointer'
                                            : 'bg-[#E3A43E]/60 cursor-not-allowed'
                                        }`}
                        >
                            Subscribe
                        </button>

                        {/* Success Message */}
                        {/* {success && (
                            <p className="text-green-500 text-[11px] mt-1 sm:mt-0">
                                {success}
                            </p>
                        )} */}
                    </div>
                </div>
            </div>

            <div className='relative flex flex-col sm:flex-row justify-between items-center mt-[27px] pb-[40px] bg-[#000000] max-w-[1440px] mx-auto md:px-12 lg:px-0 sm:gap-0'>
                <p className='font-normal text-[12px] sm:ml-[113px] my-[10px] text-center'>
                    © 2025 Sialkot Stallionz. All rights reserved.
                </p>
                {/* <p className='font-normal text-[12px] sm:mr-[107px] my-[10px] text-center'>
                Privacy Policy    |    Terms & Conditions
            </p> */}

                <p className="font-normal text-[12px] sm:mr-[107px] my-[10px] text-center">
                    <Link
                        href="/privacy-policy"
                        className="hover:underline cursor-pointer"
                    >
                        Privacy Policy
                    </Link>

                    <span className="mx-2">|</span>

                    <Link
                        href="/terms-&-conditions"
                        className="hover:underline cursor-pointer"
                    >
                        Terms & Conditions
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Footer