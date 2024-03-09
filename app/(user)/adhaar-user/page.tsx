"use client"
import AdhaarApi from "@/components/adhaar-api"
import ExistingUser from "@/components/existing-user"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {

    const [user, setUser] = useState<null | "newUser" | "user">(null)

    return (
        <main className="bg-foreground text-muted flex flex-col items-center  w-full min-h-screen justify-center">
            {user === "user" ?
                <ExistingUser /> :
                user === "newUser" ?
                    <AdhaarApi /> : <div className="flex gap-8 h-full">
                        <Button variant={"secondary"} onClick={() => setUser("newUser")}>
                            New User
                        </Button>
                        <Button variant={"secondary"} onClick={() => setUser("user")}>
                            Existing User
                        </Button>
                    </div>
            }
        </main>
    )
}
