"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, ShoppingBag } from "lucide-react"

export default function CheckoutSuccessPage() {
    return (
        <main className="min-h-screen bg-black pt-28 pb-20 flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tighter uppercase">
                        Ödeme Başarılı
                    </h1>
                    <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
                    <p className="text-white/40 text-lg mb-8 font-light">
                        Siparişiniz başarıyla alındı. En kısa sürede kargoya verilecektir.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                >
                    <Link
                        href="/products"
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-white/90 text-black font-bold text-[11px] uppercase tracking-[0.2em] rounded-2xl transition-all duration-300"
                    >
                        <ShoppingBag className="w-4 h-4" />
                        Alışverişe Devam Et
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-2xl transition-all duration-300"
                    >
                        Ana Sayfaya Dön
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 text-white/20 text-xs uppercase tracking-widest"
                >
                    Teşekkür ederiz
                </motion.p>
            </div>
        </main>
    )
}
