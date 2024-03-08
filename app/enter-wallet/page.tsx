"use client"
import React, { useEffect } from 'react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Button } from '@/components/ui/button'
import { useAccount, useDisconnect } from 'wagmi'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'



const page = () => {

    const { open } = useWeb3Modal()
    const { address } = useAccount()
    const user = useSelector((state: RootState) => state.user.value)
    const KycHash = useSelector((state: RootState) => state.user.KycHash)
    const { disconnect } = useDisconnect()
    const router = useRouter()

    useEffect(() => {
        console.log(KycHash + ":" + address)
    }, [address])

    return (

        <main className='bg-foreground text-muted min-h-screen flex flex-col items-center w-full justify-center'>
            {
                user ?
                    <div className='flex gap-2'>
                        <Button onClick={() => open({ view: 'Connect' })}>Connect All Wallet</Button>
                        <Button onClick={() => disconnect()}>Disconnect</Button>
                    </div>
                    :
                    <Button onClick={() => router.replace("/")}>
                        retry
                    </Button>
            }
        </main>
    )
}

export default page