"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories } from "@/data/products"

export function Categories() {
  return (
    <section id="categories" className="py-32 relative bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
            KOLEKSİYONLAR
          </h2>
          <div className="w-20 h-[1px] bg-white/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Link
                href={`/products?category=${category.slug}`}
                className="group block relative h-full"
              >
                <div className="glass glass-hover p-12 h-full border-none flex flex-col">
                  <span className="text-white/20 text-6xl font-bold mb-8 transition-colors group-hover:text-white/40">
                    0{index + 1}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">
                    {category.name}
                  </h3>
                  
                  <p className="text-white/40 text-sm font-light leading-relaxed uppercase tracking-wide mb-8">
                    {category.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors">
                    KEŞFET
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
