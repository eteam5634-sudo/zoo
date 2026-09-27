import { contact, navLinks, socialLinks } from "@/data/site";

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["label"] }) {
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M14 8.5h2.5V6H14c-2.2 0-3.5 1.4-3.5 3.6V12H8.5v2.5H10.5V20h2.6v-5.5h2.2l.4-2.5h-2.6v-1.6c0-.7.3-1.4 1.5-1.4Z" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M22.5 12.2s0-3-.4-4.3c-.2-.8-.8-1.4-1.6-1.6C19 5.9 12 5.9 12 5.9s-7 0-8.5.4c-.8.2-1.4.8-1.6 1.6C1.5 9.2 1.5 12.2 1.5 12.2s0 3 .4 4.3c.2.8.8 1.4 1.6 1.6 1.5.4 8.5.4 8.5.4s7 0 8.5-.4c.8-.2 1.4-.8 1.6-1.6.4-1.3.4-4.3.4-4.3ZM10 15.2V9.2l5.2 3-5.2 3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
      <path d="M14.5 3c.4 2.4 1.8 4.1 4.1 4.4v2.5c-1.4 0-2.7-.4-3.9-1.2v6.7c0 3.4-2.6 6.1-6.2 6.1S2.4 18.8 2.4 15.4c0-3.3 2.5-5.9 5.8-6.1v2.6c-1.6.2-2.8 1.5-2.8 3.2 0 1.8 1.4 3.2 3.2 3.2s3.1-1.4 3.1-3.2V3h2.8Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <p className="font-display text-3xl">WILDHaven Zoo</p>
          <p className="mt-3 text-sm tracking-[0.16em] uppercase text-sand">
            Where Wildlife Comes Alive
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[0.72rem] tracking-[0.24em] uppercase text-sand">Navigate</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="text-sm text-cream/80 transition hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.72rem] tracking-[0.24em] uppercase text-sand">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="text-cream/80 transition hover:text-cream" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <a className="text-cream/80 transition hover:text-cream" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.72rem] tracking-[0.24em] uppercase text-sand">Social</p>
          <ul className="mt-4 flex gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition hover:border-cream hover:bg-cream hover:text-forest"
                >
                  <SocialIcon name={link.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto w-full max-w-[1400px] px-5 py-6 text-xs text-cream/60 sm:px-8 lg:px-12">
          © 2026 WILDHaven Zoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
