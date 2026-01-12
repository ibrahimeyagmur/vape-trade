"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-background" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl sm:text-8xl lg:text-[10rem] font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase"
          >
            <span className="text-gradient block">{SITE_BRAND_NAME}</span>
            <span className="block opacity-50">PREMIUM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/40 max-w-xl mx-auto mb-12 font-light tracking-wide uppercase"
          >
            Geleceğin teknolojisi, bugünün zarafetiyle buluşuyor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:bg-white/90 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                KOLEKSİYONU GÖR
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Aşağı Kaydır</span>
        <div className="w-[1px] h-12 bg-linear-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}
