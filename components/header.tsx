import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Header = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center  gap-[1rem]'>
            <div className="max-w-2xl mx-auto p-4 ">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Crypto Tracking Platform
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-5 text-sm text-center relative z-10">
                    Provides real-time oversight and comprehensive transaction tracking to security agencies and Users to manage there multiple transactions
                    in one place
                </p>
                <input
                    type="text"
                    placeholder="hi@iitnr.edu.in"
                    className="rounded-lg border border-neutral-800 p-2 focus:ring-2 text-slate-400 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                />
            </div>
        </div>
    )
}

export default Header