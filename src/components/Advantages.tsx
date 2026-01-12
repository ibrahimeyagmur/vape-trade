"use client"

import { motion } from "framer-motion"
import { Truck, Shield, CreditCard, Headphones, Zap, Award } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

const advantages = [
  {
    icon: Truck,
    title: "HIZLI TESLİMAT",
    description: "Siparişleriniz aynı gün kargoya verilir.",
  },
  {
    icon: Shield,
    title: "ORİJİNAL ÜRÜN",
    description: "%100 orijinal ve garantili ürünler.",
  },
  {
    icon: CreditCard,
    title: "GÜVENLİ ÖDEME",
    description: "SSL şifreli güvenli ödeme altyapısı.",
  },
  {
    icon: Headphones,
    title: "7/24 DESTEK",
    description: "Her zaman yanınızdayız.",
  },
  {
    icon: Zap,
    title: "PREMİUM KALİTE",
    description: "En üst seviye ürün kalitesi.",
  },
  {
    icon: Award,
    title: "MEMNUNİYET",
    description: "Binlerce mutlu müşteri.",
  },
]

export function Advantages() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
            <span className="opacity-20 block text-2xl sm:text-3xl mb-2">NEDEN</span>
            {SITE_BRAND_NAME}?
          </h2>
          <div className="w-20 h-[1px] bg-white/20" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-8 p-5 w-fit rounded-2xl glass transition-all duration-500 group-hover:bg-white group-hover:text-black">
                  <advantage.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white mb-4 tracking-[0.2em] uppercase transition-colors group-hover:text-white/80">
                  {advantage.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed uppercase tracking-wide">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
