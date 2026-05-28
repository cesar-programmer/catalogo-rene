import {
  CalendarCheck,
  ChevronRight,
  Globe2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Waves,
} from 'lucide-react'
import brandBoard from './assets/dental-del-mar/brand-board.png'
import heroMockup from './assets/dental-del-mar/hero-mockup.png'
import logo from './assets/dental-del-mar/logo.png'

const services = [
  {
    icon: HeartPulse,
    title: 'Preventive care',
    text: 'Cleanings, patient education, regular checkups, and long-term oral wellness plans.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic dentistry',
    text: 'Whitening, smile aesthetics, and premium treatments designed around confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Family dental care',
    text: 'A warm, clear, and calm experience for individuals, couples, and families.',
  },
]

const values = ['Trust', 'Calmness', 'Cleanliness', 'Freshness', 'Quality', 'Human warmth']

const markets = [
  {
    name: 'United States',
    focus: 'Convenience, cosmetic dentistry, online booking, reviews, and flexible plans.',
    points: ['Adults 25-45', 'Young families', 'Wellness-oriented patients'],
  },
  {
    name: 'Japan',
    focus: 'Cleanliness, precision, respectful service, minimalist design, and trust.',
    points: ['Adults 25-50', 'Professionals', 'Detail-focused consumers'],
  },
]

const timeline = [
  ['Year 1', 'Local launch', 'First clinic, social presence, website, and patient reviews.'],
  ['Year 3', 'National expansion', 'New branches, staff training, and national campaigns.'],
  ['Year 5', 'Global pilot', 'International clinic or partnership with adapted campaigns.'],
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f5] text-[#2f3746]">
      <header className="sticky top-0 z-50 border-b border-[#e7e5e4]/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a className="flex items-center gap-3" href="#inicio" aria-label="Dental Del Mar home">
            <img className="h-11 w-11 rounded-full object-cover" src={logo} alt="" />
            <span className="text-xs font-semibold tracking-[0.18em] text-[#5e5b58] sm:text-sm sm:tracking-[0.28em]">
              DENTAL DEL MAR
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-[#5f6876] md:flex">
            <a className="transition hover:text-[#2f3746]" href="#marca">
              Brand
            </a>
            <a className="transition hover:text-[#2f3746]" href="#servicios">
              Services
            </a>
            <a className="transition hover:text-[#2f3746]" href="#global">
              Global
            </a>
            <a className="transition hover:text-[#2f3746]" href="#contacto">
              Contact
            </a>
          </div>

          <a
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md bg-[#93c5fd] px-3 py-2 text-sm font-semibold text-[#1e3147] transition hover:bg-[#7db8f8] sm:px-4"
            href="#contacto"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book visit</span>
            <CalendarCheck size={16} strokeWidth={2.2} />
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-69px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#e7e5e4] bg-[#f8f7f5] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
              <Waves size={16} className="text-[#75aeea]" />
              Premium dental wellness
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#2f3746] md:text-7xl">
              Where your smile meets calm.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5b57]">
              Dental Del Mar transforms dental care into a calm, elegant, and trustworthy
              patient experience inspired by the freshness of the sea.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#a8a29e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#918b87]"
                href="#servicios"
              >
                Explore services
                <ChevronRight size={17} />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#d6d3d1] bg-white px-5 py-3 text-sm font-semibold text-[#3c4451] transition hover:border-[#a8a29e]"
                href="#marca"
              >
                View brand system
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[#e7e5e4] py-5">
              <div>
                <p className="text-2xl font-semibold text-[#2f3746]">70%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#79736e]">White</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#2f3746]">20%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#79736e]">Neutrals</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#2f3746]">10%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#79736e]">Soft blue</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-72 w-72 rounded-full bg-[#93c5fd]/20 blur-3xl md:block" />
            <img
              className="relative z-10 w-full rounded-lg border border-[#e7e5e4] bg-white object-cover shadow-[0_24px_80px_rgba(47,55,70,0.12)]"
              src={heroMockup}
              alt="Dental Del Mar campaign mockup"
            />
          </div>
        </div>
      </section>

      <section id="marca" className="border-y border-[#e7e5e4] bg-[#f8f7f5] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#75aeea]">
                Brand creation
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#2f3746] md:text-5xl">
                A clinic identity built around trust, calmness, and modern elegance.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#5f5b57]">
                The imagotype combines a tooth, waves, and a minimalist sailboat. The
                result moves away from a cold clinical image and creates a premium,
                family-friendly dental wellness concept.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    className="rounded-md border border-[#d6d3d1] bg-white px-3 py-2 text-sm font-medium text-[#5f5b57]"
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <img
              className="rounded-lg border border-[#e7e5e4] bg-white shadow-sm"
              src={brandBoard}
              alt="Dental Del Mar brand board with logo applications, palette, typography, and mockups"
            />
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#75aeea]">
              Service catalog
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#2f3746] md:text-5xl">
              Dental care presented as a complete wellness experience.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  className="rounded-lg border border-[#e7e5e4] bg-[#fbfbfa] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(47,55,70,0.1)]"
                  key={service.title}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#93c5fd]/25 text-[#477fb8]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#2f3746]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5b57]">{service.text}</p>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      <section id="global" className="bg-[#eef5fb] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#477fb8]">
                Global positioning
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#2f3746] md:text-5xl">
                A premium dental wellness brand designed for international growth.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#4c5766] shadow-sm">
              <Globe2 size={19} className="text-[#477fb8]" />
              United States + Japan
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {markets.map((market) => (
              <article className="rounded-lg bg-white p-6 shadow-sm" key={market.name}>
                <h3 className="text-2xl font-semibold text-[#2f3746]">{market.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5b57]">{market.focus}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {market.points.map((point) => (
                    <span
                      className="rounded-md bg-[#f8f7f5] px-3 py-2 text-sm text-[#5f5b57]"
                      key={point}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-semibold text-[#2f3746]">Growth timeline</h3>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {timeline.map(([year, stage, text]) => (
                <div className="border-l-2 border-[#93c5fd] pl-4" key={year}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#477fb8]">
                    {year}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-[#2f3746]">{stage}</h4>
                  <p className="mt-2 text-sm leading-7 text-[#5f5b57]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#75aeea]">
              Campaign
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#2f3746] md:text-5xl">
              Smile in Calm.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-[#e7e5e4] bg-[#f8f7f5] p-6">
              <h3 className="text-xl font-semibold text-[#2f3746]">Global slogan</h3>
              <p className="mt-4 text-3xl font-semibold leading-tight text-[#75aeea]">
                Where Your Smile Meets Calm.
              </p>
            </article>
            <article className="rounded-lg border border-[#e7e5e4] bg-[#f8f7f5] p-6">
              <h3 className="text-xl font-semibold text-[#2f3746]">Creative concept</h3>
              <p className="mt-4 text-sm leading-7 text-[#5f5b57]">
                Reframe the dental visit from stressful and clinical into a calm, clear,
                human, and positive experience.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-[#2f3746] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#93c5fd]">
              Dental Del Mar
            </p>
            <h2 className="mt-3 text-3xl font-semibold">A calmer way to care for your smile.</h2>
          </div>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#2f3746] transition hover:bg-[#eef5fb] md:w-auto"
            href="mailto:hello@dentaldelmar.com"
          >
            Start a project inquiry
            <ChevronRight size={17} />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
