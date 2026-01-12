"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { formatPrice } from "@/config/site"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0

  const flavor = product.name.split(" – ")[1] || product.name

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/products/${product.category}/${product.slug}`}
        className="group block"
      >
        <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10">
          <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.01]">
            {hasDiscount && (
              <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded-full">
                -%{discountPercent}
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]" />
            
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/5 text-[10px] tracking-[0.3em] uppercase font-bold">No Image</span>
              </div>
            ) : (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                onError={() => setImageError(true)}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
          </div>

          <div className="p-8 flex flex-col flex-1">
            <p className="text-white/20 text-[10px] font-bold mb-3 uppercase tracking-[0.3em]">
              {product.categoryName}
            </p>
            <h3 className="text-white text-xl font-bold mb-6 line-clamp-1 group-hover:text-white/80 transition-colors uppercase tracking-tight">
              {flavor}
            </h3>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-white tracking-tighter">
                  {formatPrice(product.price)}
                </span>
                {hasDiscount && (
                  <span className="text-sm text-white/20 line-through tracking-tighter">
                    {formatPrice(product.compareAtPrice!)}
                  </span>
                )}
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 text-white group-hover:text-black transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
