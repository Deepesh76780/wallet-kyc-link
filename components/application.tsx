import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Application = () => {
    return (
        <div className='h-screen flex flex-col justify-center antialiased gap-[1rem]'>
            <div className="max-w-2xl mx-auto p-4 ">
                <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Primary Application Scenarios
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-5 text-sm text-center relative z-10">
                    Provides real-time oversight and comprehensive transaction tracking to security agencies and Users to manage there multiple transactions
                    in one place
                </p>
                <input
                    type="text"
                    placeholder="hi@manuarora.in"
                    className="rounded-lg border border-neutral-800 p-2 focus:ring-2 text-slate-400 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                />
            </div>
            <div className="flex mt-5 gap-4 mx-auto relative z-10">
                <Link href={"/adhaar-user"}>
                    <Button variant={"secondary"} >
                        User
                    </Button>
                </Link>
                <Link href={"/adhaar-admin"} >
                    <Button variant={"secondary"}>
                        Admin
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Application