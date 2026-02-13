import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Books } from "@/components/books"
import { Services } from "@/components/services"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Books />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}
