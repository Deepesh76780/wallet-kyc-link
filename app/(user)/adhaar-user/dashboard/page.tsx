"use client"
import React from 'react'
import FetchTrans from '@/components/fetch-transaction';
import { useContract } from '@/hooks/useContract';
import { Spotlight } from '@/components/ui/spotlight';


const UserDashboard = () => {


    const { resultl, userData } = useContract()



    return (
        <div className='min-h-screen text-muted bg-foreground w-full flex'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            {resultl.length > 0 ?
                <div className='flex w-full'>
                    <div className='max-h-[100vh] overflow-y-scroll w-[70%] overflow-x-hidden custom'>
                        <p className="text-3xl sm:text-6xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                            Transactions
                        </p>
                        {resultl.map((item, index) => {
                            return <FetchTrans address={item} key={index} />
                        })}
                    </div>
                    <div className='max-h-[100vh] w-[30%]'>
                        <p className="text-3xl sm:text-6xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                            Profile
                        </p>
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

export default UserDashboard