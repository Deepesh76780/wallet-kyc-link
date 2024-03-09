import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-foreground text-muted min-h-screen flex flex-col justify-evenly place-items-center">
      <h1 className="text-8xl text-primary">Welcome To <span className="text-orange-300">K</span>tr<span className="text-slate-300">Y</span>ack<span className="text-green-300">C</span></h1>
      <div className="flex gap-8">
        <Link href={"/adhaar-user"}>
          <Button variant={"secondary"}>
            User
          </Button>
        </Link>
        <Link href={"/adhaar-admin"}>
          <Button variant={"secondary"}>
            CBI
          </Button>
        </Link>
      </div>
      <h1 className="text-muted-foreground">Who are You ?</h1>
    </main>
  )
}

