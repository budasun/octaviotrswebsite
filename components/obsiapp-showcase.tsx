"use client"

import Image from "next/image"
import { Sparkles, Smartphone, BookOpen, Code2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function ObsiAppShowcase() {
  return (
    <section id="obsiapp" className="bg-accent/10 py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <Reveal>
            <div className="flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/20 px-4 py-1.5">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium tracking-wide text-accent uppercase">
                  Proyecto Destacado
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
                Proyecto ObsiApp: Tecnología al servicio de la psique.
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-muted-foreground">
                <p className="text-base leading-relaxed text-pretty">
                  Como psicólogo clínico y desarrollador, mi visión fue traducir el marco teórico de mi libro <em>Cómo usar el Huevo de Obsidiana</em> en una herramienta digital viva y de uso diario.
                </p>
                <p className="text-base leading-relaxed text-pretty">
                  <strong>Arquitectura y Desarrollo:</strong> La plataforma fue construida utilizando <strong>React</strong> y <strong>Next.js</strong> para garantizar una interfaz fluida e interactiva. El procesamiento y sincronización de datos (estructurados en <strong>JSON</strong>) se gestiona a través de <strong>Firebase</strong> como base de datos en tiempo real, garantizando la seguridad y privacidad de las usuarias. Todo el ecosistema está desplegado y optimizado mediante <strong>Vercel</strong> para un rendimiento ultrarrápido.
                </p>
                <p className="text-base leading-relaxed text-pretty">
                  Esta sólida infraestructura aloja a "Osiris", un motor de IA terapéutica que integra principios de psicología transpersonal y filosofía taoísta, ofreciendo un espacio seguro para el autodescubrimiento y la gestión de la comunidad.
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Next.js", "Firebase", "Vercel", "JSON", "Tailwind CSS", "Groq AI"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm"
                  >
                    <Code2 className="h-3 w-3 text-accent" />
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://osiris.octaviotrs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
                >
                  <Smartphone className="h-5 w-5" />
                  Explorar la aplicación web
                </a>
                <a
                  href="https://a.co/d/0bkTHhaL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-muted hover:shadow-md"
                >
                  <BookOpen className="h-5 w-5" />
                  Adquirir el libro en Amazon
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Image Composition (INTACTA CON LOS ÚLTIMOS CAMBIOS) */}
          <Reveal delay={200}>
            <div className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center">

              {/* LA PORTADA - Z-index 30, Rotación con Tailwind (-rotate-3) */}
              <div className="relative w-[55%] aspect-[3/4] z-30 transition-transform duration-500 hover:scale-105 cursor-pointer -rotate-3 hover:-rotate-1">
                <div className="w-full h-full bg-card p-2 rounded-xl shadow-2xl overflow-hidden border border-border/30">
                  <Image
                    src="/images/portada.png"
                    alt="Portada del libro Cómo usar el Huevo de Obsidiana"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 55vw, 35vw"
                    priority
                  />
                </div>
              </div>

              {/* EL ECOSISTEMA */}

              {/* Consejera - Top Left (z-20) */}
              <div
                className="absolute w-[30%] aspect-[9/16] z-20 transition-all duration-500 ease-in-out rotate-6 hover:scale-[1.6] hover:rotate-0 hover:z-[100] cursor-pointer origin-top-left"
                style={{ top: "0%", left: "0%" }}
              >
                <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden border border-border/40">
                  <Image
                    src="/images/consejera.png"
                    alt="Captura de pantalla de la app - Consejera"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 28vw, 16vw"
                  />
                </div>
              </div>

              {/* Calendario - Top Right (z-[25]) */}
              <div
                className="absolute w-[30%] aspect-[9/16] z-[25] transition-all duration-500 ease-in-out -rotate-6 hover:scale-[1.6] hover:rotate-0 hover:z-[100] cursor-pointer origin-top-right"
                style={{ top: "2%", right: "0%" }}
              >
                <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden border border-border/40">
                  <Image
                    src="/images/calendario.png"
                    alt="Captura de pantalla de la app - Calendario"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 26vw, 14vw"
                  />
                </div>
              </div>

              {/* Glosario - Bottom Left (z-20) */}
              <div
                className="absolute w-[30%] aspect-[9/16] z-20 transition-all duration-500 ease-in-out rotate-3 hover:scale-[1.6] hover:rotate-0 hover:z-[100] cursor-pointer origin-bottom-left"
                style={{ bottom: "2%", left: "0%" }}
              >
                <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden border border-border/40">
                  <Image
                    src="/images/glosario.png"
                    alt="Captura de pantalla de la app - Glosario"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 24vw, 13vw"
                  />
                </div>
              </div>

              {/* Consejera2 - Bottom Right (z-20) */}
              <div
                className="absolute w-[30%] aspect-[9/16] z-20 transition-all duration-500 ease-in-out -rotate-3 hover:scale-[1.6] hover:rotate-0 hover:z-[100] cursor-pointer origin-bottom-right"
                style={{ bottom: "0%", right: "0%" }}
              >
                <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden border border-border/40">
                  <Image
                    src="/images/consejera2.png"
                    alt="Captura de pantalla de la app - Consejera 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 26vw, 14vw"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-8 top-1/2 h-32 w-32 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
              <div className="absolute -left-8 bottom-1/4 h-24 w-24 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}