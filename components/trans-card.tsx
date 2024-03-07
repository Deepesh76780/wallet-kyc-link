import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const TransCard = ({ data }: { data: any }) => {

    const currentTime: any = new Date().getTime();
    const pastTime: any = new Date(data.timeStamp * 1000).getTime();
    const timeDifference = currentTime - pastTime;
    const minutesAgo = Math.floor(timeDifference / (1000 * 60))
    return (
        <Card className='border-4 border-muted w-[80%] m-2'>
            <CardHeader>
                <CardDescription>blockhash: {data.blockHash} </CardDescription>
            </CardHeader>
            <CardContent>
                <p>from : {data.from}</p>
                <p>to : {data.to}</p>
                <p>value : {(data.value / 1e18) * 2000}</p>
            </CardContent>
            <CardFooter className='relative'>
                <p className='w-fit border-2 border-muted-foreground h-fit p-2 rounded-lg right-0 absolute'>{minutesAgo} min ago</p>
            </CardFooter>
        </Card>
    )
}

export default TransCard