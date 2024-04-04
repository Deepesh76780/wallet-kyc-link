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
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
    hash: z.number().min(10, {
        message: "Invalid Phone Number"
    })
})

function InputOTPForm() {

    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const router = useRouter()


    const { toast } = useToast();
    const [otpSend, setSendOtp] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })


    function OnCaptchVerify() {
        if (!(window as any)?.recaptchaVerifier) {
            (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response: any) => {
                },
                'expired-callback': () => {
                }
            });
        }
    }


    const PostOtp = async (data: FormData) => {

        const otp = data.get("pin"); 
        
        (window as any).confirmationResult.confirm(otp).then(async (res: any) => {
            dispatch(addUser(res.user))
            router.push("/enter-wallet")
        }).catch((err: Error) => {
            console.log(err)
        })
    }

    const getOtp = async (data: FormData) => {

        const KycHash = data.get("hash")
        dispatch(addHash(KycHash))

        OnCaptchVerify();
        fetch(`https://harlequin-fashionable-marten-862.mypinata.cloud/ipfs/${KycHash}`)
            .then(response => response.json())
            .then(response => {  
                const appVerifier = (window as any).recaptchaVerifier;
                const formatPh = '+91' + response.phone

                signInWithPhoneNumber(auth, formatPh, appVerifier)
                    .then((confirmationResult) => {
                        (window as any).confirmationResult = confirmationResult;
                        toast({
                            title: "OTP SEND TO REGISTERED MOBILE NUMBER",
                        })
                        setSendOtp(true)
                    }).catch((error) => {
                        console.log(error)
                    });
            }
            )
            .catch(err => console.error(err));
    }


    return (
        <main className="flex min-h-screen w-full  flex-col items-center justify-between p-24">

            <Form {...form}>
                {otpSend ?
                    <form action={PostOtp} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>One-Time Password</FormLabel>
                                    <FormControl>
                                        <InputOTP
                                            maxLength={6}
                                            render={({ slots }) => (
                                                <InputOTPGroup>
                                                    {slots.map((slot, index) => (
                                                        <InputOTPSlot key={index} {...slot} />
                                                    ))}
                                                </InputOTPGroup>
                                            )}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the one-time password sent to your phone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Submit</Button>
                    </form>
                    :
                    <form action={getOtp} className="w-2/3 space-y-6">
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
                        <div id="recaptcha-container"></div>
                        <Button type="submit">Get Otp</Button>
                    </form>
                }
            </Form>
        </main>
    )
}


export default InputOTPForm