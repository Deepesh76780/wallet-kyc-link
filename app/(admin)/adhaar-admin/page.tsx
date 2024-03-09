"use client"
import UserAvatar from '@/components/user-avatar'
import { useContract } from '@/hooks/useContract'
import React from 'react'

const page = () => {

    const { allTrans } = useContract()

    return (
        <main className='min-h-screen text-muted bg-foreground w-full p-5 flex flex-col items-center'>
            <h1 className='text-center text-5xl mb-8'>All Users</h1>
            <div className='flex flex-col w-full gap-3 place-items-center items-center'>
                {
                    allTrans ? (allTrans as any).map((item: any, index: any) => (
                        <UserAvatar kycHash={item[0]} key={index} />
                    )) : <div className='h-8 w-8 border-t-2 border-white rounded-3xl animate-spin m-auto'></div>
                }
            </div>
        </main>
    )
}

export default page