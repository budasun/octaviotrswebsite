import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Books } from "@/components/books"
import { ObsiAppShowcase } from "@/components/obsiapp-showcase"
import {
  DeveloperServices,
  ClinicalForensicServices,
  HelpSection
} from "@/components/services"
import { TaoShowcase } from "@/components/tao-showcase"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* 1. Teoría */}
      <Books />

      {/* 2. Práctica Técnica (Apps) */}
      <ObsiAppShowcase />
      <DeveloperServices />
      <TaoShowcase />

      {/* 3. Práctica Profesional (Clínica) */}
      <ClinicalForensicServices />

      {/* 4. Acción (Formulario) */}
      <ContactForm />

      {/* 5. Cierre Final (Resumen de valor) */}
      <HelpSection />

      <Footer />
    </main>
  )
}