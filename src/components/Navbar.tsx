"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/products", label: "Ürünler" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-105">
              <span className="text-black font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight uppercase">
              {SITE_BRAND_NAME}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-xs font-bold transition-colors relative group uppercase tracking-[0.2em]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-white/90 text-black text-[10px] font-bold rounded-xl transition-all duration-300 uppercase tracking-widest"
            >
              <ShoppingBag size={14} />
              <span>Mağaza</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-4 bg-white text-black text-[10px] font-bold rounded-xl uppercase tracking-widest"
              >
                <ShoppingBag size={14} />
                <span>Mağaza</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
