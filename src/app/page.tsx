import { Hero } from "@/components/Hero"
import { Categories } from "@/components/Categories"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { Advantages } from "@/components/Advantages"
import { FAQ } from "@/components/FAQ"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Advantages />
      <FAQ />
    </main>
  )
}
