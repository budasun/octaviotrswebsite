import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"



function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18Prwg2cwV/",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/octavio-trs-psicologo",
    icon: LinkedInIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@divanpsicomagico?_r=1&_t=ZS-93soKNo45rA",
    icon: TikTokIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@AlquimiaTranspersonal",
    icon: YoutubeIcon,
  },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary py-8 lg:py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-2 text-lg font-bold text-primary-foreground">
              Octavio <span className="text-accent">Torres R.</span>
            </h3>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Psicólogo forense y clínico egresado de la UNAM. Comprometido
              con la salud mental y la justicia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-primary-foreground/15 text-primary-foreground/50 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-primary-foreground/80 uppercase">
              Enlaces
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Libros", href: "#libros" },
                { label: "Servicios", href: "#servicios" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-primary-foreground/80 uppercase">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:contacto@octaviotrs.com"
                  className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                >
                  contacto@octaviotrs.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/50">
                  Ciudad de México, México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Octavio Torres R. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
