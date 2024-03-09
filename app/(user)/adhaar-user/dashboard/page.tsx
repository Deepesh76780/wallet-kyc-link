"use client"
import React from 'react'
import FetchTrans from '@/components/fetch-transaction';
import { useContract } from '@/hooks/useContract';


const page = () => {


    const { resultl, userData } = useContract()



    return (
        <div className='min-h-screen text-muted bg-foreground w-full flex'>
            {resultl.length > 0 ?
                <div className='flex w-full'>
                    <div className='max-h-[100vh] overflow-y-scroll w-[70%] overflow-x-hidden custom'>
                        <h1 className='text-center text-5xl mb-8 mt-5'>Transactions</h1>
                        {resultl.map((item, index) => {
                            return <FetchTrans address={item} key={index} />
                        })}
                    </div>
                    <div className='max-h-[100vh] w-[30%]'>
                        <h1 className='text-center text-5xl mb-8 mt-5'>User Details</h1>
                        {
                            userData &&
                            <div className='text-center'> 
                                <h1>name : {userData.name}</h1>
                                <h1>phone : {userData.phone}</h1>
                                <h1>address : {userData.address}</h1>
                                <h1>Adhaar : {userData.Adhaar}</h1>
                            </div>
                        }
                    </div>
                </div>

                : <div className='h-8 w-8 border-t-2 border-white rounded-3xl animate-spin m-auto'></div>
            }

        </div>
    )
}

export default page