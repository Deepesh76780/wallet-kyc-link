"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import TransCard from './trans-card';

const FetchTrans = ({ address }: { address: string }) => {

    const [data, setData] = useState([]);
    const PolyUrl = `https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.POLYGON_API}`
    const EthUrl = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.ETHER_API}`
    const dogeCoin = `http://explorer-testnet.dogechain.dog/api?module=account&action=txlist&address=${address}`

    useEffect(() => {
        const fetchData = async () => {
            const dogeData = await fetch(dogeCoin)
            const PolyData = await fetch(PolyUrl)
            const EthData = await fetch(EthUrl)
            const dogeDataresponse = await dogeData.json();
            const PolyDataResponse = await PolyData.json();
            const EthDataResponse = await EthData.json();
            const newArray: any = [...dogeDataresponse.result, ...PolyDataResponse.result, ...EthDataResponse.result]
            setData(newArray)
        }

        fetchData();
    }, [])


    return (
        <main className="flex min-h-screen  flex-col items-center justify-between p-24">
            {
                data && data?.map((item: any, index: number) => (
                    <TransCard data={item} key={index} />
                ))
            }
        </main>
    );
}

export default FetchTrans;