import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Octavio Torres R. | Psicologia Forense y Clinica',
  description:
    'Psicologo forense y clinico egresado de la UNAM. Terapia cognitivo conductual, peritajes psicologicos y servicios para abogados.',
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={_inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
