import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

export default function IadePage() {
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
          İade ve Değişim Koşulları
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">İade Süresi</h2>
              <p>
                Ürünü teslim aldığınız tarihten itibaren 14 gün içinde iade talebinde bulunabilirsiniz.
                Bu süre içinde herhangi bir gerekçe belirtmeksizin cayma hakkınızı kullanabilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">İade Koşulları</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Ürün kullanılmamış ve orijinal ambalajında olmalıdır.</li>
                <li>Ürün etiketi çıkarılmamış olmalıdır.</li>
                <li>Fatura veya satış belgesi iade ile birlikte gönderilmelidir.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">İade Prosedürü</h2>
              <p>
                1. Müşteri hizmetleri ile iletişime geçin ve iade talebinizi bildirin.
              </p>
              <p>
                2. Onay aldıktan sonra ürünü belirtilen adrese gönderin.
              </p>
              <p>
                3. Ürün kontrolünden sonra ödemeniz 14 iş günü içinde iade edilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">İade Edilemeyecek Ürünler</h2>
              <p>
                Hijyen sebebiyle açılmış ve kullanılmış ürünler iade edilemez.
                Üretici ambalajı açılmış ürünlerde iade talebi değerlendirmeye tabidir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Kargo Ücreti</h2>
              <p>
                İade kargo ücreti, cayma hakkı kullanımında müşteriye aittir.
                Ayıplı veya hatalı ürün tesliminde kargo ücreti {SITE_BRAND_NAME} tarafından karşılanır.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
