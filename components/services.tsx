import {
  Brain,
  Scale,
  FileText,
  Users,
  ShieldCheck,
  ClipboardList,
  Laptop,
  Smartphone,
  Code2,
  Bot,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { PsychometricSuite } from "@/components/psychometric-suite" // <-- Importación de tu nueva Suite

const clinicalServices = [
  {
    icon: Brain,
    title: "Terapia Cognitivo Conductual",
    description: "Intervencion basada en evidencia para ansiedad, depresion, estres postraumatico y otros trastornos.",
  },
  {
    icon: ClipboardList,
    title: "Terapia Breve",
    description: "Enfoque centrado en soluciones con resultados medibles en un numero reducido de sesiones.",
  },
  {
    icon: Users,
    title: "Modificacion Terapeutica de Conducta",
    description: "Tecnicas especializadas para el cambio conductual sostenible y la reestructuracion de habitos.",
  },
]

const forensicServices = [
  {
    icon: Scale,
    title: "Peritajes Psicologicos",
    description: "Dictamenes periciales para procesos judiciales: custodia, daño psicologico, imputabilidad.",
  },
  {
    icon: FileText,
    title: "Evaluaciones Forenses",
    description: "Valoracion integral de victimas y acusados con instrumentos psicometricos validados.",
  },
  {
    icon: ShieldCheck,
    title: "Asesoria para Abogados",
    description: "Apoyo especializado en la preparacion de estrategias legales con fundamento psicologico.",
  },
  {
    icon: Laptop,
    title: "Evaluaciones Periciales Digitales",
    description: "Dictamenes y analisis psicologicos realizados a traves de medios digitales con rigor metodologico.",
  },
]

const developerServices = [
  {
    icon: Smartphone,
    title: "Apps de Salud Mental & Wellness",
    description: "Especialista en el diseño y desarrollo de aplicaciones digitales enfocadas en bienestar y salud.",
  },
  {
    icon: Code2,
    title: "Desarrollo Web & Móvil",
    description: "Soluciones robustas y responsivas utilizando REACT, WordPress y tecnologias modernas.",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    description: "Integracion de herramientas digitales avanzadas e implementacion de IA en procesos.",
  },
]

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
    </div>
  )
}

// PARTE 1: SOLO DESARROLLO
export function DeveloperServices() {
  return (
    <section id="servicios-dev" className="bg-muted/50 py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <Reveal>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Servicios Tecnológicos
            </h2>
          </Reveal>
        </div>

        <div className="mb-8">
          <Reveal delay={100}>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h3 className="whitespace-nowrap text-sm font-semibold tracking-wide text-accent uppercase">
                Full Stack Developer
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="mb-8 text-center">
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                Especialista en Apps de Salud Mental & Wellness. REACT / WordPress / Apps Móviles. Integración de IA.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {developerServices.map((s, i) => (
              <Reveal key={s.title} delay={200 + i * 100}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// PARTE 2: CLÍNICA, SUITE Y FORENSE
export function ClinicalForensicServices() {
  return (
    <section id="servicios-clinicos" className="bg-background pt-10 lg:pt-14 pb-0">
      <div className="mx-auto max-w-6xl px-6">

        {/* BLOQUE SUPERIOR: TERAPIA CLÍNICA */}
        <div className="mb-6">
          <Reveal delay={100}>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h3 className="whitespace-nowrap text-sm font-semibold tracking-wide text-accent uppercase">
                Terapia Clinica
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {clinicalServices.map((s, i) => (
              <Reveal key={s.title} delay={200 + i * 100}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* BLOQUE CENTRAL: SUITE PSICOMÉTRICA */}
      <div className="w-full bg-slate-50 py-6 my-2 border-y border-border/40">
        <Reveal delay={100}>
          <PsychometricSuite />
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* BLOQUE INFERIOR: PERITAJES PSICOLÓGICOS */}
        <div className="mt-6 mb-0">
          <Reveal delay={100}>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h3 className="whitespace-nowrap text-sm font-semibold tracking-wide text-accent uppercase">
                Peritajes Psicologicos
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {forensicServices.map((s, i) => (
              <Reveal key={s.title} delay={200 + i * 100}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// PARTE 3: BLOQUE "¿CÓMO PUEDO AYUDARTE?"
export function HelpSection() {
  return (
    // ESPACIO REDUCIDO: Cambiado a py-6 para acercarlo al formulario
    <section id="ayuda" className="bg-muted/30 py-6 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 w-full bg-muted md:h-auto md:w-1/4">
                <img src="/images/test.jpg" alt="Consulta" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12 text-center md:text-left">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 md:mx-0">
                  <HelpCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">¿Cómo puedo ayudarte?</h3>
                <p className="text-muted-foreground text-pretty">
                  Ya sea apoyo psicologico, un peritaje forense o el desarrollo de una solucion digital para tu proyecto de salud, estoy listo para colaborar contigo.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}