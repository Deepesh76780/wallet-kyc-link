import React, { useEffect, useState } from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addHash } from '@/redux/features/user/userSlice';
import { useRouter } from 'next/navigation';

const UserAvatar = ({ kycHash }: { kycHash: string }) => {

    const [data, setData] = useState<any>();
    const dispatch = useDispatch();
    const router = useRouter()

    useEffect(() => {
        const data = () => {
            fetch(`https://harlequin-fashionable-marten-862.mypinata.cloud/ipfs/${kycHash}`)
                .then(response => response.json())
                .then(response => setData(response)).catch((err) => {
                    console.error(err)
                })
        }

        data()
    }, [kycHash])

    const handleClick = ()=>{
        dispatch(addHash(kycHash))
        router.push("/adhaar-user/dashboard")
    }

    return (
        data &&
            <Card className='p-4  bg-card w-[80%] h-[100px] gap-2 cursor-pointer hover:bg-slate-200' onClick={handleClick}>
                <CardTitle >{data.name}</CardTitle>
                <CardFooter className='gap-10 mt-6'>
                    <CardDescription>Address : {data.address}</CardDescription>
                    <CardDescription>Adhaar No :{data.Adhaar}</CardDescription>
                    <CardDescription>Phone No : {data.phone}</CardDescription>
                </CardFooter>
            </Card >
    )
}

export default UserAvatar