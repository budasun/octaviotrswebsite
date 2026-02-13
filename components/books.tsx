import Image from "next/image"
import { BookOpen, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

const books = [
  {
    title: "La Grieta en la Igualdad",
    description:
      "Analisis forense de la denuncia falsa, el fraude de paternidad y la maldad femenina.",
    cover: "/images/grieta-en-la-igualdad.jpg",
    amazon: "https://www.amazon.com.mx/Grieta-Igualdad-An%C3%A1lisis-denuncia-paternidad/dp/B0G4BWH9FG/ref=tmm_pap_swatch_0",
    googlePlay: "#",
  },
  {
    title: "Psicologia y Secretos de los Colores",
    description:
      "La Guia para Influir en el Estado de Animo, la Productividad y las Decisiones, Aplicando la Teoria y la Psicologia de los 13 Colores.",
    cover: "/images/psicologia-y secretos-de-los-colores (1).jpg",
    amazon: "https://www.amazon.com.mx/Psicolog%C3%ADa-Secretos-los-Colores-Productividad/dp/B0G2LJ9C4P/ref=tmm_pap_swatch_0",
    googlePlay: "https://play.google.com/store/books/details?id=rde7EQAAQBAJ",
  },
  {
    title: "PIAGET & VIGOTSKY: LENGUAJE Y PENSAMIENTO",
    description:
      "Un estudio comparativo de las teorias de Piaget y Vigotsky sobre el desarrollo del lenguaje y el pensamiento en la infancia.",
    cover: "/images/piaget-y-vigotsky.jpg",
    amazon: "https://www.amazon.com.mx/PIAGET-VIGOTSKY-LENGUAJE-Y-PENSAMIENTO-ebook/dp/B0FQMTCXJ6",
    googlePlay: "#",
  },
]

export function Books() {
  return (
    <section id="libros" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Publicaciones
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Libros del Autor
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-pretty">
            Obras especializadas en psicologia forense, clinica y peritaje
            psicologico disponibles en las principales plataformas digitales.
          </p>
        </div>

        {/* Books grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={i * 100}>
              <article
                className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden border-4 border-card bg-card p-2">
                  <Image
                    src={book.cover}
                    alt={`Portada de ${book.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground text-balance">
                    {book.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {book.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={book.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Amazon
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    {book.googlePlay && book.googlePlay !== "#" && (
                      <a
                        href={book.googlePlay}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                      >
                        Google Play
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
