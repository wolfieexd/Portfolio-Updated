import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import CaseFiles from './components/CaseFiles'
import TextureOverlay from './components/TextureOverlay'

const mugshotUrl = new URL('../assets/sujan.png', import.meta.url).href

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function App() {
  return (
    <>
      <TextureOverlay />
      <main className="deckle paper-stains relative mx-auto my-2 min-h-screen w-[calc(100%-1rem)] max-w-[1180px] overflow-hidden border-[3px] border-double border-foreground bg-background px-2 py-2 text-center text-foreground shadow-[5px_5px_0_#1a1a1a] sm:w-[calc(100%-2rem)] sm:px-4 md:my-6 md:border-[16px] md:px-7 md:py-6 md:shadow-[16px_16px_0_#1a1a1a] lg:px-10">
        <div className="pointer-events-none absolute inset-3 border border-foreground/35 md:inset-6" />
        <div className="pointer-events-none absolute inset-5 border-[3px] border-double border-foreground/65 md:inset-10 md:border-[6px]" />

        <div className="relative border-y-[3px] border-foreground py-2 md:border-y-[8px]">
          <div className="border-y-2 border-foreground py-4 md:py-7">
            <section className="flex min-h-[82svh] flex-col items-center justify-center gap-4 md:gap-6">
              <div className="ornament-rule font-mono text-xs font-bold uppercase md:text-base">
                International Warrant Notice No. 404
              </div>

              <div className="wanted-cut h-8 w-full border-y-[3px] border-foreground opacity-85 md:h-14 md:border-y-[8px]" />

              <h1 className="ink-bleed font-oswald text-[22vw] uppercase leading-[0.72] text-foreground sm:text-[21vw] lg:text-[15rem]">
                Most Wanted
              </h1>

              <div className="w-full border-y-[4px] border-double border-foreground px-2 py-4 md:border-y-[12px] md:px-8 md:py-6">
                <p className="letterpress font-oswald text-5xl uppercase leading-none text-accent sm:text-7xl md:text-9xl">
                  $50,000 Reward
                </p>
                <p className="mt-3 font-serif text-xl uppercase leading-tight md:text-4xl">
                  For Information Leading to Arrest
                </p>
              </div>

              <p className="max-w-4xl border-y-[2px] border-dotted border-foreground py-3 font-serif text-base uppercase leading-relaxed md:border-y-[6px] md:text-2xl">
                Suspect is known to craft interfaces, secure perimeters, and leave unusually legible source code at the scene.
              </p>
            </section>

            <motion.section
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="border-t-[4px] border-double border-foreground px-1 py-10 md:border-t-[12px] md:px-4 md:py-16"
            >
              <div className="broadsheet-divider mb-8 font-oswald text-2xl text-foreground md:text-4xl">
                *
              </div>

              <h2 className="ink-bleed ornament-rule font-oswald text-5xl uppercase leading-none md:text-8xl">
                Dead Or Alive
              </h2>

              <div className="mx-auto mt-8 w-full max-w-[310px] border-l-[7px] border-r-[4px] border-t-[4px] border-b-[8px] border-foreground bg-background p-2 shadow-[7px_7px_0_#1a1a1a] md:max-w-[430px] md:border-l-[18px] md:border-r-[8px] md:border-t-[8px] md:border-b-[20px] md:p-4 md:shadow-[18px_18px_0_#1a1a1a]">
                <div className="relative border-[4px] border-foreground md:border-[8px]">
                  <img
                    src={mugshotUrl}
                    alt="Sujan S mugshot"
                    className="aspect-[4/5] w-full object-cover grayscale contrast-[1.4] sepia-[.6]"
                  />
                  <div className="rubber-stamp absolute right-0 top-0 z-20 h-24 rotate-[12deg] text-[0.5rem] md:right-1 md:top-1 md:h-36 md:text-[0.68rem]">
                    <span className="rubber-stamp__small">Bureau</span>
                    <span className="rubber-stamp__large text-base md:text-2xl">Wanted</span>
                    <span className="rubber-stamp__small">Filed</span>
                  </div>
                </div>
              </div>

              <h2 className="ink-bleed mx-auto mt-10 inline-block max-w-full border-y-[4px] border-double border-foreground px-3 py-2 font-oswald text-5xl uppercase leading-none text-accent md:border-y-[12px] md:px-10 md:text-9xl">
                Sujan S
              </h2>

              <p className="mx-auto mt-6 max-w-3xl font-serif text-xl uppercase leading-relaxed md:text-3xl">
                Alias: front-end engineer, security-minded builder, and repeat offender in high-contrast interface work.
              </p>
            </motion.section>

            <CaseFiles reveal={reveal} />

            <motion.section
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto max-w-5xl border-t-[4px] border-double border-foreground px-1 py-10 md:border-t-[12px] md:px-4 md:py-16"
            >
              <div className="broadsheet-divider mb-8 font-oswald text-2xl text-foreground md:text-4xl">
                *
              </div>

              <h2 className="ink-bleed ornament-rule font-oswald text-5xl uppercase leading-none md:text-8xl">
                Telegraph The Bureau
              </h2>

              <form action="https://splitforms.com/api/submit" method="POST" className="printed-field mt-8 border-[3px] border-double border-foreground p-4 text-left shadow-[6px_6px_0_#1a1a1a] md:border-[8px] md:p-8 md:shadow-[16px_16px_0_#1a1a1a]">
                <input type="hidden" name="access_key" value="cf6a09cc385a4503bc02ed354b89b058" />
                <input type="hidden" name="form-name" value="portfolio-telegraph" />
                <input type="hidden" name="form_loaded_at" value={Date.now()} />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

                <div className="border-b-[3px] border-double border-foreground pb-4 text-center font-mono text-sm font-bold uppercase md:border-b-[8px] md:text-xl">
                  International Telegraph Office | Priority Warrant Dispatch
                </div>

                <div className="mt-8 grid gap-8 font-serif md:grid-cols-2 md:gap-10">
                  <label className="block text-xl uppercase md:flex md:items-end md:gap-4 md:text-2xl">
                    <span className="mb-2 block shrink-0 md:mb-0">Informant Name</span>
                    <input
                      name="name"
                      className="w-full border-0 border-b-[3px] border-dotted border-foreground bg-transparent px-1 py-2 font-mono text-xl uppercase text-foreground outline-none md:border-b-[4px] md:text-2xl"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="block text-xl uppercase md:flex md:items-end md:gap-4 md:text-2xl">
                    <span className="mb-2 block shrink-0 md:mb-0">Return Telegraph</span>
                    <input
                      name="email"
                      type="email"
                      className="w-full border-0 border-b-[3px] border-dotted border-foreground bg-transparent px-1 py-2 font-mono text-xl uppercase text-foreground outline-none md:border-b-[4px] md:text-2xl"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label className="mt-10 block font-serif text-xl uppercase md:text-2xl">
                  <span className="mb-2 block">Message Contents</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full resize-none border-0 border-b-[3px] border-dotted border-foreground bg-transparent px-1 py-2 font-mono text-lg uppercase leading-relaxed text-foreground outline-none md:border-b-[4px] md:text-2xl"
                    required
                  />
                </label>

                <div className="mt-10 flex flex-col items-center gap-5 border-t-[3px] border-dotted border-foreground pt-6 md:flex-row md:justify-between md:border-t-[6px]">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 bg-foreground px-6 py-4 font-oswald text-2xl uppercase text-background shadow-[6px_6px_0_#a52a2a] md:px-10 md:text-4xl"
                  >
                    <Send className="h-6 w-6 md:h-8 md:w-8" />
                    Send Telegram
                  </button>

                  <div className="flex flex-wrap justify-center gap-4 font-mono text-sm font-bold uppercase md:text-base">
                    <a className="inline-flex items-center gap-2 border-b-[3px] border-foreground" href="mailto:sujans1411@gmail.com">
                      <Mail className="h-4 w-4" />
                      Mail
                    </a>
                    <a className="inline-flex items-center gap-2 border-b-[3px] border-foreground" href="https://github.com/wolfieexd" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a className="inline-flex items-center gap-2 border-b-[3px] border-foreground" href="https://www.linkedin.com/in/sujan05" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </form>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  )
}
