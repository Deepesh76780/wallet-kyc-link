import Application from "@/components/application"
import { BackgroundBeams } from "@/components/backgroundBeams"
import Header from "@/components/header"
import Pitch from "@/components/pitch"


export default function Home() {
  return (
    <div className="min-h-screen w-full  bg-neutral-950 relative ">
      <Header/>
      <Application/>
      <Pitch/>
      <BackgroundBeams />
    </div>
  )
}

