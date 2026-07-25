import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
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
  const [telegraphStatus, setTelegraphStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [ticker, setTicker] = useState('Transmitting...')
  const successRedirect =
    typeof window === 'undefined' ? '/telegram-received.html' : `${window.location.origin}/telegram-received.html`

  const handleTelegraphSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setTelegraphStatus('sending')
    
    let tickCount = 0;
    const codes = ['. - . -', '- - . -', '. . . -', '- . - -', 'TRANSMITTING...'];
    const interval = setInterval(() => {
      setTicker(codes[tickCount % codes.length]);
      tickCount++;
    }, 250);

    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()
    const fallbackBody = [
      `Informant Name: ${name || 'Not provided'}`,
      `Return Telegraph: ${email || 'Not provided'}`,
      '',
      message || 'No message contents provided.',
    ].join('\n')

    try {
      formData.append('access_key', 'c7633e56-8f24-4d1a-8777-b42416432c91')
      formData.append('subject', 'Portfolio Telegraph Dispatch')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || result?.success !== true) {
        throw new Error('Web3Forms submission failed')
      }

      window.location.assign(successRedirect)
    } catch {
      window.location.href = `mailto:sujans1411@gmail.com?subject=${encodeURIComponent(
        'Portfolio Telegraph Dispatch',
      )}&body=${encodeURIComponent(fallbackBody)}`
      setTelegraphStatus('error')
    } finally {
      clearInterval(interval)
    }
  }

  return (
    <>
      <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="woodblock-bleed">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="paper-crease-overlay" />
      <TextureOverlay />
      <main className="deckle paper-stains relative mx-auto min-h-screen w-[calc(100%-2rem)] max-w-[1180px] overflow-hidden border-x-[3px] border-t-[3px] border-b-0 border-double border-foreground bg-background px-2 py-2 text-center text-foreground shadow-[4px_4px_0_#1a1a1a] sm:px-4 md:border-x-[16px] md:border-t-[16px] md:border-b-0 md:px-7 md:py-6 md:shadow-[16px_16px_0_#1a1a1a] lg:px-10 pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-3 border border-foreground/35 md:inset-6" />
        <div className="pointer-events-none absolute inset-5 border-[3px] border-double border-foreground/65 md:inset-10 md:border-[6px]" />

        <div className="relative border-y-[3px] border-foreground py-2 md:border-y-[8px]">
          <div className="border-y-2 border-foreground py-4 md:py-7">
            <section className="flex min-h-[82svh] flex-col items-center justify-center gap-3 pb-3 pt-4 md:gap-4 md:pb-4 md:pt-8">
              <div className="ornament-rule font-mono text-xs font-bold uppercase md:text-base">
                International Warrant Notice No. 404
              </div>

              <div className="wanted-cut h-8 w-full border-y-[3px] border-foreground opacity-85 md:h-14 md:border-y-[8px]" />

              <h1
                className="ink-bleed flex w-full flex-col items-center justify-center gap-2 py-6 text-foreground md:gap-4 font-oswald text-[16vw] uppercase leading-[0.75] tracking-tight md:text-[12.5rem] lg:text-[14.5rem]"
                aria-label="Most Wanted"
              >
                <span className="block">MOST</span>
                <span className="block">WANTED</span>
              </h1>



              <div className="relative w-full border-y-[4px] border-double border-foreground px-2 py-4 md:border-y-[12px] md:px-8 md:py-6">
                <p className="ink-bleed font-oswald text-5xl uppercase leading-none text-accent sm:text-7xl md:text-9xl">
                  $50,000 Reward
                </p>
                <p className="mx-auto mt-3 max-w-[19rem] font-serif text-lg uppercase leading-tight sm:max-w-none sm:text-xl md:text-4xl">
                  For Information Leading to Arrest
                </p>
                <div className="absolute -bottom-10 right-2 z-20 hidden rotate-[-6deg] opacity-90 sm:block md:-bottom-14 md:right-10">
                </div>
              </div>

              <p className="mx-auto max-w-[18rem] border-y-[2px] border-dotted border-foreground py-3 text-center font-serif text-sm uppercase leading-relaxed sm:max-w-4xl sm:text-base md:border-y-[6px] md:text-2xl">
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

              <div className="flex items-center justify-center gap-3 px-2 md:gap-6">
                <span className="ink-bleed font-oswald text-[2.7rem] leading-none md:text-[5.4rem]">*</span>
                <h2 className="ink-bleed text-center font-oswald text-5xl uppercase leading-[0.92] md:text-7xl lg:text-8xl">
                  Dead Or Alive
                </h2>
                <span className="ink-bleed font-oswald text-[2.7rem] leading-none md:text-[5.4rem]">*</span>
              </div>

              <div className="relative mx-auto mt-8 w-full max-w-[310px] border-l-[7px] border-r-[4px] border-t-[4px] border-b-[8px] border-foreground bg-background p-2 shadow-[7px_7px_0_#1a1a1a] md:max-w-[430px] md:border-l-[18px] md:border-r-[8px] md:border-t-[8px] md:border-b-[20px] md:p-4 md:shadow-[18px_18px_0_#1a1a1a]">
                <span className="pencil-mark absolute -left-4 top-10 -rotate-12 text-2xl md:-left-12 md:top-14 md:text-3xl">x 1.5</span>
                <span className="pencil-mark absolute -right-2 bottom-10 rotate-12 text-3xl md:-right-6 md:bottom-16 md:text-5xl">✓</span>
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

              <div className="flex items-center justify-center gap-3 px-2 md:gap-6">
                <span className="font-oswald text-[2.7rem] leading-none md:text-[5.4rem]">*</span>
                <h2 className="ink-bleed max-w-[13ch] text-center font-oswald text-5xl uppercase leading-[0.92] md:max-w-none md:text-7xl lg:text-8xl">
                  Telegraph The Bureau
                </h2>
                <span className="font-oswald text-[2.7rem] leading-none md:text-[5.4rem]">*</span>
              </div>

              <form onSubmit={handleTelegraphSubmit} className="printed-field mt-8 border-[3px] border-double border-foreground p-4 text-left shadow-[6px_6px_0_#1a1a1a] md:border-[8px] md:p-8 md:shadow-[16px_16px_0_#1a1a1a]">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

                <div className="border-b-[3px] border-double border-foreground pb-4 text-center font-mono text-sm font-bold uppercase md:border-b-[8px] md:text-xl">
                  International Telegraph Office | Priority Warrant Dispatch
                </div>

                <div className="mt-8 grid gap-8 font-serif md:grid-cols-2 md:gap-10">
                  <label className="block text-xl uppercase md:flex md:items-end md:gap-4 md:text-2xl">
                    <span className="typewriter-ink mb-2 block shrink-0 md:mb-0">Informant Name</span>
                    <input
                      name="name"
                      className="w-full border-0 border-b-[3px] border-dotted border-foreground bg-transparent px-1 py-2 font-mono text-xl uppercase text-foreground outline-none md:border-b-[4px] md:text-2xl"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="block text-xl uppercase md:flex md:items-end md:gap-4 md:text-2xl">
                    <span className="typewriter-ink mb-2 block shrink-0 md:mb-0">Return Telegraph</span>
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
                  <span className="typewriter-ink mb-2 block">Message Contents</span>
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
                    disabled={telegraphStatus === 'sending'}
                    className="inline-flex items-center justify-center gap-3 bg-foreground px-6 py-4 font-oswald text-2xl uppercase text-background shadow-[6px_6px_0_#a52a2a] md:px-10 md:text-4xl"
                  >
                    <Send className="h-6 w-6 md:h-8 md:w-8" />
                    {telegraphStatus === 'sending' ? ticker : 'Send Telegram'}
                  </button>
                </div>

                <div className="mx-auto mt-12 w-full max-w-3xl">
                  <div className="broadsheet-divider mb-8 font-oswald text-2xl text-foreground md:text-4xl">
                    *
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 font-mono text-sm font-bold uppercase md:text-base">
                    <a
                      className="inline-flex items-center gap-2 border-b-[3px] border-foreground transition-colors hover:border-accent hover:text-accent"
                      href="mailto:sujans1411@gmail.com"
                    >
                      <Mail className="h-4 w-4" />
                      Mail
                    </a>
                    <a
                      className="inline-flex items-center gap-2 border-b-[3px] border-foreground transition-colors hover:border-accent hover:text-accent"
                      href="https://github.com/wolfieexd"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub profile"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      className="inline-flex items-center gap-2 border-b-[3px] border-foreground transition-colors hover:border-accent hover:text-accent"
                      href="https://www.linkedin.com/in/sujan05"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
                {telegraphStatus === 'error' ? (
                  <p className="mt-6 border-y-[3px] border-dotted border-accent py-3 text-center font-mono text-sm font-bold uppercase text-accent md:text-base">
                    Dispatch failed in this browser. Please use the mail link.
                  </p>
                ) : null}
              </form>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  )
}
