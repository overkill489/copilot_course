'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'

type Project = {
  number: string
  type: string
  title: string
  description: string
  stack: string[]
  preview: string
  accent: string
}

const projects: Project[] = [
  {
    number: '01',
    type: 'Product design · 2025',
    title: 'Daybreak',
    description:
      'A calmer way to plan your day, built around thoughtful routines and a little more breathing room.',
    stack: ['Product design', 'React', 'Figma'],
    preview: 'Your day, in focus.',
    accent: 'bg-amber-200',
  },
  {
    number: '02',
    type: 'Web development · 2024',
    title: 'Fieldnotes',
    description:
      'A digital home for a small outdoor journal, with rich storytelling and a lightweight reading experience.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    preview: 'Stories from outside.',
    accent: 'bg-emerald-200',
  },
  {
    number: '03',
    type: 'Brand & digital · 2024',
    title: 'Common Ground',
    description:
      'A fresh identity and community platform that helps neighbors turn shared ideas into local projects.',
    stack: ['Brand identity', 'Web design', 'Figma'],
    preview: 'Good things grow here.',
    accent: 'bg-rose-200',
  },
]

type ContactMeDialogProps = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const ContactMeDialog = ({ isOpen, onOpen, onClose }: ContactMeDialogProps) => {
  const [isMessageSent, setIsMessageSent] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpen && dialog && !dialog.open) {
      dialog.showModal()
    }
  }, [isOpen])

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsMessageSent(true)
  }

  const handleDialogClose = () => {
    onClose()
    setIsMessageSent(false)
    setIsFormValid(false)
    formRef.current?.reset()
  }

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#20231f] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
      >
        Contact Me <span aria-hidden="true">↗</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        onClose={handleDialogClose}
        onClick={event => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close()
          }
        }}
        className="w-[calc(100%-2rem)] max-w-lg rounded-3xl bg-white p-0 text-[#20231f] shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm dark:bg-stone-900 dark:text-stone-100"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-emerald-800">Let’s connect</p>
              <h2 id="contact-dialog-title" className="mt-1 text-2xl font-semibold tracking-tight">
                {isMessageSent ? 'Thanks for reaching out!' : 'Send me a message'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close contact form"
              className="rounded-full p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-[#20231f] dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>

          {isMessageSent ? (
            <div className="mt-6" role="status">
              <p className="leading-7 text-stone-600 dark:text-stone-300">
                Your message has been marked as sent. This portfolio demo does not deliver email.
              </p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="mt-6 rounded-full bg-[#20231f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              className="mt-6 space-y-5"
              onChange={event => setIsFormValid(event.currentTarget.checkValidity())}
              onSubmit={handleContactSubmit}
            >
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  autoFocus
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 dark:border-stone-700 dark:bg-stone-800 dark:text-white dark:placeholder:text-stone-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 dark:border-stone-700 dark:bg-stone-800 dark:text-white dark:placeholder:text-stone-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 dark:border-stone-700 dark:bg-stone-800 dark:text-white dark:placeholder:text-stone-400"
                  placeholder="Tell me a little about what you have in mind..."
                />
              </div>
              <p className="text-xs leading-5 text-stone-500 dark:text-stone-400">
                Submitting this form simulates sending a message; it won’t send an actual email.
              </p>
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full rounded-full bg-[#20231f] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-500 disabled:hover:bg-stone-300 dark:disabled:bg-stone-700 dark:disabled:text-stone-400 dark:disabled:hover:bg-stone-700"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  )
}

const Module5Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
  <div
    className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-[#f8f7f4] text-[#20231f] transition-colors dark:bg-[#171a17] dark:text-stone-100`}
  >
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
      <a
        href="#home"
        className="text-lg font-semibold tracking-tight"
        aria-label="Jeremiah Austin, home"
      >
        Jeremiah<span className="text-emerald-700">.</span>
      </a>
      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-2 text-xs font-medium text-stone-600 dark:text-stone-300 sm:gap-6 sm:text-sm">
          <li>
            <a
              className="transition-colors hover:text-emerald-800 dark:hover:text-emerald-300"
              href="#work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-emerald-800 dark:hover:text-emerald-300"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <button
              type="button"
              className="rounded-full bg-[#20231f] px-3 py-2 text-white transition-colors hover:bg-emerald-800 sm:px-5"
              onClick={() => setIsContactOpen(true)}
            >
              Get in touch
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              aria-pressed={isDarkMode}
              onClick={() => setIsDarkMode(mode => !mode)}
              className="rounded-full border border-stone-300 px-2 py-2 text-xs font-semibold text-stone-700 transition-colors hover:border-emerald-700 hover:text-emerald-800 dark:border-stone-600 dark:text-stone-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300 sm:px-3"
            >
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section
        id="home"
        className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:px-12 lg:pt-32"
        aria-labelledby="hero-heading"
      >
        <div>
          <p className="mb-6 flex items-center gap-2 text-sm font-medium text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
            Independent designer & developer
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
          >
            Hi, I’m Jeremiah Austin.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-300">
            I’m an independent designer and front-end developer creating thoughtful digital work
            that makes the web feel more human.
          </p>
          <ContactMeDialog
            isOpen={isContactOpen}
            onOpen={() => setIsContactOpen(true)}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
        <div className="relative flex min-h-64 items-end overflow-hidden rounded-3xl bg-[#e7e8df] p-7 sm:min-h-80 sm:p-9">
          <div
            className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[1px] border-emerald-900/20 sm:h-80 sm:w-80"
            aria-hidden="true"
          />
          <div
            className="absolute right-9 top-10 h-36 w-36 rounded-full bg-emerald-800 sm:right-14 sm:top-12 sm:h-44 sm:w-44"
            aria-hidden="true"
          />
          <div
            className="absolute right-24 top-24 h-20 w-20 rounded-full bg-amber-200 sm:right-32 sm:top-28 sm:h-24 sm:w-24"
            aria-hidden="true"
          />
          <p className="relative max-w-[12rem] text-sm font-medium leading-6 text-stone-700 dark:text-stone-100">
            Finding the good ideas in the details.
          </p>
        </div>
      </section>

      <section id="work" className="bg-white dark:bg-stone-900" aria-labelledby="work-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-emerald-800 dark:text-white">
                A few recent favorites
              </p>
              <h2
                id="work-heading"
                className="text-3xl font-semibold tracking-tight sm:text-4xl dark:text-white"
              >
                Selected work
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-stone-600 dark:text-stone-300">
              A mix of independent projects and collaborations, made with care from first sketch to
              final detail.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-[#f8f7f4] transition-transform duration-300 hover:-translate-y-1 dark:border-stone-700 dark:bg-[#222622]"
              >
                <div
                  className={`relative m-3 flex min-h-56 items-center justify-center overflow-hidden rounded-xl ${project.accent}`}
                  aria-label={`${project.title} project preview`}
                  role="img"
                >
                  <div
                    className="absolute h-36 w-36 rotate-[-12deg] rounded-[2rem] bg-white/70 shadow-lg transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <p className="relative max-w-36 text-center text-2xl font-semibold leading-tight tracking-tight text-[#20231f]">
                    {project.preview}
                  </p>
                  <span className="absolute left-4 top-4 text-xs font-semibold tracking-widest text-[#20231f]/60">
                    {project.number}
                  </span>
                </div>
                <div className="p-5 pt-3">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-emerald-800">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-stone-600 dark:text-stone-300">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project disciplines">
                    {project.stack.map(item => (
                      <li
                        key={item}
                        className="rounded-full border border-stone-300 px-3 py-1 text-xs text-stone-600 dark:border-stone-600 dark:text-stone-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:gap-16 lg:px-12"
        aria-labelledby="about-heading"
      >
        <div
          role="img"
          aria-label="Photo placeholder for Jeremiah Austin. Replace this with a personal portrait."
          className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-end overflow-hidden rounded-3xl bg-[#e7e8df] p-6 sm:p-8 dark:bg-[#303a32]"
        >
          <div
            className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-emerald-900/20"
            aria-hidden="true"
          />
          <div
            className="absolute right-8 top-10 h-40 w-40 rounded-full bg-emerald-800/90"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-t-full bg-[#d2a58c]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-44 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-[#f1c7a9]"
            aria-hidden="true"
          />
          <p className="relative rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-stone-700 backdrop-blur dark:bg-stone-900/90 dark:text-stone-100">
            Your photo goes here
          </p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-emerald-800">
            A little about me
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Design-minded. Detail-driven.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700 dark:text-stone-300">
            I’m Jeremiah, an independent designer and front-end developer who loves turning
            thoughtful ideas into useful, welcoming digital experiences. I bring curiosity to the
            process, care to the details, and a collaborative spirit to every project.
          </p>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 dark:text-stone-200">
            Skills & tools
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills and tools">
            {[
              'UI/UX design',
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Figma',
              'Accessibility',
              'Responsive design',
            ].map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200"
              >
                {skill}
              </li>
            ))}
          </ul>
          <a
            href="mailto:overkill.alt.489@gmail.com"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 underline decoration-emerald-800/40 underline-offset-4 hover:decoration-emerald-800 dark:text-emerald-300 dark:decoration-emerald-300/40 dark:hover:decoration-emerald-300"
          >
            More about working together <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>

    <footer id="contact" className="bg-[#20231f] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-12">
        <div>
          <p className="text-sm font-medium text-emerald-300">Have a good one in mind?</p>
          <a
            href="mailto:overkill.alt.489@gmail.com"
            className="mt-2 inline-block text-2xl font-semibold tracking-tight hover:text-emerald-200 sm:text-3xl"
          >
            Let’s make it happen <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="flex flex-col gap-4 text-sm text-stone-300 sm:flex-row sm:items-center sm:gap-7">
          <a
            href="https://github.com"
            aria-label="Visit GitHub"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            aria-label="Visit LinkedIn"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <p className="text-stone-400">© 2025 Jeremiah Austin</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Module5Portfolio
