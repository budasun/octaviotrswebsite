"use client"

import { useState } from "react"
import { Send, CheckCircle, Clock, Shield } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function ContactForm({ formId = "mykdebzo" }: { formId?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showButtonSuccess, setShowButtonSuccess] = useState(false)
  const [userType, setUserType] = useState<"paciente" | "profesional">("paciente")

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    edad: "",
    modalidad: "en-linea",
    motivo: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      tipo_usuario: userType === "paciente" ? "Paciente" : "Abogado / Profesional",
      ...(userType === "paciente" && {
        edad: formData.edad,
        modalidad: formData.modalidad,
      }),
      motivo_consulta: formData.motivo,
      _subject: `Nuevo contacto web: ${userType === "paciente" ? "Paciente" : "Profesional"} - ${formData.nombre}`,
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setIsSubmitting(false)
        setShowButtonSuccess(true)

        setTimeout(() => {
          setSubmitted(true)
          setShowButtonSuccess(false)
        }, 1500)

        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          edad: "",
          modalidad: "en-linea",
          motivo: "",
        })
      } else {
        throw new Error("Error en la respuesta de Formspree")
      }
    } catch (error) {
      alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.")
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      // ESPACIO REDUCIDO: Cambiado de pb-10 a pb-4
      <section id="contacto" className="bg-background pt-4 pb-4">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="rounded-xl border border-border bg-card p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <p className="text-xl font-medium text-foreground leading-relaxed">
              Gracias, me pondré en contacto contigo pronto.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    // ESPACIO REDUCIDO: Cambiado de pb-20 a pb-6
    <section id="contacto" className="bg-background pt-6 pb-6">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header con margen reducido */}
        <div className="mb-8 text-center">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
              Contacto
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              Ponte en Contacto
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
              Ya sea que busques iniciar un proceso terapeutico o requieras
              servicios periciales, estoy aqui para ayudarte.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Info column */}
          <div className="md:col-span-2">
            <Reveal delay={200}>
              <div className="rounded-xl bg-primary p-8 text-primary-foreground shadow-lg">
                <h3 className="mb-6 text-xl font-bold">
                  {"Informacion de Contacto"}
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-sm font-bold text-accent">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">{"Llena el formulario"}</p>
                      <p className="mt-1 text-sm text-primary-foreground/70">
                        Selecciona si eres paciente o colega/abogado y completa tus datos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-sm font-bold text-accent">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">{"Analisis de solicitud"}</p>
                      <p className="mt-1 text-sm text-primary-foreground/70">
                        Revisare tu requerimiento a la brevedad posible.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-sm font-bold text-accent">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">{"Respuesta"}</p>
                      <p className="mt-1 text-sm text-primary-foreground/70">
                        Me comunicare contigo para coordinar una cita o discutir
                        los detalles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-primary-foreground/10 pt-6">
                  <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Respuesta en menos de 24 horas</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-sm text-primary-foreground/70">
                    <Shield className="h-4 w-4 text-accent" />
                    <span>Confidencialidad garantizada</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form column con Borde Superior de Acento y Sombra Profunda */}
          <div className="md:col-span-3">
            <Reveal delay={400}>
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border-t-4 border-t-accent border-x border-b border-border bg-card p-8 shadow-xl shadow-accent/5"
              >
                {/* User Type Switch */}
                <div className="mb-8 flex rounded-lg bg-muted p-1">
                  <button
                    type="button"
                    onClick={() => setUserType("paciente")}
                    className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-all ${userType === "paciente"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Soy Paciente
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("profesional")}
                    className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-all ${userType === "profesional"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Soy Abogado / Colega
                  </button>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-foreground">
                      Nombre completo <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      Correo electronico <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-foreground">
                      Telefono <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  {userType === "paciente" && (
                    <>
                      <div>
                        <label htmlFor="edad" className="mb-1.5 block text-sm font-medium text-foreground">
                          Edad
                        </label>
                        <input
                          type="number"
                          id="edad"
                          name="edad"
                          min="1"
                          max="120"
                          value={formData.edad}
                          onChange={handleChange}
                          placeholder="Ej: 30"
                          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>

                      <div>
                        <label htmlFor="modalidad" className="mb-1.5 block text-sm font-medium text-foreground">
                          Modalidad preferida
                        </label>
                        <select
                          id="modalidad"
                          name="modalidad"
                          value={formData.modalidad}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        >
                          <option value="en-linea">En linea</option>
                          <option value="presencial">Presencial</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="sm:col-span-2">
                    <label htmlFor="motivo" className="mb-1.5 block text-sm font-medium text-foreground">
                      {userType === "paciente" ? "Por qué buscas terapia?" : "Motivo de la consulta"} <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="motivo"
                      name="motivo"
                      required
                      rows={5}
                      value={formData.motivo}
                      onChange={handleChange}
                      placeholder={userType === "paciente" ? "Cuentame brevemente tu situacion..." : "Describe el caso o motivo de colaboracion..."}
                      className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || showButtonSuccess}
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all ${showButtonSuccess
                    ? "bg-green-600 text-white"
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? "Enviando..." : showButtonSuccess ? (
                    <>¡Enviado con éxito! <CheckCircle className="h-4 w-4" /></>
                  ) : (
                    <>Enviar Solicitud <Send className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}