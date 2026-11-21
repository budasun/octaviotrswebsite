import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, ChevronDown, Clock, ShieldCheck, Video } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

const pageTitle =
  "Terapia Cognitivo-Conductual Online | Psicólogo UNAM — Octavio Torres R."

const pageDescription =
  "Terapia cognitivo-conductual online con psicólogo UNAM, +15 años. Ansiedad, depresión y estrés en sesiones de 50 min por videollamada. Agenda tu primera sesión."

const canonicalUrl =
  "https://www.octaviotrs.com/terapia-cognitivo-conductual-online"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "Octavio Torres R.",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/laptop.jpg",
        width: 6144,
        height: 3456,
        alt: "Sesión de terapia online por videollamada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/laptop.jpg"],
  },
}

const paraQuien = [
  "Depresión",
  "Ansiedad",
  "Estrés",
  "Trastornos adaptativos / del ajuste",
]

const comoFunciona = [
  "Sesiones por videollamada clínica, en un espacio privado y sin interrupciones.",
  "Encuadre claro desde la primera sesión: horarios, frecuencia, confidencialidad y qué esperar.",
  "Alianza terapéutica a distancia: la relación de trabajo se construye igual que en consultorio.",
  "Seguimiento entre sesiones y herramientas prácticas para aplicar en tu vida cotidiana.",
  "Expediente clínico electrónico y notas de evolución.",
]

const proceso = [
  {
    title: "Primera sesión / evaluación",
    body: "nos conocemos, revisamos tu motivo de consulta y definimos si la TCC es lo adecuado para ti.",
  },
  {
    title: "Formulación y plan",
    body: "formulación clínica de tu caso y plan de tratamiento con objetivos medibles.",
  },
  {
    title: "Sesiones de trabajo",
    body: "TCC + terapias contextuales de tercera generación (reestructuración cognitiva, activación conductual, psicoeducación, flexibilidad cognitiva).",
  },
  {
    title: "Seguimiento y cierre",
    body: "revisamos avances contra los objetivos y cierras con herramientas para seguir por tu cuenta.",
  },
]

const incluye = [
  "Plan de tratamiento con objetivos medibles.",
  "Psicoeducación: entender qué te pasa y por qué.",
  "Reestructuración cognitiva y activación conductual.",
  "Seguimiento entre sesiones.",
  "Herramientas prácticas para la vida cotidiana.",
  "Expediente clínico electrónico.",
]

const razones = [
  "Psicólogo clínico titulado y cedulado, egresado de la UNAM (FES Iztacala).",
  "Más de 15 años de práctica en TCC y terapias contextuales de tercera generación.",
  "Práctica privada desde 2010; colaborador con la Dra. Arcelia Soliz (Facultad de Psicología, UNAM) bajo supervisión clínica.",
  "Trabajo con formulación clínica de caso y objetivos medibles, no con sesiones sin rumbo.",
  "Desarrolla herramientas psicométricas automatizadas para apoyar la evaluación y el seguimiento.",
  "Atención 100% online, horario flexible.",
]

const faqs = [
  {
    q: "¿Cómo son las sesiones online?",
    a: "Por videollamada, 50 minutos, en un espacio privado. Necesitas buena conexión y un lugar sin interrupciones.",
  },
  {
    q: "¿La primera sesión es diferente?",
    a: "Sí: es evaluación y formulación de tu caso. Al final acordamos el plan y la frecuencia.",
  },
  {
    q: "¿Cuántas sesiones voy a necesitar?",
    a: "Depende de tu caso y de los objetivos que definamos. No prometo un número fijo antes de evaluarte.",
  },
  {
    q: "¿Atiendes a adolescentes?",
    a: "Sí, adolescentes y adultos, de forma individual.",
  },
  {
    q: "¿Qué pasa con mi información?",
    a: "Confidencialidad garantizada. Llevo expediente clínico electrónico y no comparto tus datos.",
  },
  {
    q: "¿Puedo tomar sesiones desde otro país?",
    a: "Sí, la modalidad es 100% online y el horario es flexible. El pago se acuerda en la primera sesión.",
  },
]

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Octavio Torres R.",
    description: pageDescription,
    areaServed: "México",
    availableLanguage: ["Español", "Inglés"],
    priceRange: "$600 - $2,500 MXN",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.octaviotrs.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terapia Cognitivo-Conductual Online",
        item: canonicalUrl,
      },
    ],
  },
]

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-8 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
    >
      {children}
    </h2>
  )
}

export default function TerapiaCognitivoConductualOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <main id="contenido" className="pt-16">
        {/* 1. HERO */}
        <section
          id="hero"
          aria-labelledby="terapia-titulo"
          className="relative overflow-hidden bg-primary pt-16 pb-20 md:pt-24 md:pb-28"
        >
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:items-center lg:gap-12">
            <div>
              <h1
                id="terapia-titulo"
                className="mb-4 text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl"
              >
                Terapia Cognitivo-Conductual Online
              </h1>

              <p className="mb-2 text-lg font-medium text-primary-foreground/90">
                Desde donde estés, con la misma seriedad que en consultorio
              </p>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/70 text-pretty md:text-lg">
                Sesiones individuales por videollamada con un psicólogo clínico con más de 15 años de experiencia en TCC. Trabajamos sobre lo que piensas, lo que sientes y lo que haces, con un plan claro y objetivos medibles.
              </p>

              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Agendar primera sesión
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <p className="mt-10 text-sm font-medium text-primary-foreground/70">
                UNAM · +15 años en TCC · Cédula Profesional · Práctica privada desde 2010
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/peri0.jpeg"
                alt="Octavio Torres R., psicólogo clínico"
                width={572}
                height={1024}
                priority
                className="h-auto w-full max-w-xs rounded-xl object-contain shadow-2xl lg:max-w-sm"
              />
            </div>
          </div>
        </section>

        {/* 2. QUÉ ES LA TCC */}
        <section
          aria-labelledby="que-es-tcc"
          className="bg-background py-16 md:py-24"
        >
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading id="que-es-tcc">¿Qué es la TCC?</SectionHeading>
            <p className="text-base leading-relaxed text-foreground/80 text-pretty md:text-lg">
              La Terapia Cognitivo-Conductual trabaja la relación entre pensamientos, emociones y conductas. Es una terapia con evidencia científica, con objetivos concretos y herramientas prácticas para la vida cotidiana. No promete curas mágicas ni tiempos fijos de &quot;cura en X sesiones&quot;.
            </p>
            <p className="mt-6 rounded-lg border-l-4 border-accent bg-card px-6 py-5 text-sm leading-relaxed text-foreground/80 md:text-base">
              La TCC fue desarrollada por Aaron Beck y es una de las terapias con más respaldo científico para ansiedad y depresión.
            </p>
          </div>
        </section>

        {/* 3. PARA QUIÉN ES */}
        <section
          aria-labelledby="para-quien-es"
          className="bg-muted/40 py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="para-quien-es">¿Para quién es?</SectionHeading>
            <p className="mb-8 text-base leading-relaxed text-foreground/80 md:text-lg">
              Adolescentes y adultos, atención individual:
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {paraQuien.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-foreground/80 text-pretty md:text-base">
              Si tu caso necesita otro tipo de atención (por ejemplo, urgencia psiquiátrica), te lo digo con honestidad en la primera sesión y te oriento.
            </p>
          </div>
        </section>

        {/* 4. CÓMO FUNCIONA ONLINE */}
        <section
          aria-labelledby="como-funciona-online"
          className="bg-background py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="como-funciona-online">¿Cómo funciona online?</SectionHeading>
            <div className="mb-8 flex items-center gap-3 text-sm font-medium text-accent">
              <Video className="h-5 w-5" aria-hidden="true" />
              100% online, por videollamada clínica
            </div>
            <ul className="grid gap-4">
              {comoFunciona.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. PROCESO EN 4 PASOS */}
        <section
          aria-labelledby="proceso-terapia"
          className="bg-muted/40 py-16 md:py-24"
        >
          <div className="mx-auto max-w-5xl px-6">
            <figure className="mx-auto my-10 w-full">
              <Image
                src="/images/laptop.jpg"
                alt="Sesión de terapia online por videollamada"
                width={6144}
                height={3456}
                loading="lazy"
                className="h-auto w-full rounded-xl border border-border object-contain shadow-lg"
              />
            </figure>
            <SectionHeading id="proceso-terapia">Proceso en 4 pasos</SectionHeading>
            <ol className="grid gap-6 md:grid-cols-2">
              {proceso.map(({ title, body }, index) => (
                <li
                  key={title}
                  className="rounded-xl border border-border bg-card p-8 shadow-sm"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. QUÉ INCLUYE */}
        <section
          aria-labelledby="que-incluye"
          className="bg-background py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="que-incluye">Qué incluye</SectionHeading>
            <ul className="grid gap-4 sm:grid-cols-2">
              {incluye.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. PRECIOS */}
        <section
          aria-labelledby="precios-terapia"
          className="bg-muted/40 py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="precios-terapia">Precios</SectionHeading>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold">Servicio</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Honorario</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-5 text-foreground">Sesión suelta, 50 min</td>
                    <td className="px-6 py-5 font-medium text-foreground">$600 MXN</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 text-foreground">Paquete 5 sesiones, 50 min c/u</td>
                    <td className="px-6 py-5 font-medium text-foreground">$2,500 MXN ($500 por sesión, ahorras $500, ~17% de descuento)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 text-foreground">Primera sesión</td>
                    <td className="px-6 py-5 font-medium text-foreground">$500 MXN (evaluación + formulación, solo una vez)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-8 rounded-lg border-l-4 border-accent bg-card px-6 py-5 text-sm leading-relaxed text-foreground/80 md:text-base">
              No eres un número en una plataforma. Siempre con el mismo psicólogo, con formulación de caso y plan medible.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-foreground/80 text-pretty">
              Los paquetes se pagan por adelantado y se agendan en el horario que acordemos. Pregunta por disponibilidad antes de pagar.
            </p>
          </div>
        </section>

        {/* 8. POR QUÉ CON OCTAVIO TORRES R. */}
        <section
          aria-labelledby="por-que-octavio-terapia"
          className="bg-background py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="por-que-octavio-terapia">Por qué con Octavio Torres R.</SectionHeading>
            <ul className="grid gap-4">
              {razones.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. PREGUNTAS FRECUENTES */}
        <section
          aria-labelledby="faq-terapia"
          className="bg-muted/40 py-16 md:py-24"
        >
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading id="faq-terapia">Preguntas frecuentes</SectionHeading>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl border border-border bg-card px-6 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground md:text-base">
                    {q}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CONTACTO */}
        <section aria-labelledby="contacto-terapia" className="bg-background pt-6 pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-8 text-center">
              <h2
                id="contacto-terapia"
                className="mb-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl"
              >
                Contacto
              </h2>
              <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                  Respuesta en menos de 24 horas.
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                  Confidencialidad garantizada.
                </span>
              </p>
            </div>
            <ContactForm variant="terapia" sectionId="contacto" showInfo={false} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
