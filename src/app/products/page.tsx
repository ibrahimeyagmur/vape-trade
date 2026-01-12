"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { products, categories, searchProducts, getProductsByCategory } from "@/data/products"
import { ProductCard } from "@/components/ProductCard"
import { CategoryFilter } from "@/components/CategoryFilter"

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    let result = products

    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory)
    }

    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery)
      result = result.filter((p) => searchResults.some((sr) => sr.id === p.id))
    }

    return result
  }, [selectedCategory, searchQuery])

  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tighter">
            KOLEKSİYON
          </h1>
          <div className="h-px w-20 bg-white/20 mb-6" />
          <p className="text-white/40 text-lg uppercase tracking-[0.2em] font-light">
            VOZOL PREMIUM DENEYİMİ
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="ARAMA"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-12 py-4 bg-white/[0.03] border border-white/5 rounded-2xl text-white text-[10px] font-bold tracking-[0.2em] uppercase placeholder:text-white/20 focus:outline-none focus:bg-white/[0.05] focus:border-white/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em]">Sonuç Bulunamadı</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-16 w-64 bg-white/5 rounded-2xl mb-8" />
            <div className="h-4 w-48 bg-white/5 rounded-lg" />
          </div>
        </div>
      </main>
    }>
      <ProductsContent />
    </Suspense>
  )
}
