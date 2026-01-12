"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { SITE_BRAND_NAME } from "@/config/site"

export function AgeGate({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const verified = localStorage.getItem("age_verified")
    if (verified === "true") {
      setIsVerified(true)
    } else {
      setIsVerified(false)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("age_verified", "true")
    setIsVerified(true)
  }

  const handleDeny = () => {
    router.push("/age-restricted")
  }

  if (isVerified === null) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    )
  }

  if (!isVerified) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-10 max-w-md w-full border border-white/10 shadow-2xl"
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-30" />
            
            <div className="relative text-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white text-black mb-6 shadow-xl"
              >
                <span className="text-4xl font-bold">21+</span>
              </motion.div>

              <motion.h1
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-white mb-3 tracking-tight"
              >
                {SITE_BRAND_NAME}
              </motion.h1>

              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/70 mb-8 text-lg leading-relaxed"
              >
                Bu siteye erişim için 21 yaşından büyük olmanız gerekmektedir.
              </motion.p>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <button
                  onClick={handleVerify}
                  className="w-full py-4 px-6 bg-white hover:bg-white/90 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  21+ Yaşındayım
                </button>
                <button
                  onClick={handleDeny}
                  className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 text-white/80 font-medium rounded-xl border border-white/10 transition-all duration-300"
                >
                  21'den Küçüğüm
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-xs text-white/40"
              >
                Devam ederek yasal sorumluluk taşıdığınızı kabul edersiniz.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return <>{children}</>
}
