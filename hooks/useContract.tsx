"use client"
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import KycAbi from "../artifacts/contracts/kyc.sol/KycLink.json"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


export const useContract = () => {

    const [resultl, setResult] = useState([]);
    const KycHash = useSelector((state: RootState) => state.user.KycHash)

    useEffect(() => {
        const web3Handler = async () => {

            let provider;
            let signer = null;

            if ((window as any).ethereum == null) {
                console.log("MetaMask not installed; using read-only defaults")
                provider = ethers.getDefaultProvider()
            }
            else {
                provider = new ethers.BrowserProvider((window as any).ethereum)
                signer = await provider.getSigner();

                await (window as any).ethereum.on('chainChanged', (chainId: any) => {
                    (window as any).location.reload();
                })

                await (window as any).ethereum.on('accountsChanged', async function (accounts: any) {
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

    return {resultl}
}