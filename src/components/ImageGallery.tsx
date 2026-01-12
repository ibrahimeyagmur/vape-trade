"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  productName: string
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const validImages = images.filter((_, index) => !imageErrors.has(index))
  const displayImages = validImages.length > 0 ? images : [images[0]]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))
  }

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-white/[0.02] rounded-3xl overflow-hidden border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {imageErrors.has(currentIndex) ? (
              <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Görsel Yükleniyor</span>
              </div>
            ) : (
              <Image
                src={displayImages[currentIndex]}
                alt={`${productName} - ${currentIndex + 1}`}
                fill
                className="object-cover"
                onError={() => handleImageError(currentIndex)}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {displayImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {displayImages.length > 1 && (
        <div className="flex gap-3">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === index
                  ? "border-white ring-2 ring-white/10"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              {imageErrors.has(index) ? (
                <div className="w-full h-full bg-white/[0.02]" />
              ) : (
                <Image
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(index)}
                  sizes="80px"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
