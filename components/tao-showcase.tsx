"use client"

import Image from "next/image"
import { Activity, ScanLine, Code2, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function TaoShowcase() {
    return (
        <section id="tao-health" className="bg-muted/30 py-10 lg:py-14 border-t border-border/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Imágenes a la izquierda */}
                    <Reveal className="order-2 lg:order-1">
                        <div className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center">
                            {/* Imagen Principal (1.png) */}
                            <div className="relative w-[55%] aspect-[9/16] z-30 transition-transform duration-500 hover:scale-105 cursor-pointer rotate-2">
                                <div className="w-full h-full bg-card p-2 rounded-2xl shadow-2xl overflow-hidden border border-border/40">
                                    <Image src="/images/1.png" alt="TAO Health Main" fill className="object-cover rounded-xl" />
                                </div>
                            </div>
                            {/* Flotante Izquierda (2.png) */}
                            <div className="absolute w-[30%] aspect-[9/16] z-20 transition-all duration-500 hover:scale-[1.6] hover:z-[100] -rotate-6" style={{ top: "10%", left: "5%" }}>
                                <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden border border-border/40">
                                    <Image src="/images/2.png" alt="TAO Scan" fill className="object-cover" />
                                </div>
                            </div>
                            {/* Flotante Derecha (3.png) */}
                            <div className="absolute w-[30%] aspect-[9/16] z-[25] transition-all duration-500 hover:scale-[1.6] hover:z-[100] rotate-6" style={{ bottom: "10%", right: "5%" }}>
                                <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden border border-border/40">
                                    <Image src="/images/3.png" alt="TAO Analysis" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Texto a la derecha */}
                    <Reveal delay={200} className="order-1 lg:order-2">
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                                <Activity className="h-4 w-4 text-primary" />
                                <span className="text-xs font-bold text-primary uppercase">Tecnología Ancestral x IA</span>
                            </div>
                            <h2 className="text-3xl font-bold md:text-4xl">TAO Health Scanner</h2>
                            <p className="text-muted-foreground">
                                Análisis holográfico de bienestar basado en la lectura de palmas, fusionando IA con Psicología Integral y sabiduría Taoísta.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Vision AI", "Next.js", "React", "Tailwind"].map((t) => (
                                    <span key={t} className="px-3 py-1 border border-border bg-card rounded-md text-xs font-semibold">
                                        <Code2 className="inline h-3 w-3 mr-1 text-primary" />{t}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                                <a href="https://tao.octaviotrs.com/" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-base font-semibold text-background hover:bg-foreground/90 transition-all">
                                    <ScanLine className="h-5 w-5" /> Iniciar Diagnóstico
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}