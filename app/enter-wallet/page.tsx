"use client"
import React, { useEffect, useState } from 'react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Button } from '@/components/ui/button'
import { useAccount, useDisconnect } from 'wagmi'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { ethers } from "ethers"
import KycAbi from "../../artifacts/contracts/kyc.sol/KycLink.json"
import Link from 'next/link'
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient"





const EnterWallet = () => {

    const [account, setAccount] = useState(null)
    const [Instance, setContractInstance] = useState<any>()


    const { open } = useWeb3Modal()
    const { address } = useAccount()
    const user = useSelector((state: RootState) => state.user.value)
    const KycHash = useSelector((state: RootState) => state.user.KycHash)
    const { disconnect } = useDisconnect()
    const router = useRouter()

    useEffect(() => {
        const web3Handler = async () => {

            let provider;
            let signer = null;

            if ((window as any).ethereum == null) {
                console.log("MetaMask not installed; using read-only defaults")
                provider = ethers.getDefaultProvider()
            }
            else {
                const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0])
                provider = new ethers.BrowserProvider((window as any).ethereum)
                signer = await provider.getSigner();

                await (window as any).ethereum.on('chainChanged', (chainId: any) => {
                    (window as any).location.reload();
                })

                await (window as any).ethereum.on('accountsChanged', async function (accounts: any) {
                    setAccount(accounts[0])
                    await web3Handler()
                })

                const address = "0x6adFA887953927B834Cae6a637f94D91B0a343E0";
                var contract = new ethers.Contract(address, KycAbi["abi"], signer);
                setContractInstance(contract);
            }
        }

        web3Handler()
    }, [])

    useEffect(() => {
        const contractInstance = async () => {
            if (Instance) {
                const tx = await (Instance as any)?.addWallet(KycHash, address)
                await tx.wait(1)
                const tx1 = await (Instance as any)?.getWallet(KycHash)
                const result = await tx1
            }
        }

        console.log(KycHash + ":" + address)
        contractInstance()
    }, [address])

    return (

        <main className='bg-foreground text-muted min-h-screen flex flex-col items-center w-full justify-center'>
            {
                user ?
                    <div className='flex gap-2'>
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-blacktext-white flex items-center space-x-2"
                        >
                            <div onClick={() => open({ view: 'Connect' })}>
                                Connect All Wallet
                            </div>
                        </HoverBorderGradient>
                        <Link href={"/adhaar-user/dashboard"}>
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-blacktext-white flex items-center space-x-2"
                            >
                                <button type="submit">Go To DashBoard</button>
                            </HoverBorderGradient>
                        </Link>
                    </div>
                    :
                    <Button onClick={() => router.replace("/")}>
                        retry
                    </Button>
            }
        </main>
    )
}

export default EnterWallet