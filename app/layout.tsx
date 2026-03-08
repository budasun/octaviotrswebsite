import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  // metadataBase es necesario en Next.js para que las rutas relativas de las imágenes funcionen en el Open Graph
  metadataBase: new URL('https://www.octaviotrs.com'),

  title: 'Octavio Torres R. | Psicología Clínica, Forense & Tecnología',
  description: 'Psicoterapia, Psicometría, Periciales y Desarrollo de software.',

  openGraph: {
    title: 'Octavio Torres R. | Psicología Clínica, Forense & Tecnología',
    description: 'Psicoterapia, Psicometría, Periciales y Desarrollo de software.',
    url: 'https://www.octaviotrs.com',
    siteName: 'Octavio Torres R.',
    images: [
      {
        url: '/images/octavio-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Octavio Torres R. - Psicología Clínica, Forense & Tecnología',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
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