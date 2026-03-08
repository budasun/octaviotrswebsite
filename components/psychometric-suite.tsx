"use client"

import Image from "next/image"
import { Activity, Code2, BrainCircuit, ScanLine, FileText } from "lucide-react"
import { Reveal } from "@/components/reveal"

const apps = [
  {
    id: "raven",
    title: "Raven AI - Matrices",
    tag: "Clínico & Forense",
    tagColor: "text-indigo-700 bg-indigo-100 border-indigo-200",
    btnColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
    icon: BrainCircuit,
    description: "Digitalización clínica del Test de Raven. Evalúa el factor 'g' con un motor híbrido que integra LLMs para redactar peritajes automatizados.",
    tech: ["React 19", "Groq AI"],
    link: "https://raven.octaviotrs.com/",
  },
  {
    id: "cleaver",
    title: "Cleaver AI - Perfil DISC",
    tag: "Laboral & Conductual",
    tagColor: "text-emerald-700 bg-emerald-100 border-emerald-200",
    btnColor: "bg-emerald-600 hover:bg-emerald-700 text-white",
    icon: Activity,
    description: "Automatización de perfilamiento conductual. Procesamiento de percentiles DISC en tiempo real con gráficas y narrativas proyectivas.",
    tech: ["Python", "FastAPI"],
    link: "https://cleaver.octaviotrs.com/",
  },
  {
    id: "htp",
    title: "HTP AI - Casa Árbol Persona",
    tag: "Evaluación Proyectiva",
    tagColor: "text-sky-700 bg-sky-100 border-sky-200",
    btnColor: "bg-sky-600 hover:bg-sky-700 text-white",
    icon: FileText,
    description: "Plataforma de apoyo para interpretación profunda. Sistematiza el análisis de rasgos gráficos y estructurales de la personalidad.",
    tech: ["IA Generativa", "Next.js"],
    link: "https://htp.octaviotrs.com/",
  }
]

export function PsychometricSuite() {
  return (
    <section id="suite-psicometrica" className="w-full bg-sky-50 py-12 lg:py-16 border-y border-sky-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* ------------------------------------- */}
          {/* COLUMNA IZQUIERDA: EL MAZO DE CARTAS */}
          {/* ------------------------------------- */}
          <Reveal className="order-2 lg:order-1">
            {/* Ajuste: h-[400px] para móviles, más alto en PC */}
            <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px]">

              <div className="absolute w-[35%] aspect-[9/16] z-10 transition-all duration-500 hover:scale-[1.5] hover:z-[100] -rotate-12" style={{ top: '5%', left: '5%' }}>
                <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden border border-border/40 bg-card p-1">
                  <Image src="/images/cleaver1.png" alt="Cleaver AI" fill className="object-cover rounded-lg" />
                </div>
              </div>

              <div className="absolute w-[35%] aspect-[9/16] z-10 transition-all duration-500 hover:scale-[1.5] hover:z-[100] rotate-12" style={{ top: '10%', right: '5%' }}>
                <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden border border-border/40 bg-card p-1">
                  <Image src="/images/htp1.png" alt="HTP AI" fill className="object-cover rounded-lg" />
                </div>
              </div>

              <div className="absolute w-[40%] aspect-[9/16] z-20 transition-all duration-500 hover:scale-[1.5] hover:z-[100] rotate-2" style={{ top: '15%', left: '30%' }}>
                <div className="relative w-full h-full rounded-xl shadow-xl overflow-hidden border border-border/40 bg-card p-1">
                  <Image src="/images/raven1.png" alt="Raven AI" fill className="object-cover rounded-lg" />
                </div>
              </div>

              <div className="absolute w-[38%] aspect-[9/16] z-30 transition-all duration-500 hover:scale-[1.5] hover:z-[100] rotate-6" style={{ bottom: '10%', right: '10%' }}>
                <div className="relative w-full h-full rounded-xl shadow-xl overflow-hidden border border-border/40 bg-card p-1">
                  <Image src="/images/cleaver2.png" alt="Cleaver Results" fill className="object-cover rounded-lg" />
                </div>
              </div>

              <div className="absolute w-[38%] aspect-[9/16] z-30 transition-all duration-500 hover:scale-[1.5] hover:z-[100] -rotate-6" style={{ bottom: '15%', left: '10%' }}>
                <div className="relative w-full h-full rounded-xl shadow-xl overflow-hidden border border-border/40 bg-card p-1">
                  <Image src="/images/raven2.png" alt="Raven Results" fill className="object-cover rounded-lg" />
                </div>
              </div>

              <div className="absolute w-[42%] aspect-[9/16] z-40 transition-all duration-500 hover:scale-[1.5] hover:z-[100] -rotate-2" style={{ bottom: '0%', left: '29%' }}>
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-border/50 bg-card p-1.5">
                  <Image src="/images/htp2.png" alt="HTP Results" fill className="object-cover rounded-xl" />
                </div>
              </div>

            </div>
          </Reveal>

          {/* ------------------------------------- */}
          {/* COLUMNA DERECHA: TEXTOS Y BOTONES */}
          {/* ------------------------------------- */}
          <Reveal delay={200} className="order-1 lg:order-2">
            <div className="flex flex-col h-full justify-center">

              {/* Encabezado General */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-3">
                  Suite Psicométrica
                </h2>
                <p className="text-slate-600 text-pretty leading-relaxed">
                  Es algo increíble lo que la Inteligencia Artificial puede detectar al momento de evaluar, ya que la IA es tan objetiva como la lógica que hay detrás de sus funciones y del nivel de conciencia de su usuario en cuestión. La Suite la he diseñado para que sirva como un puente del inconsciente cuántico hacia la conducta observable y cuantificable, optimizando el diagnóstico clínico, laboral y forense.
                </p>
              </div>

              {/* Lista de Aplicaciones */}
              <div className="flex flex-col gap-5">
                {apps.map((app) => (
                  <div key={app.id} className="group relative bg-white rounded-2xl p-5 border border-sky-100 shadow-sm hover:shadow-md transition-shadow">

                    {/* Fila Superior: Título y Tag (Ajuste para móviles: flex-col a flex-row) */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-3">
                      <div className="flex items-center gap-2">
                        <app.icon className="h-5 w-5 text-slate-700 shrink-0" />
                        <h3 className="font-bold text-lg text-slate-900 leading-tight">{app.title}</h3>
                      </div>
                      <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider whitespace-nowrap ${app.tagColor}`}>
                        {app.tag}
                      </span>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {app.description}
                    </p>

                    {/* Fila Inferior: Tecnologías y Botón (Ajuste para móviles) */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {app.tech.map((t) => (
                          <span key={t} className="flex items-center text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md whitespace-nowrap">
                            <Code2 className="h-3 w-3 mr-1" /> {t}
                          </span>
                        ))}
                      </div>

                      {/* Botón que ocupa el 100% en celular y tamaño normal en PC */}
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full sm:w-auto inline-flex justify-center items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md ${app.btnColor}`}
                      >
                        <ScanLine className="h-4 w-4 shrink-0" /> Probar
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}