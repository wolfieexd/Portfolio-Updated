import { motion, type Variants } from 'framer-motion'

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Django',
  'FastAPI',
  'Node.js',
  'Python',
  'SQL',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
  'Linux',
  'PyTorch',
  'OpenCV',
  'YOLO',
  'Tailwind CSS',
  'Framer Motion',
  'Cybersecurity',
  'Prompt Engineering',
]

const offenses = [
  {
    charge: 'Grand Theft Architecture',
    record: 'R&D Intern | Hovernest Pvt Ltd | Feb 2026 - July 2026',
    report: (
      <>
        Collaborating on research, prototyping, validation, feasibility analysis, experimentation, and documentation for <span className="redacted">drone and emerging technology</span> work.
      </>
    ),
  },
  {
    charge: 'Aggravated Perimeter Hardening',
    record: 'Project Intern | Larsen & Toubro Construction HQ | June 2025 - July 2025',
    report: (
      <>
        Developed workflow automations with <span className="redacted">Power Automate</span> and <span className="redacted">Microsoft Copilot Studio</span>, then automated SQL query scenarios using prompt engineering and basic RBAC.
      </>
    ),
  },
  {
    charge: 'Unlicensed Interface Forgery',
    record: 'AI Intern | Edunet Foundation & Microsoft | May 2025 - June 2025',
    report: (
      <>
        Executed <span className="redacted">Azure ML workflows</span> for preprocessing, model training, and prototype deployment while contributing to cloud-hosted application lifecycles.
      </>
    ),
  },
]

const projects = [
  {
    exhibit: 'Exhibit A',
    title: 'QuteMail',
    docket: 'SIH 2025 ISRO Finalist | Django, secure key management, QKD concepts',
    summary: (
      <>
        <span className="redacted">Quantum-key secure</span> email client supporting IMAP and SMTP with <span className="redacted">ETSI-compliant</span> encryption protocols.
      </>
    ),
    href: 'https://github.com/wolfieexd/QuteMail',
  },
  {
    exhibit: 'Exhibit B',
    title: 'Advanced Distributed Job Scheduling',
    docket: 'Python, FastAPI, Redis, PostgreSQL, React',
    summary: (
      <>
        Distributed job scheduler with <span className="redacted">Redis priority queues</span>, asynchronous background workers, and real-time execution monitoring.
      </>
    ),
    href: 'https://github.com/wolfieexd/Distributed-Job-Scheduler',
  },
  {
    exhibit: 'Exhibit C',
    title: 'SentinelIQ',
    docket: 'React, FastAPI, multi-agent orchestration, RAG',
    summary: (
      <>
        <span className="redacted">Autonomous security</span> incident investigator with deterministic workflow orchestration, compliance guardrails, and <span className="redacted">local semantic retrieval</span>.
      </>
    ),
    href: 'https://github.com/wolfieexd/SentinelIQ',
  },
]

type CaseFilesProps = {
  reveal: Variants
}

