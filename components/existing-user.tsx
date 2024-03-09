"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config"

import { useSelector, useDispatch } from 'react-redux'
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
            hash:"" 
        },
    })

    const helper = async (data: FormData) => {
        const KycHash = data.get("hash")
        dispatch(addHash(KycHash))
        router.replace("/adhaar-user/dashboard")
    }


    return (
        <main className="flex min-h-screen w-full  flex-col items-center justify-between p-24">

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
                        <Button type="submit">Go to Dashboard</Button>
                    </form>
            </Form>
        </main>
    )
}


export default ExistingUser