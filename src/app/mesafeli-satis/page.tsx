import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

export default function MesafeliSatisPage() {
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
          Mesafeli Satış Sözleşmesi
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Taraflar</h2>
              <p>
                İşbu sözleşme, {SITE_BRAND_NAME} (Satıcı) ile siteyi kullanan gerçek veya tüzel kişi (Alıcı) 
                arasında elektronik ortamda akdedilmiştir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Sözleşmenin Konusu</h2>
              <p>
                Bu sözleşme, Alıcı&apos;nın Satıcı&apos;ya ait web sitesinden elektronik ortamda sipariş verdiği 
                ürünlerin satışı ve teslimi ile ilgili tarafların hak ve yükümlülüklerini düzenler.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Ürün Bilgileri</h2>
              <p>
                Ürünlerin temel özellikleri, satış fiyatı ve ödeme bilgileri web sitesinde belirtilmiştir.
                Fiyatlara KDV dahildir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Teslimat</h2>
              <p>
                Ürünler, sipariş onayından itibaren en geç 30 gün içinde Alıcı&apos;nın belirttiği adrese teslim edilir.
                Teslimat masrafları Alıcı&apos;ya aittir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Cayma Hakkı</h2>
              <p>
                Alıcı, ürünü teslim aldıktan itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin 
                ve cezai şart ödemeksizin cayma hakkını kullanabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Yaş Sınırlaması</h2>
              <p>
                Bu siteden alışveriş yapabilmek için 21 yaşını doldurmuş olmak zorunludur.
                Sipariş veren kişi, 21 yaşından büyük olduğunu beyan ve taahhüt eder.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
