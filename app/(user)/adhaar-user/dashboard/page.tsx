"use client"
import React from 'react'
import FetchTrans from '@/components/fetch-transaction';
import { useContract } from '@/hooks/useContract';


const page = () => {

    const { resultl } = useContract()



    return (
        <div className='min-h-screen text-muted bg-foreground w-full p-5'>
            <h1 className='text-center text-5xl mb-8'>Transactions</h1>
            {resultl.length > 0 ? resultl.map((item, index) => {
                return <FetchTrans address={item} key={index} />
            }) : <div className='h-8 w-8 border-t-2 border-white rounded-3xl animate-spin m-auto'></div>}
        </div>
    )
}

export default page