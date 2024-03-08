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

        <main className='bg-foreground text-muted min-h-screen flex items-center place-items-center min-w-screen'>
            {
                user ?
                    <div className='flex'>
                        <Button onClick={() => open({ view: 'Connect' })}>Connect Wallet</Button>
                        <Button onClick={() => disconnect()}>Disconnect</Button>
                    </div>
                    :
                    <Button onClick={() => router.push("/")}>
                        retry
                    </Button>
            }
        </main>
    )
}

export default page