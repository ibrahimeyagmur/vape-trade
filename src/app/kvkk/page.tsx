import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SITE_BRAND_NAME } from "@/config/site"

export default function KVKKPage() {
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
          Kişisel Verilerin Korunması (KVKK)
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Veri Sorumlusu</h2>
              <p>
                {SITE_BRAND_NAME}, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla hareket etmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. İşlenen Kişisel Veriler</h2>
              <p>
                Kimlik bilgileri (ad, soyad), iletişim bilgileri (e-posta, telefon, adres), 
                ödeme bilgileri ve alışveriş geçmişi gibi veriler işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Verilerin İşlenme Amacı</h2>
              <p>
                Kişisel verileriniz; sipariş işlemlerinin gerçekleştirilmesi, müşteri hizmetleri,
                yasal yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin artırılması amacıyla işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Veri Saklama Süresi</h2>
              <p>
                Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal zorunluluklar 
                çerçevesinde saklanmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Haklarınız</h2>
              <p>
                KVKK kapsamında; verilerinize erişim, düzeltme, silme, işlemenin kısıtlanması 
                ve itiraz haklarına sahipsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
