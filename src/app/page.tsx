import Reveal from "@/components/Reveal";
import { createTranslator, getRawSiteContent, type LanguageCode, type SiteContent } from "@/lib/content";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const lang = (await searchParams)?.lang ?? "en";
  const t = createTranslator(lang as LanguageCode);
  const content: SiteContent = await getRawSiteContent();
  return {
    title: t(content.metadata.title),
    description: t(content.metadata.description),
    metadataBase: new URL(t(content.metadata.openGraph.url)),
    openGraph: {
      title: t(content.metadata.openGraph.title),
      description: t(content.metadata.openGraph.description),
      url: t(content.metadata.openGraph.url),
      siteName: t(content.metadata.openGraph.siteName),
      locale: t(content.metadata.openGraph.locale),
    },
    alternates: {
      canonical: "/",
    },
  };
}


export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const lang = (await searchParams)?.lang ?? "en";
  const content: SiteContent = await getRawSiteContent();
  const t = createTranslator(lang as LanguageCode);
  return (
    <><header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-white/10">
    <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
      <a href="#profile" className="font-semibold tracking-tight accent">Marko</a>
      <div className="hidden sm:flex gap-6 text-sm">
      <a href="#education" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">{t(content.sections.education)}</a>
      <a href="#experience" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">{t(content.sections.experience)}</a>
      <a href="#projects" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">{t(content.sections.projects)}</a>
      <a href="#certificates" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">{t(content.sections.certificates)}</a>
      <a href="#achievements" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">{t(content.sections.achievements)}</a>
      <a href="#skills" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">{t(content.sections.skillsAndLanguages)}</a>
      <a href="#contact" className="opacity-80 hover:opacity-100 transition-colors hover:text-[var(--accent)]">{t(content.sections.contact)}</a>
      </div>
    </nav>
  </header>
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-24">
      {/* Profile / Hero */}
      <section id="profile" className="pt-6 relative">
        <div className="hero-ring" />
        <div className="text-sm uppercase tracking-[0.35em] muted">{t(content.profile.greeting)}</div>
        <h1 className="mt-2 text-5xl sm:text-6xl font-bold tracking-tight">
          {t(content.profile.firstName)} <span className="accent">{t(content.profile.lastName)}</span>
        </h1>
        <p className="mt-3 text-lg sm:text-xl opacity-90">{t(content.profile.role)}</p>
        <p className="mt-6 max-w-2xl leading-7 opacity-90">
          {t(content.profile.description)}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-[var(--accent)] text-[var(--background)] hover:opacity-90 transition">{t(content.profile.ctaContact)}</a>
          <a href="#projects" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium border border-white/15 hover:bg-white/5 transition">{t(content.profile.ctaProjects)}</a>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2 className="section-title text-2xl font-semibold tracking-tight">{t(content.sections.education)}</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">{t(content.education[0].years)}</div>
            <h3 className="mt-1 font-semibold">{t(content.education[0].school)}</h3>
            <p className="opacity-80">{t(content.education[0].field)}</p>
            <p className="opacity-80">{t(content.education[0].degree)}</p>
          </div>
          </Reveal>
          <Reveal delayMs={120}>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">{t(content.education[1].years)}</div>
            <h3 className="mt-1 font-semibold">{t(content.education[1].school)}</h3>
            <p className="opacity-80">{t(content.education[1].field)}</p>
            <p className="opacity-80">{t(content.education[1].degree)}</p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="section-title text-2xl font-semibold tracking-tight">{t(content.sections.experience)}</h2>
        <div className="mt-8 space-y-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">{t(content.experience[0].years)}</div>
            <h3 className="mt-1 font-semibold">{t(content.experience[0].companyAndRole)}</h3>
            {content.experience[0].descriptions.map((d, idx: number) => (
              <p key={idx} className="opacity-80 mt-2">{t(d)}</p>
            ))}
          </div>
          </Reveal>
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">{t(content.experience[1].years)}</div>
            <h3 className="mt-1 font-semibold">{t(content.experience[1].companyAndRole)}</h3>
            {content.experience[1].descriptions.map((d, idx: number) => (
              <p key={idx} className="opacity-80 mt-2">{t(d)}</p>
            ))}
            <div className="mt-4">
              {content.experience[1].internalEffortsTitle && (
                <h4 className="font-semibold">{t(content.experience[1].internalEffortsTitle)}</h4>
              )}
              <ul className="list-disc list-inside opacity-80 space-y-1 mt-2">
                {content.experience[1].bullets?.map((b, idx: number) => (
                  <li key={idx}>{t(b)}</li>
                ))}
              </ul>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="section-title text-2xl font-semibold tracking-tight">{t(content.sections.projects)}</h2>
        <p className="mt-3 opacity-80">
          {t(content.sections.projectsExplorePrefix)}{" "}
          <a
            href={t(content.social.githubUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--accent)]"
          >
            {t(content.sections.projectsExploreLinkText)}
          </a>
          .
        </p>
        <div className="mt-8 grid sm:grid-cols-2 auto-rows-fr gap-6">
          {content.projects.map((p) => (
            <Reveal key={t(p.name)}>
              <article className="rounded-xl border border-white/10 p-4 hover:border-[var(--accent)]/40 transition-colors group h-full flex flex-col">
                <div className="relative w-full overflow-hidden rounded-lg border border-white/10 h-40 bg-white/5 mb-3">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${t(p.name)} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      priority={false}
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-xs uppercase tracking-wide opacity-50">
                      Preview Unavailable
                    </div>
                  )}
                </div>
                <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">{t(p.name)}</h3>
                <p className="mt-1 opacity-80">{t(p.desc)}</p>
                <div className="mt-auto">
                  <p className="text-sm opacity-60">{t(p.tech)}</p>
                  {p.url && (
                    <div className="pt-2">
                      {p.url.toLowerCase().endsWith(".apk") ? (
                        <a
                          href={p.url}
                          download
                          className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-[var(--accent)] text-[var(--background)] hover:opacity-90 transition"
                        >
                          {t(p.cta ?? "Download")}
                        </a>
                      ) : (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium border border-white/15 hover:bg-white/5 transition"
                        >
                          {t(p.cta ?? "Visit website")}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates">
        <h2 className="section-title text-2xl font-semibold tracking-tight">{t(content.sections.certificates)}</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Reveal>
          <a href={t(content.certificates[0].url)} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors block">
            <h3 className="font-semibold">{t(content.certificates[0].title)}</h3>
            <p className="mt-1 opacity-80">{t(content.certificates[0].subtitle)}</p>
          </a>
          </Reveal>
          <Reveal delayMs={120}>
          <a href={t(content.certificates[1].url)} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors block">
            <h3 className="font-semibold">{t(content.certificates[1].title)}</h3>
            <p className="mt-1 opacity-80">{t(content.certificates[1].subtitle)}</p>
          </a>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements">
        <h2 className="section-title text-2xl font-semibold tracking-tight">{t(content.sections.achievements)}</h2>
        <div className="mt-8 space-y-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">{t(content.achievements[0].title)}</h3>
            <p className="opacity-80 mt-1">{t(content.achievements[0].description)}</p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Skills & Languages */}
      <section id="skills">
        <h2 className="section-title text-2xl font-semibold tracking-tight">{t(content.sections.skillsAndLanguages)}</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">{t(content.sections.languages)}</h3>
            <ul className="mt-2 space-y-1 opacity-80">
              {content.skills.languages.map((l, idx: number) => (
                <li key={idx}>{t(l)}</li>
              ))}
            </ul>
          </div>
          </Reveal>
          <Reveal delayMs={120}>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">{t(content.sections.technologies)}</h3>
            <p className="mt-2 opacity-80">{t(content.skills.technologies)}</p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="section-title text-2xl font-semibold tracking-tight">{t(content.sections.contact)}</h2>
        <div className="mt-8 grid sm:grid-cols-1 gap-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">{t(content.sections.getInTouch)}</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="hover:underline hover:text-[var(--accent)] transition-colors" href={`tel:${t(content.contact.phone)}`}>{t(content.contact.phone)}</a></li>
              <li><a className="hover:underline hover:text-[var(--accent)] transition-colors" href={`mailto:${t(content.contact.email)}`}>{t(content.contact.email)}</a></li>
              <li><a className="hover:underline hover:text-[var(--accent)] transition-colors" target="_blank" rel="noopener noreferrer" href={t(content.contact.website)}>{t(content.contact.website)}</a></li>
            </ul>
          </div>
          </Reveal>
        </div>
      </section>
      </main>
    </>
  );
}
