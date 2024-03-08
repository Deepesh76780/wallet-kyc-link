import AdhaarApi from "@/components/adhaar-api"
import FetchTrans from "@/components/fetch-transaction"
import { Toast, ToastProvider } from "@/components/ui/toast"

export default function Home() {
  return (
      <main className="bg-foreground text-muted">
        {/* <FetchTrans /> */}
        <AdhaarApi />
      </main>
  )
}

