import AdhaarApi from "@/components/adhaar-api"
import FetchTrans from "@/components/fetch-transaction"

export default function Home() {
  return (
      <main className="bg-foreground text-muted">
        {/* <FetchTrans /> */}
        <AdhaarApi />
      </main>
  )
}

