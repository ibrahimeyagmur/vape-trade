"use client"

import { motion } from "framer-motion"
import { categories } from "@/data/products"

interface CategoryFilterProps {
  selectedCategory: string | null
  onSelect: (category: string | null) => void
}

export function CategoryFilter({ selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => onSelect(null)}
        className={`relative px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
          selectedCategory === null
            ? "text-black"
            : "text-white/40 hover:text-white bg-white/[0.03] hover:bg-white/[0.08]"
        }`}
      >
        {selectedCategory === null && (
          <motion.div
            layoutId="category-pill"
            className="absolute inset-0 bg-white rounded-xl"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">Tümü</span>
      </button>
      
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onSelect(category.slug)}
          className={`relative px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
            selectedCategory === category.slug
              ? "text-black"
              : "text-white/40 hover:text-white bg-white/[0.03] hover:bg-white/[0.08]"
          }`}
        >
          {selectedCategory === category.slug && (
            <motion.div
              layoutId="category-pill"
              className="absolute inset-0 bg-white rounded-xl"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category.name}</span>
        </button>
      ))}
    </div>
  )
}
