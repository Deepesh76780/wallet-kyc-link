import React from 'react'
import { Button } from './ui/button'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { WavyBackground } from './ui/wavy-background'

const UserPage = ({ handleUser }: { handleUser: (data: null | "newUser" | "user") => void }) => {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">

            <div className="flex gap-8 h-full">
                <div className="flex justify-center text-center " onClick={() => handleUser("newUser")}>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-blacktext-white flex items-center space-x-2"
                    >
                        <span>Register</span>
                    </HoverBorderGradient>
                </div>
                <div className="flex justify-center text-center " onClick={() => handleUser("user")}>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-blacktext-white flex items-center space-x-2"
                    >
                        <span>Sign In</span>
                    </HoverBorderGradient>
                </div>
            </div>
        </WavyBackground>
    )
}

export default UserPage