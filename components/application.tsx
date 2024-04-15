import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MeteorsDemo } from './meterosDemo'

const Application = () => {
    return (
        <div className='h-screen flex flex-col justify-center antialiased gap-[1rem]'>
            <div className="max-w-2xl mx-auto p-4 ">
                <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Primary Application Scenarios
                </h1>
                <div className='grid grid-cols-2 gap-14 mt-24'>
                    <MeteorsDemo title="" desc="To enable linking Know Your Customer (KYC) data to all user wallets." />
                    <MeteorsDemo title="" desc="To empower users to manage all their cryptocurrency wallets through a unified platform." />
                    <MeteorsDemo title="" desc="To provide a comprehensive view of their digital asset holdings and activity." />
                    <MeteorsDemo title="" desc="To cites statistics on cryptocurrency-related money laundering to highlight the urgency of effective solutions." />
                </div>
            </div>
        </div>
    )
}

export default Application