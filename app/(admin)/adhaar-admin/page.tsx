"use client"
import { useContract } from '@/hooks/useContract'
import React from 'react'

const page = () => {

    const { allTrans } = useContract()
    allTrans && console.log(allTrans[0][0])
    return (
        <main className='min-h-screen text-muted bg-foreground w-full p-5 flex flex-col items-center'>
        <h1 className='text-center text-5xl mb-8'>All Users</h1>
            {
                allTrans ? (allTrans as any).map((item: any, index: any) => (
                    <h1 key={index}>{item[0]}</h1>
                )) : <div className='h-8 w-8 border-t-2 border-white rounded-3xl animate-spin m-auto'></div>
            }
        </main>
    )
}

export default page