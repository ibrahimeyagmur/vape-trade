"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ShieldX, Home } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

export default function AgeRestrictedPage() {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem("age_verified")
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative text-center max-w-md"
      >
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500/20 to-rose-500/20 mb-8">
          <ShieldX className="w-12 h-12 text-red-400" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Erişim Engellendi
        </h1>

        <p className="text-white/60 text-lg mb-8 leading-relaxed">
          {SITE_BRAND_NAME} sitesine erişim yalnızca 21 yaş ve üzeri bireyler içindir.
          Yasal düzenlemeler gereği bu içeriğe erişiminiz kısıtlanmıştır.
        </p>

        <button
          onClick={() => {
            localStorage.removeItem("age_verified")
            router.push("/")
          }}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Ana Sayfaya Dön
        </button>
      </motion.div>
    </main>
  )
}
