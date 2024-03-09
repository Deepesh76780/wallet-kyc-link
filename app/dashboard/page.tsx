"use client"
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import KycAbi from "../../artifacts/contracts/kyc.sol/KycLink.json"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import FetchTrans from '@/components/fetch-transaction';


const page = () => {

    const [account, setAccount] = useState();
    const [resultl, setResult] = useState([]);
    // const KycHash = useSelector((state: RootState) => state.user.KycHash)
    const KycHash = "Qme3jnyb5oQ6Jgya5fD53MkgAPXbvi21uExGweUmLiwvBj";

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

                const address = "0x7f83A5322731c14a1551e342CC36a6496701ae16";
                var contract = new ethers.Contract(address, KycAbi["abi"], signer);
                const tx1 = await contract.getWallet(KycHash)
                const result = await tx1
                setResult(result)
            }
        }

        web3Handler()
    }, [])


    return (
        <div className='min-h-screen text-muted bg-foreground w-full '>
            <h1 className='text-center mb-9'>Transaction</h1>
            {resultl.length > 0 ? resultl.map((item, index) => {
                return <FetchTrans address={item} key={index} />
            }) : <div className='h-8 w-8 border-t-2 border-white rounded-3xl animate-spin m-auto'></div>}
        </div>
    )
}

export default page