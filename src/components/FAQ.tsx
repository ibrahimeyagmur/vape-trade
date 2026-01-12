"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "Ürünler orijinal mi?",
    answer: "Evet, tüm ürünlerimiz %100 orijinal ve yetkili distribütörlerden temin edilmektedir. Her ürün garantilidir.",
  },
  {
    question: "Kargo süresi ne kadar?",
    answer: "Siparişleriniz aynı gün kargoya verilir. İstanbul içi 1 gün, diğer illere 2-3 iş günü içinde teslim edilir.",
  },
  {
    question: "İade koşulları nelerdir?",
    answer: "Ürünlerimizde 14 gün içinde koşulsuz iade hakkınız bulunmaktadır. Detaylı bilgi için iade politikamızı inceleyebilirsiniz.",
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Tüm ödemeler SSL ile şifrelenerek güvence altındadır.",
  },
  {
    question: "21 yaşından küçükler sipariş verebilir mi?",
    answer: "Hayır, ürünlerimiz yalnızca 21 yaş ve üzeri bireylere satılmaktadır. Sipariş sırasında ve teslimat anında yaş doğrulaması yapılmaktadır.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-white/40 text-lg font-light uppercase tracking-widest text-sm">
            Merak edilenler hakkında bilgi edinin
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="group w-full flex items-center justify-between p-8 text-left cursor-pointer transition-colors hover:bg-white/[0.03]"
              >
                <span className="text-lg font-medium text-white pr-4 uppercase tracking-tight transition-colors group-hover:text-white/80">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-white/20 transition-transform duration-500 flex-shrink-0 group-hover:text-white/40 ${openIndex === index ? "rotate-180 text-white" : ""
                    }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-white/40 leading-relaxed font-light uppercase tracking-wide text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
