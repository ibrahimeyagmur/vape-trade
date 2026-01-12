import Link from "next/link"
import { SITE_BRAND_NAME } from "@/config/site"

const legalLinks = [
  { href: "/kvkk", label: "KVKK" },
  { href: "/cerez", label: "Çerez Politikası" },
  { href: "/mesafeli-satis", label: "Mesafeli Satış" },
  { href: "/iade", label: "İade Koşulları" },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-black font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight uppercase">
                {SITE_BRAND_NAME}
              </span>
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed font-light uppercase tracking-wide text-xs">
              Premium kalitede ürünler ile tanışın. En iyi aromalar, en iyi fiyatlarla sizlerle. Geleceğin teknolojisi, bugünün zarafetiyle buluşuyor.
            </p>
          </div>

          <div>
            <h3 className="text-white text-[10px] font-bold mb-8 uppercase tracking-[0.3em]">Hızlı Bağlantılar</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/40 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/40 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">
                  Ürünler
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-[10px] font-bold mb-8 uppercase tracking-[0.3em]">Yasal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {SITE_BRAND_NAME}. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            Bu site yalnızca 21 yaş ve üzeri kullanıcılar içindir.
          </p>
        </div>
      </div>
    </footer>
  )
}
