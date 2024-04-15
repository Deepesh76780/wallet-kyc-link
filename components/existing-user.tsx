"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config"

import { useSelector, useDispatch } from 'react-redux'
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import type { RootState } from "../redux/store"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "./ui/input"
import { useState } from "react";
import { addHash, addUser } from "@/redux/features/user/userSlice";

const FormSchema = z.object({
    hash: z.string().min(10, {
        message: "Invalid Adhaar Hash"
    })
})

function ExistingUser() {

    const dispatch = useDispatch()
    const router = useRouter()


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            hash: ""
        },
    })

    const helper = async (data: FormData) => {
        const KycHash = data.get("hash")
        dispatch(addHash(KycHash))
        router.replace("/adhaar-user/dashboard")
    }


    return (
        <main className='min-h-screen text-muted bg-foreground w-full p-5 flex flex-col items-center'>
            <div className="h-[50rem] w-full    bg-grid-white/[0.2]  relative flex flex-col items-center pt-12">

                <div className="shadow-xl bg-gray-900 border border-gray-800 w-[80%] p-4 opacity-80">
                    <Form {...form}>
                        <form action={helper} className="w-2/3 space-y-6">
                            <FormField
                                control={form.control}
                                name="hash"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter Adhaar Hash</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="text-black" />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter the adhaar ID
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-blacktext-white flex items-center space-x-2"
                            >
                                <button type="submit">Go To Dashboard</button>
                            </HoverBorderGradient>
                        </form>
                    </Form>
                </div>
            </div>
        </main>
    )
}


export default ExistingUser