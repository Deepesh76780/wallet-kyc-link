"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config"

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
import { toast } from "@/components/ui/use-toast"
import { Input } from "./ui/input"

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
    number: z.number().min(10, {
        message: "Invalid Phone Number"
    })
})

function InputOTPForm() {
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
                    // Response expired. Ask user to solve reCAPTCHA again.
                    // ...
                }
            });
        }
    }
    // function onSubmit(data: z.infer<typeof FormSchema>) {
    //     toast({
    //         title: "You submitted the following values:",
    //         description: (
    //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //                 <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //             </pre>
    //         ),
    //     })
    // }

    const PostOtp = async (data: FormData) => {

        const otp = data.get("pin");

        (window as any).confirmationResult.confirm(otp).then(async (res: any) => {
            console.log(res.user)
        }).catch((err: Error) => {
            console.log(err)
        })
    }

    const getOtp = async (data: FormData) => {
        OnCaptchVerify();



        const appVerifier = (window as any).recaptchaVerifier;
        const formatPh = '+91' + data.get("number")

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                (window as any).confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log(error)
            });
    }


    return (
        <Form {...form}>
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
            <form action={getOtp} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Enter Phone Number</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="+91" className="text-black" />
                            </FormControl>
                            <FormDescription>
                                Please enter the one-time password sent to your phone.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div id="recaptcha-container"></div>
                <Button type="submit">Get Otp</Button>
            </form>
        </Form>
    )
}


export default InputOTPForm