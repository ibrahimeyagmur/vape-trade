"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/data/products"
import { ProductCard } from "./ProductCard"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts(6)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-white/40 text-lg font-light uppercase tracking-widest text-sm">
              En popüler ve beğenilen ürünlerimiz
            </p>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-white font-medium transition-colors text-sm tracking-widest uppercase"
          >
            Tüm Ürünler
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
