import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-24">
      {/* Profile / Hero */}
      <section id="profile" className="pt-6 relative">
        <div className="hero-ring" />
        <div className="text-sm uppercase tracking-[0.35em] muted">Hi, I am</div>
        <h1 className="mt-2 text-5xl sm:text-6xl font-bold tracking-tight">
          Marko <span className="accent">Puzović</span>
        </h1>
        <p className="mt-3 text-lg sm:text-xl opacity-90">SOFTWARE ENGINEER</p>
        <p className="mt-6 max-w-2xl leading-7 opacity-90">
          Software engineer focused on .NET and Azure. I design and deliver reliable, cloud‑native services and actively share knowledge through talks, mentorship, and teaching. Outside of work, I enjoy traveling and exploring diverse cultures.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-[var(--accent)] text-[var(--background)] hover:opacity-90 transition">Contact me</a>
          <a href="#projects" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium border border-white/15 hover:bg-white/5 transition">View projects</a>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2 className="section-title text-2xl font-semibold tracking-tight">Education</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">2013 - 2017</div>
            <h3 className="mt-1 font-semibold">Technical High School &quot;Ivan Sarić&quot; Subotica, Serbia</h3>
            <p className="opacity-80">Field of study - Information Systems</p>
            <p className="opacity-80">Degree - Technician of Information Technologies</p>
          </div>
          </Reveal>
          <Reveal delayMs={120}>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">2017 - 2021</div>
            <h3 className="mt-1 font-semibold">Faculty of Technical Sciences, University of Novi Sad, Serbia</h3>
            <p className="opacity-80">Field of study - Engineering of Information Systems</p>
            <p className="opacity-80">Degree - Bachelor of Engineering in Information Technology</p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="section-title text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">2025 — Present</div>
            <h3 className="mt-1 font-semibold">Suitsupply — .NET Software Engineer (Amsterdam,Netherlands)</h3>
            <p className="opacity-80 mt-2">Suitsupply is an international menswear brand headquartered in the Netherlands. I contribute to the CRM domain, delivering event‑driven services on Azure with .NET, Azure Functions, and Logic Apps, and collaborating across teams to ensure reliable customer journeys.</p>
          </div>
          </Reveal>
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <div className="text-sm opacity-60">2021 - 2025</div>
            <h3 className="mt-1 font-semibold">VegaIT — Software Engineer (Novi Sad, Serbia)</h3>
            <p className="opacity-80 mt-2">Client projects: Worked for an international luxury men&#39;s suits brand as a .NET Developer on the CRM team. Built a centralized email service that is fully event-driven and consists of a series of Azure Functions and Logic Apps.</p>
            <p className="opacity-80 mt-2">Integrated with Salesforce (Service Cloud, Commerce Cloud, Marketing Cloud), booking services (Jrni, Waitwhile), and owned customer management processes.</p>
            <p className="opacity-80 mt-2">Managed Azure infrastructure and CI/CD with Azure DevOps, building pipelines and ARM/Bicep templates for resource management.</p>
            <div className="mt-4">
              <h4 className="font-semibold">Internal efforts</h4>
              <ul className="list-disc list-inside opacity-80 space-y-1 mt-2">
                <li>Spoke at an internal conference about Minimal APIs: performance and real use cases.</li>
                <li>Mentorship and led multiple internal projects.</li>
                <li>Lectured first-year Software Engineering students at the Faculty of Technical Sciences on OOP basics and SOLID principles.</li>
              </ul>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="section-title text-2xl font-semibold tracking-tight">Personal projects</h2>
        <p className="mt-3 opacity-80">
          Explore more on
          {" "}
          <a
            href="https://github.com/MarkoP3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--accent)]"
          >
            GitHub
          </a>
          .
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {[
            { name: "Drago Chase", desc: "Duck and jump android game inspired by an old programming teacher.", tech: "Javascript, HTML, CSS, Phaser, Cordova" },
            { name: "Insurance offer", desc: "Android app that generates insurance policy offers.", tech: "Javascript, HTML, CSS, Cordova" },
            { name: "Pizzeria Peperoni", desc: "Pizza ordering site for the local pizzeria.", tech: ".Net, React.js, SQL Server" },
            { name: "Progres Invest", desc: "Real estate catalog for local investment company.", tech: "Next.js, Contentful" },
            { name: "Resurs nekretnine", desc: "Real estate agancy website.", tech: "Next.js, Contentful, Mysql" },
            { name: "Fitness Leaderboard", desc: "Leaderboard for a local fitness competition.", tech: "React.js, Node.js, Socket.io" },
            { name: "Battleships", desc: "Multiplayer battleships game.", tech: "Node.js, Socket.io" },
          ].map((p) => (
            <Reveal key={p.name}>
              <article className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors group">
                <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">{p.name}</h3>
                <p className="mt-1 opacity-80">{p.desc}</p>
                <p className="mt-2 text-sm opacity-60">{p.tech}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates">
        <h2 className="section-title text-2xl font-semibold tracking-tight">Certificates</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Reveal>
          <a href="https://learn.nvidia.com/certificates?id=946ef9f0acf74d518c2c850c96ee38ea" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors block">
            <h3 className="font-semibold">NVIDIA Certificate 1</h3>
            <p className="mt-1 opacity-80">Fundamentals of Deep Learning</p>
          </a>
          </Reveal>
          <Reveal delayMs={120}>
          <a href="https://learn.nvidia.com/certificates?id=fd528e576741437a8d7e3fc8de56dcdf" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors block">
            <h3 className="font-semibold">NVIDIA Certificate 2</h3>
            <p className="mt-1 opacity-80">Fundamentals of Deep Learning for Computer Vision</p>
          </a>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements">
        <h2 className="section-title text-2xl font-semibold tracking-tight">Achievements</h2>
        <div className="mt-8 space-y-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">2nd place Devogame 2019</h3>
            <p className="opacity-80 mt-1">Tech competition held by Devoteam. Alongside two colleagues, created a flood prevention system that won second place in the finals in Paris.</p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Skills & Languages */}
      <section id="skills">
        <h2 className="section-title text-2xl font-semibold tracking-tight">Skills & Languages</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">Languages</h3>
            <ul className="mt-2 space-y-1 opacity-80">
              <li>Serbian — Native</li>
              <li>English — Speaking, Writing</li>
            </ul>
          </div>
          </Reveal>
          <Reveal delayMs={120}>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">Technologies</h3>
            <p className="mt-2 opacity-80">NodeJS, C#, Java, MSSQL, React, CosmosDB, Azure DevOps, .NET, Azure</p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="section-title text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-8 grid sm:grid-cols-1 gap-6">
          <Reveal>
          <div className="rounded-xl border border-white/10 p-5 hover:border-[var(--accent)]/40 transition-colors">
            <h3 className="font-semibold">Get in touch</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="hover:underline hover:text-[var(--accent)] transition-colors" href="tel:+38163388371">+381 63 388 371</a></li>
              <li><a className="hover:underline hover:text-[var(--accent)] transition-colors" href="mailto:markopuzovic98@gmail.com">markopuzovic98@gmail.com</a></li>
              <li><a className="hover:underline hover:text-[var(--accent)] transition-colors" target="_blank" rel="noopener noreferrer" href="https://markopuzovic.site">markopuzovic.site</a></li>
            </ul>
          </div>
          </Reveal>
        </div>
      </section>
      </main>
  );
}