export default function CaseFiles({ reveal }: CaseFilesProps) {
  return (
    <div className="w-full">
      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-5xl border-t-[4px] border-double border-foreground px-1 pt-10 pb-3 md:border-t-[12px] md:px-4 md:pt-16 md:pb-6"
      >
        <div className="broadsheet-divider mb-8 font-oswald text-2xl text-foreground md:text-4xl">
          *
        </div>

        <h2 className="ink-bleed ornament-rule mb-8 text-center font-oswald text-5xl uppercase leading-none md:text-8xl">
          Known Arsenal
        </h2>

        <p className="mx-auto max-w-4xl border-y-[2px] border-dotted border-foreground py-5 text-center font-oswald text-2xl uppercase leading-relaxed md:border-y-[6px] md:text-5xl">
          Armed with{' '}
          {skills.map((skill, index) => (
            <span key={skill}>
              <span className="text-accent">{skill}</span>
              {index < skills.length - 1 ? <span className="text-foreground"> • </span> : null}
            </span>
          ))}
        </p>
      </motion.section>

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-5xl border-t-[4px] border-double border-foreground px-1 py-10 md:border-t-[12px] md:px-4 md:py-16"
      >
        <div className="broadsheet-divider mb-8 font-oswald text-2xl text-foreground md:text-4xl">
          *
        </div>

        <h2 className="ink-bleed ornament-rule mb-8 text-center font-oswald text-5xl uppercase leading-none md:text-8xl">
          The Rap Sheet
        </h2>

        <div className="printed-field border-x-[3px] border-b-[3px] border-foreground px-3 py-2 text-left md:border-x-[8px] md:border-b-[8px] md:px-8">
          {offenses.map((offense, index) => {
            return (
              <article
                key={offense.charge}
                className={`py-8 ${
                  index < offenses.length - 1
                    ? 'border-b-[3px] border-dotted border-foreground md:border-b-[8px]'
                    : ''
                }`}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <h3 className="letterpress font-oswald text-3xl uppercase leading-tight text-accent md:text-5xl">
                    {offense.charge}
                  </h3>
                  <span className="font-mono text-xl font-bold uppercase md:text-3xl">
                    No. {String(index + 1).padStart(3, '0')}
                  </span>
                </div>
                <p className="mt-3 border-y-[2px] border-double border-foreground py-2 font-mono text-sm font-bold uppercase md:border-y-[3px] md:text-lg">
                  {offense.record}
                </p>
                <p className="mt-4 font-serif text-lg uppercase leading-relaxed md:text-2xl">
                  {offense.report}
                </p>
              </article>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="mx-auto max-w-5xl border-t-[4px] border-double border-foreground px-1 py-10 md:border-t-[12px] md:px-4 md:py-16"
      >
        <div className="broadsheet-divider mb-8 font-oswald text-2xl text-foreground md:text-4xl">
          *
        </div>

        <h2 className="ink-bleed ornament-rule mb-8 text-center font-oswald text-5xl uppercase leading-none md:text-8xl">
          Confiscated Evidence
        </h2>

        <div className="grid gap-8 text-left md:gap-10">
          {projects.map((project) => (
            <a
              key={project.exhibit}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="printed-field group relative border-[3px] border-double border-foreground bg-background p-4 pt-12 shadow-[6px_6px_0_#1a1a1a] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 md:border-[8px] md:p-8 md:pt-16 md:shadow-[16px_16px_0_#1a1a1a]"
            >
              <div className="absolute right-0 top-0 bg-foreground px-3 py-2 font-mono text-sm font-bold uppercase text-background md:px-5 md:py-3 md:text-xl">
                {project.exhibit}
              </div>

              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <h3 className="letterpress font-oswald text-4xl uppercase leading-none text-accent md:text-6xl">
                  {project.title}
                </h3>
                <span className="font-mono text-xl font-bold uppercase md:text-3xl">Filed</span>
              </div>
              <p className="mt-4 border-y-[2px] border-dotted border-foreground py-2 font-mono text-sm font-bold uppercase md:border-y-[5px] md:text-lg">
                {project.docket}
              </p>
              <p className="mt-4 font-serif text-lg uppercase leading-relaxed md:text-2xl">
                {project.summary}
              </p>
              <p className="mt-5 inline-block border-b-[3px] border-dotted border-accent pb-1 font-mono text-sm font-bold uppercase text-accent md:text-lg">
                View Evidence
              </p>
            </a>
          ))}

          <a
            href="https://github.com/wolfieexd"
            target="_blank"
            rel="noreferrer"
            className="group block border-[3px] border-dotted border-foreground bg-background p-5 text-center shadow-[6px_6px_0_#1a1a1a] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 md:border-[8px] md:p-8 md:shadow-[16px_16px_0_#1a1a1a]"
          >
            <p className="font-oswald text-4xl uppercase leading-none text-accent md:text-6xl">
              And Many More
            </p>
            <p className="mt-4 font-serif text-lg uppercase leading-relaxed md:text-2xl">
              Additional evidence is archived in the public GitHub vault.
            </p>
            <p className="seared-edge mt-5 inline-block border-b-[3px] border-dotted border-accent pb-1 px-1 font-mono text-sm font-bold uppercase text-accent md:text-lg md:px-2">
              View Evidence
            </p>
          </a>
        </div>
      </motion.section>
    </div>
  )
}
