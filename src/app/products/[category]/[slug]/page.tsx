"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Check, Loader2 } from "lucide-react"
import { getProductBySlug, products } from "@/data/products"
import { formatPrice } from "@/config/site"
import { ImageGallery } from "@/components/ImageGallery"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const category = params.category as string
  const slug = params.slug as string
  const product = getProductBySlug(category, slug)

  if (!product) {
    return (
      <main className="min-h-screen bg-black pt-28 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Ürün bulunamadı</h1>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ürünlere Dön
          </Link>
        </div>
      </main>
    )
  }

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0

  const flavor = product.name.split(" – ")[1] || product.name

  const handleBuyNow = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
      }
    } catch (error) {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.2em]"
          >
            <ArrowLeft className="w-4 h-4" />
            Koleksiyona Dön
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <ImageGallery images={product.images} productName={product.name} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                {product.categoryName}
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tighter uppercase">
                {flavor}
              </h1>
              <div className="h-px w-20 bg-white/20 mb-8" />
              <p className="text-white/40 text-lg leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-5xl font-bold text-white tracking-tighter">
                {formatPrice(product.price)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-2xl text-white/20 line-through tracking-tighter">
                    {formatPrice(product.compareAtPrice!)}
                  </span>
                  <span className="px-4 py-1.5 bg-white text-black text-[10px] font-bold rounded-full uppercase tracking-widest">
                    %{discountPercent} İNDİRİM
                  </span>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-white/30 text-[10px] font-bold uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-8 space-y-6">
              <button
                onClick={handleBuyNow}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-[12px] uppercase tracking-[0.3em] rounded-2xl transition-all duration-500 shadow-2xl shadow-white/5"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    İŞLENİYOR
                  </>
                ) : showSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    YÖNLENDİRİLİYORSUNUZ
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    SATIN AL
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 text-white/20">
                <div className="h-px flex-1 bg-white/5" />
                <p className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  GÜVENLİ ÖDEME
                </p>
                <div className="h-px flex-1 bg-white/5" />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">ÜRÜN ÖZELLİKLERİ</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/40 text-sm">
                  <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  %100 Orijinal Ürün
                </li>
                <li className="flex items-center gap-4 text-white/40 text-sm">
                  <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  Hızlı Kargo
                </li>
                <li className="flex items-center gap-4 text-white/40 text-sm">
                  <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  14 Gün İade Garantisi
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
