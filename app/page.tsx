import { BackgroundBeams } from "@/components/backgroundBeams"
import Header from "@/components/header"


export default function Home() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased gap-[1rem]">
      <Header/>
      <BackgroundBeams />
    </div>
  )
}

