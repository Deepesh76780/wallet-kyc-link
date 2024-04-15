"use client"
import AdhaarApi from "@/components/adhaar-api"
import ExistingUser from "@/components/existing-user"
import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import UserPage from "@/components/userPage"
import { useState } from "react"

export default function Home() {

    const [user, setUser] = useState<null | "newUser" | "user">(null)

    const handleUser = (data: (null | "newUser" | "user")) => {
        setUser(data)
    }

    return (
        <main className="bg-foreground text-muted flex flex-col items-center  w-full min-h-screen justify-center">
            {user === "user" ?
                <ExistingUser /> :
                user === "newUser" ?
                    <AdhaarApi /> : <UserPage  handleUser={handleUser}/>
            }
        </main>
    )
}
