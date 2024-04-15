"use client"
import UserAvatar from '@/components/user-avatar'
import { useContract } from '@/hooks/useContract'
import React from 'react'

const AdhaarAdmin = () => {

    const { allTrans } = useContract()

    return (
        <main className='min-h-screen text-muted bg-foreground w-full p-5 flex flex-col items-center'>
            <div className="h-[50rem] w-full    bg-grid-white/[0.2]  relative flex flex-col ">
            <p className="text-4xl sm:text-7xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                All Users
            </p>
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className='flex flex-col w-full gap-3 place-items-center items-center'>
                    {
                        allTrans ? (allTrans as any).map((item: any, index: any) => (
                            <UserAvatar kycHash={item[0]} key={index} />
                        )) : <div className='h-8 w-8 border-t-2 border-white rounded-3xl animate-spin m-auto'></div>
                    }
                </div>
            </div>
        </main>
    )
}

export default AdhaarAdmin