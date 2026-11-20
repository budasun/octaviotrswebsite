import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, ChevronDown } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

const pageTitle =
  "Perito Psicólogo CDMX | Dictámenes de Custodia, Daño Psicológico e Imputabilidad — Octavio Torres R."

const pageDescription =
  "Perito psicólogo UNAM, posgrado en Psicología Forense. Dictámenes de custodia, daño psicológico e imputabilidad, defendibles en juicio. CDMX, Edomex y toda la República. Orientación gratuita de 20 min al abogado. Respuesta en menos de 24 horas."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/peritajes" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/peritajes",
    siteName: "Octavio Torres R.",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/octavio-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Octavio Torres R. - Perito Psicólogo",
      },
    ],
  },
}

const necesitas = [
  {
    title: "Guarda y custodia / competencias parentales:",
    body: "Evaluación de ambos progenitores y, cuando procede, de los menores. Conclusiones claras sobre competencias parentales y el interés superior de la niñez.",
  },
  {
    title: "Daño psicológico en víctimas:",
    body: "Valoración integral con instrumentos psicométricos validados. Cuantificación y documentación del daño para reclamar reparación.",
  },
  {
    title: "Imputabilidad / capacidad:",
    body: "Evaluación de la capacidad para comprender y querer el hecho, y de la imputabilidad, con metodología defendible en audiencia.",
  },
  {
    title: "Revisión de dictamen contrario (contradictamen):",
    body: "Análisis técnico del dictamen de la contraparte: metodología, pruebas aplicadas, errores y puntos impugnables.",
  },
]

const entregas = [
  "Dictamen pericial con metodología explícita, pruebas validadas, entrevistas, análisis y conclusiones claras.",
  "Revisión del expediente y análisis con la triada psicocriminológica (víctima, victimario y situación), que permite obtener datos clave con el puro expediente.",
  "Pruebas estandarizadas apoyadas en la Suite Psicométrica (Raven AI, Cleaver AI y HTP AI), con resultados replicables y menos subjetividad.",
  "Comparecencia en audiencia. Primera comparecencia incluida.",
  "Revisión de dictamen contrario como servicio aparte.",
  "MMPI-2 (Inventario Multifásico de Personalidad de Minnesota, ~500 reactivos, ya digitalizado) como prueba adicional aparte, disponible según el caso, sobre todo para daño psicológico complejo, imputabilidad y custodia compleja. Se cotiza aparte.",
]

const proceso = [
  {
    title: "Orientación de 20 min (sin costo).",
    body: "Me cuentas el caso y te digo si es viable pericialmente.",
  },
  {
    title: "Cotización y anticipo.",
    body: "Te doy tiempos y honorarios por escrito, según el alcance.",
  },
  {
    title: "Evaluación.",
    body: "Revisión del expediente, entrevistas y aplicación de pruebas validadas.",
  },
  {
    title: "Dictamen + comparecencia.",
    body: "Entrega en 10 a 15 días hábiles para un dictamen estándar, exprés en 3 días hábiles con +25%, y comparecencia en audiencia.",
  },
]

const honorarios = [
  { servicio: "Orientación de 20 min para el abogado", precio: "$0" },
  { servicio: "Dictamen estándar, 1 persona", precio: "desde $12,000 MXN" },
  { servicio: "Custodia / familiar, 2–3 evaluados", precio: "$18,000 – $25,000 MXN" },
  { servicio: "Daño psicológico complejo / penal", precio: "$20,000 – $30,000 MXN" },
  { servicio: "Contradictamen / revisión de dictamen contrario", precio: "$8,000 – $12,000 MXN" },
  { servicio: "Comparecencia extra (primera incluida)", precio: "$3,000 – $5,000 MXN por audiencia adicional" },
  { servicio: "Exprés (3 días hábiles)", precio: "+25%" },
  { servicio: "Fuera de CDMX / Edomex", precio: "viáticos aparte" },
  { servicio: "MMPI-2 adicional, aparte del dictamen estándar", precio: "$3,500 MXN" },
]

