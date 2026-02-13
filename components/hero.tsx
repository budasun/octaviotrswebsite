import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Scale } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-20"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-16 lg:py-24">
        {/* Text content */}
        <Reveal className="order-2 md:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5">
            <Scale className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium tracking-wide text-primary-foreground/80 uppercase">
              UNAM &middot; Posgrado
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl">
            {"Psicologia Forense"}
            <br />
            <span className="text-accent">{"y Clinica"}</span>
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-primary-foreground/70 text-pretty">
            Egresado de la UNAM con Posgrado en Psicologia Forense. Brindo
            servicios de peritaje psicologico para el ambito legal y terapia
            clinica Cognitivo Conductual/terapia breve.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Agendar Terapia
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Servicios para Abogados
            </Link>
          </div>

          {/* Credential badges */}
          <div className="mt-10 flex flex-wrap gap-4">
            {["Ced. Prof. UNAM", "Posgrado", "Perito Certificado"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-1.5 text-xs font-medium text-primary-foreground/60"
                >
                  {badge}
                </span>
              )
            )}
          </div>

          {/* Technical courses */}
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
              Cursos Tecnicos
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Desarrollo Web",
                "React",
                "Vercel",
                "Github",
                "Wordpress",
                "HTML",
                "Photoshop",
                "IA",
                "HubSpot",
              ].map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-accent"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Portrait */}
        <Reveal className="order-1 flex justify-center md:order-2" delay={200}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl border border-primary-foreground/10" />
            <Image
              src="/images/octavio-portrait.jpg"
              alt="Octavio Torres R. - Psicologo Forense y Clinico"
              width={420}
              height={520}
              className="relative rounded-xl object-cover shadow-2xl"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
