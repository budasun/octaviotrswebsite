import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Books } from "@/components/books"
import { ObsiAppShowcase } from "@/components/obsiapp-showcase"
// Ya no importamos PsychometricSuite aquí
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
      <Books />
      <ObsiAppShowcase />
      <DeveloperServices />
      <TaoShowcase />

      {/* Todo el bloque clínico, psicométrico y forense ocurrirá aquí adentro */}
      <ClinicalForensicServices />

      <ContactForm />
      <HelpSection />
      <Footer />
    </main>
  )
}