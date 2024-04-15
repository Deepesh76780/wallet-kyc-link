import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverBorderGradient } from './ui/hover-border-gradient'

const Pitch = () => {
    return (
        <div className='h-screen flex flex-col justify-center antialiased gap-[1rem]'>
            <div className="max-w-2xl mx-auto p-4 ">
                <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    The Ultimate Tracking Platform for Your Crypto Journey With KYC Integration
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-5 text-sm text-center relative z-10">
                   Try Now &#x2197;
                </p>
            </div>
            <div className="flex gap-4 mx-auto relative z-10">
                <Link href={"/adhaar-user"}>
                    <div className="flex justify-center text-center ">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-blacktext-white flex items-center space-x-2"
                        >
                            <span>User</span>
                        </HoverBorderGradient>
                    </div>
                </Link>
                <Link href={"/adhaar-admin"}>
                    <div className="flex justify-center text-center ">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-blacktext-white flex items-center space-x-2"
                        >
                            <span>Admin</span>
                        </HoverBorderGradient>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Pitch