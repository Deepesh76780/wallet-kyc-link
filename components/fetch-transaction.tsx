"use client"
import React from 'react'
import { useState,useEffect } from 'react';

const FetchTrans = () => {

    const [data, setData] = useState({
        result: []
    });

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(`https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=0x1C00525B937F313a66322FFe1E70751951a31D00&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.ETHER_API}`)
            const response = await data.json();
            setData(response)
        }

        fetchData();
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {
                data && data.result?.map((item: any, index: number) => (
                    <li key={index}>{item.blockNumber}</li>
                ))
            }
        </main>
    );
}

export default FetchTrans;