import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

export default function CerezPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfa
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">
          Çerez Politikası
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Çerez Nedir?</h2>
              <p>
                Çerezler, web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır.
                Bu dosyalar, siteyi ziyaret ettiğinizde deneyiminizi iyileştirmek için kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Kullandığımız Çerez Türleri</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Zorunlu Çerezler: Sitenin temel işlevleri için gereklidir.</li>
                <li>Performans Çerezleri: Site performansını analiz etmek için kullanılır.</li>
                <li>İşlevsellik Çerezleri: Tercihlerinizi hatırlamak için kullanılır.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Çerez Yönetimi</h2>
              <p>
                Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz. 
                Ancak bazı çerezleri devre dışı bırakmak site işlevselliğini etkileyebilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Yaş Doğrulama Çerezi</h2>
              <p>
                {SITE_BRAND_NAME}, yaş doğrulama bilgisini localStorage&apos;da saklar. 
                Bu bilgi yalnızca siteye erişim için kullanılır ve üçüncü taraflarla paylaşılmaz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