const razones = [
  "Psicólogo egresado de la UNAM, con posgrado en Psicología Forense. Perito certificado.",
  'Autor de libros de psicología forense, entre ellos "La Grieta en la Igualdad".',
  "Suite Psicométrica con IA (Raven, Cleaver y HTP): pruebas estandarizadas, resultados replicables.",
  "Triada psicocriminológica (víctima, victimario y situación), aprendida con la maestra Alba Luz en el diplomado forense de la FES Iztacala: con el puro expediente se obtienen datos clave del caso.",
  "Asesoría para abogados en la preparación de estrategias legales con fundamento psicológico.",
  "Respuesta en menos de 24 horas.",
]

const faqs = [
  {
    q: "¿Qué necesitas para empezar?",
    a: "Los datos del caso, el expediente para revisarlo, la materia (familiar, penal, civil) y, si la hay, la fecha de audiencia. Con eso te doy la orientación de 20 minutos y la cotización.",
  },
  {
    q: "¿Qué pasa si el juez ya designó perito?",
    a: "Puedo actuar como perito de parte y revisar el dictamen del perito designado, señalando errores metodológicos y puntos impugnables.",
  },
  {
    q: "¿Puedes revisar el dictamen de la contraparte?",
    a: "Sí. Es el servicio de contradictamen / revisión de dictamen contrario (ver honorarios).",
  },
  {
    q: "¿Atiendes fuera de CDMX y Edomex?",
    a: "Sí. Atiendo principalmente en CDMX y Estado de México, y puedo operar en toda la República. Fuera de CDMX / Edomex, los viáticos van aparte.",
  },
  {
    q: "¿En cuánto tiempo entregas el dictamen?",
    a: "Un dictamen estándar se entrega en 10 a 15 días hábiles. Exprés en 3 días hábiles, con un recargo del 25%.",
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

export default function PeritajesPage() {
  return (
    <>
      <Navbar />

      <main id="contenido" className="pt-16">
        {/* 1. HERO */}
        <section
          id="hero"
          aria-labelledby="peritajes-titulo"
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

          <div className="relative mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:items-center lg:gap-12">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/peri0.jpeg"
                alt="Octavio Torres R., perito psicólogo en CDMX"
                width={572}
                height={1024}
                priority
                className="h-auto w-full max-w-xs rounded-xl object-contain shadow-2xl lg:max-w-sm"
              />
            </div>

            <div>
              <h1
                id="peritajes-titulo"
                className="mb-4 text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl"
              >
                Perito psicólogo para abogados
              </h1>

              <p className="mb-2 text-lg font-medium text-primary-foreground/90">
                CDMX, Edomex y toda la República
              </p>
              <p className="mb-8 max-w-3xl text-base leading-relaxed text-primary-foreground/70 text-pretty md:text-lg">
                Dictámenes de custodia, daño psicológico e imputabilidad, con metodología defendible en juicio.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contacto-abogados"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Formulario de contacto — solo para abogados
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#contacto-abogados"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Orientación gratuita — 20 min
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-10 text-sm font-medium text-primary-foreground/70">
                UNAM · Posgrado en Psicología Forense · Perito Certificado · Cédula Profesional
              </p>

              <blockquote className="mt-6 max-w-3xl rounded-lg border-l-4 border-accent bg-primary-foreground/5 px-6 py-5 text-base leading-relaxed text-primary-foreground/90 text-pretty md:text-lg">
                &quot;Si tienes un caso, te digo en 20 minutos si es viable pericialmente, qué pruebas aplican y en cuánto tiempo lo tendrías — antes de cobrar.&quot;
              </blockquote>
            </div>
          </div>
        </section>

        {/* 2. ¿CUÁNDO ME NECESITAS? */}
        <section
          aria-labelledby="cuando-me-necesitas"
          className="bg-background py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading id="cuando-me-necesitas">¿Cuándo me necesitas?</SectionHeading>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:items-center lg:gap-12">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/images/peri2.jpeg"
                  alt="Balanza de justicia con psicología forense"
                  width={572}
                  height={1024}
                  loading="lazy"
                  className="h-auto w-40 rounded-lg object-contain shadow-lg md:w-56 lg:w-full lg:max-w-xs"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {necesitas.map(({ title, body }) => (
                  <article
                    key={title}
                    className="rounded-xl border border-border bg-card p-8 shadow-sm"
                  >
                    <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. QUÉ ENTREGAS */}
        <section
          aria-labelledby="que-entregas"
          className="bg-secondary/40 py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading id="que-entregas">Qué te entrego</SectionHeading>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,60fr)_minmax(0,40fr)] lg:items-center lg:gap-12">
              <ul className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
                {entregas.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-xl border border-border bg-card p-6"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-foreground md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <figure className="order-1 mx-auto w-full max-w-sm text-center lg:order-2 lg:mx-0 lg:text-left">
                <Image
                  src="/images/peri1%20(1).jpeg"
                  alt="Dashboard de la Suite Psicométrica con test de Raven y resultados por percentiles"
                  width={572}
                  height={1024}
                  loading="lazy"
                  className="mx-auto h-auto w-full rounded-lg border border-border object-contain shadow-lg lg:mx-0"
                />
                <figcaption className="mt-4 text-sm leading-relaxed text-foreground/80">
                  Resultados replicables con la Suite Psicométrica (Raven, Cleaver y HTP)
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 4. PROCESO EN 4 PASOS */}
        <section
          aria-labelledby="proceso"
          className="bg-background py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading id="proceso">Proceso en 4 pasos</SectionHeading>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {proceso.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-foreground">
                    {index + 1}
                  </span>
                  <h3 className="mb-2 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. HONORARIOS */}
        <section
          aria-labelledby="honorarios"
          className="bg-secondary/40 py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="honorarios">Honorarios</SectionHeading>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <caption className="sr-only">Honorarios de peritajes psicológicos</caption>
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-semibold">Servicio</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Honorario</th>
                    </tr>
                  </thead>
                  <tbody>
                    {honorarios.map(({ servicio, precio }) => (
                      <tr key={servicio} className="border-t border-border">
                        <th scope="row" className="px-6 py-4 font-medium text-foreground">
                          {servicio}
                        </th>
                        <td className="px-6 py-4 text-foreground">{precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-foreground/80">
              Los honorarios se cotizan por alcance. La orientación de 20 minutos es gratuita y sin compromiso.
            </p>
          </div>
        </section>

        {/* 6. POR QUÉ OCTAVIO TORRES R. */}
        <section
          aria-labelledby="por-que-octavio-torres-r"
          className="bg-background py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="por-que-octavio-torres-r">Por qué Octavio Torres R.</SectionHeading>
            <ul className="grid gap-4">
              {razones.map((razon) => (
                <li key={razon} className="flex gap-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground md:text-base">{razon}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. PREGUNTAS FRECUENTES DE ABOGADOS */}
        <section
          aria-labelledby="preguntas-frecuentes"
          className="bg-secondary/40 py-16 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading id="preguntas-frecuentes">Preguntas frecuentes de abogados</SectionHeading>
            <div className="divide-y divide-border rounded-xl border border-border bg-card px-6">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
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

        {/* 8. CONTACTO — SOLO PARA ABOGADOS */}
        <section aria-labelledby="contacto-abogados-titulo" className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 id="contacto-abogados-titulo" className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              Contacto — solo para abogados
            </h2>
            <p className="mb-2 text-base leading-relaxed text-foreground/80">
              Respuesta en menos de 24 horas. Confidencialidad garantizada.
            </p>
          </div>
          <ContactForm
            variant="peritajes"
            sectionId="contacto-abogados"
            showInfo={false}
          />
        </section>
      </main>

      <Footer />
    </>
  )
}
