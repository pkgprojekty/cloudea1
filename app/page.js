"use client";

import { useMemo, useState } from "react";
import { Globe, ArrowRight, Landmark, Database, Layers3, ShieldCheck } from "lucide-react";

export default function CompanyWebsite() {
  const [lang, setLang] = useState("pl");

  const content = useMemo(
    () => ({
      pl: {
        brand: "CloudEA - AI-enabled Enterprise Strategy & Architecture",
        tagline: "Executive advisory • Enterprise Architecture • Trusted Data Foundations",
        nav: {
          sectors: "Sektory",
          services: "Oferta",
          impact: "Wpływ",
          contact: "Kontakt",
        },
        heroEyebrow: "STRATEGIC TECHNOLOGY ADVISORY",
        heroTitle: "Architektura, która przekłada strategię na decyzje, priorytety i zdolność wykonawczą biznesu.",
        heroText:
          "Wspieramy organizacje w porządkowaniu technologii, definiowaniu źródeł prawdy i budowie modelu architektury, który wzmacnia sterowność biznesu oraz jakość decyzji inwestycyjnych.",
        ctaPrimary: "Porozmawiajmy",
        ctaSecondary: "Nasza oferta",
        logosTitle: "OBSZARY, W KTÓRYCH PRACUJEMY",
        sectorsTitle: "Gdzie wspieramy naszych klientów",
        sectorsText:
          "Silna architektura powstaje wtedy, gdy decyzje technologiczne są osadzone w realiach branży, modelu operacyjnym i priorytetach wzrostu.",
        sectors: [
          { title: "Financial Services", desc: "Architektura dla kontroli, zgodności, modernizacji core bankingu i lepszych decyzji opartych na danych." },
          { title: "Banking Services", desc: "Analiza oraz transformacja Mainframe w oparciu o najlepsze praktyki wspomagane AI." },
          { title: "FMCG & Manufacturing", desc: "Uproszczenie krajobrazu ERP, danych i integracji dla skalowania operacji oraz standaryzacji." },
          { title: "Telecommunications", desc: "Redukcja złożoności środowiska, API-led architecture i lepsza sterowalność transformacji." },
          { title: "Pharma & Healthcare", desc: "Architektura wspierająca compliance, trusted data i zintegrowane środowisko cyfrowe." },
        ],
        servicesTitle: "Jak pomagamy",
        servicesLead:
          "Zaczynamy od zbudowania Business Capability Map dla Twojego biznesu, aby połączyć perspektywę zarządu, biznesu i IT tak, by technologia wspierała wartość biznesową, a nie jedynie zwiększała złożoność.",
        services: [
          {
            icon: Landmark,
            phase: "Strategic alignment",
            title: "Architecture for strategy execution",
            desc: "Przekładamy kierunek biznesowy na model docelowy, zasady decyzyjne oraz priorytety inwestycyjne.",
          },
          {
            icon: Layers3,
            phase: "Transformation clarity",
            title: "Technology landscape simplification",
            desc: "Porządkujemy systemy, integracje i zależności, oddzielając złożoność potrzebną od zbędnej.",
          },
          {
            icon: Database,
            phase: "Decision foundations",
            title: "Trusted data & sources of truth",
            desc: "Definiujemy, które dane mają charakter decyzyjny, gdzie powinny być utrzymywane i jak zarządzać ich spójnością.",
          },
          {
            icon: ShieldCheck,
            phase: "Operating model",
            title: "Governance & architecture model",
            desc: "Projektujemy role, zasady i mechanizmy nadzoru, które wspierają trwałą jakość architektury.",
          },
          {
            icon: ShieldCheck,
            phase: "Governance",
            title: "Business Capability Map",
            desc: "Określamy generyczny model możliwości dla Twojego biznesu oraz mapujemy, jakie aplikacje i procesy je wspierają. W ten sposób możesz dokonać wielu cennych analiz.",
          },
          {
            icon: ShieldCheck,
            phase: "Analiza",
            title: "Architecture Maturity Assessment",
            desc: "Określamy baseline oraz target state. Definiujemy przyszłe inicjatywy rozwojowe i kierunki dojścia.",
          },
          {
            icon: ShieldCheck,
            phase: "Ideation",
            title: "Crafted projects",
            desc: "Sprawdzamy dojrzałość oraz fundamenty IT w danej firmie, a następnie rozmawiamy o przestrzeni do współpracy. Pomagamy w budowie każdego aspektu IT i biznesu poprzez sieć sprawdzonych i certyfikowanych podmiotów.",
          },
        ],
        metrics: [
          {
            value: "Board",
            label:
              "Business Capability Map jako wspólny język z zarządem i CIO. Każda organizacja powinna posiadać obraz "Company-on-a-page" aby móc ocenić aktualny oraz oczekiwany poziom możliwości biznesowych",
          },
          {
            value: "Data",
            label:
              "Traktujemy dane jako produkt strategiczny — integrujemy je w spójny ekosystem, który umożliwia podejmowanie decyzji w czasie rzeczywistym, budując przewagę konkurencyjną opartą na faktach, a nie intuicji.",
          },
          {
            value: "Target",
            label: "Budujemy docelowy model architektury i roadmapę jej rozwoju.",
          },
        ],
        impactTitle: "Jak tworzymy wpływ",
        impactStories: [
          {
            sector: "Financial institution",
            title: "Od rozproszonego krajobrazu do architektury wspierającej decyzje inwestycyjne",
            tags: ["Enterprise Architecture", "Trusted Data", "Governance"],
          },
          {
            sector: "FMCG",
            title: "Standaryzacja architektury ERP i integracji dla organizacji wielorynkowej",
            tags: ["ERP", "Integration", "Operating Model"],
          },
          {
            sector: "Telecommunications",
            title: "Uproszczenie krajobrazu technologicznego i wzmocnienie kontroli nad transformacją",
            tags: ["Simplification", "API-led", "Transformation"],
          },
        ],
        quoteTitle: "Co jest dla nas ważne",
        quote:
          "Architektura powinna wzmacniać sterowność biznesu, poprawiać jakość decyzji i tworzyć fundamenty, którym organizacja może zaufać w czasie wzrostu i zmiany.",
        contactTitle: "Jeśli chcesz, aby architektura pełniła w Twojej organizacji bardziej strategiczną rolę — porozmawiajmy.",
        contactText:
          "Wspieramy firmy, które chcą lepiej połączyć strategię, technologię i dane oraz budować środowisko gotowe na wzrost, transformację i bardziej świadome decyzje.",
        contactButton: "Skontaktuj się",
        companyLabel: "Firma",
        emailLabel: "E-mail",
        phoneLabel: "Telefon",
        linkedinLabel: "LinkedIn",
        footer: "Wszelkie prawa zastrzeżone.",
        policy: "Polityka prywatności • Cookies • RODO",
        learnMore: "Dowiedz się więcej",
      },
      en: {
        brand: "CloudEA - AI-enabled Enterprise Strategy & Architecture",
        tagline: "Executive advisory • Enterprise Architecture • Trusted Data Foundations",
        nav: {
          sectors: "Sectors",
          services: "Services",
          impact: "Impact",
          contact: "Contact",
        },
        heroEyebrow: "STRATEGIC TECHNOLOGY ADVISORY",
        heroTitle: "Architecture that turns strategy into decisions, priorities, and execution capability.",
        heroText:
          "We help organizations simplify technology, define trusted sources of truth, and shape architecture foundations that strengthen business steerability and the quality of investment decisions.",
        ctaPrimary: "Start a conversation",
        ctaSecondary: "Explore services",
        logosTitle: "WHERE WE WORK",
        sectorsTitle: "Where we support our clients",
        sectorsText:
          "Strong architecture emerges when technology decisions are grounded in industry realities, operating model choices, and growth priorities.",
        sectors: [
          { title: "Financial Services", desc: "Architecture for control, compliance, core modernization, and better data-driven decisions." },
          { title: "Banking Services", desc: "Mainframe analysis and transformation based on best practices supported by AI." },
          { title: "FMCG & Manufacturing", desc: "Simplifying ERP, data, and integration landscapes to enable scale and standardization." },
          { title: "Telecommunications", desc: "Reducing landscape complexity, enabling API-led architecture, and improving transformation control." },
          { title: "Pharma & Healthcare", desc: "Architecture supporting compliance, trusted data, and an integrated digital environment." },
        ],
        servicesTitle: "How we help",
        servicesLead:
          "We start by building a Business Capability Map for your business to connect board, business, and IT perspectives so that technology supports business value instead of adding unnecessary complexity.",
        services: [
          {
            icon: Landmark,
            phase: "Strategic alignment",
            title: "Architecture for strategy execution",
            desc: "We translate business direction into target-state models, decision principles, and investment priorities.",
          },
          {
            icon: Layers3,
            phase: "Transformation clarity",
            title: "Technology landscape simplification",
            desc: "We bring structure to systems, integrations, and dependencies by separating necessary complexity from avoidable complexity.",
          },
          {
            icon: Database,
            phase: "Decision foundations",
            title: "Trusted data & sources of truth",
            desc: "We define which data truly matters for decision-making, where it should live, and how consistency should be governed.",
          },
          {
            icon: ShieldCheck,
            phase: "Operating model",
            title: "Governance & architecture model",
            desc: "We design roles, principles, and governance mechanisms that support lasting architecture quality.",
          },
          {
            icon: ShieldCheck,
            phase: "Governance",
            title: "Business Capability Map",
            desc: "We define a generic capability model for your business and map which applications and processes support each capability, enabling valuable strategic analysis.",
          },
          {
            icon: ShieldCheck,
            phase: "Assessment",
            title: "Architecture Maturity Assessment",
            desc: "We establish the baseline and target state, then define future improvement initiatives and architectural evolution paths.",
          },
          {
            icon: ShieldCheck,
            phase: "Ideation",
            title: "Crafted projects",
            desc: "We assess IT maturity and foundations in your company, then identify the right collaboration space. We support delivery through a network of trusted and certified partners.",
          },
        ],
        metrics: [
          {
            value: "Board",
            label:
              "Business Capability Map as the language of conversation with boards and CIOs. Shared understanding across these perspectives enables strategy translation into measurable investment decisions with greater transparency over business impact, risk, and organizational complexity.",
          },
          {
            value: "Data",
            label:
              "We treat data as a strategic product — integrating it into a coherent ecosystem that enables real-time decision-making and builds competitive advantage based on facts rather than intuition.",
          },
          {
            value: "Target",
            label: "We build the target-state architecture model and its development roadmap.",
          },
        ],
        impactTitle: "How we create impact",
        impactStories: [
          {
            sector: "Financial institution",
            title: "From fragmented landscape to architecture supporting investment decisions",
            tags: ["Enterprise Architecture", "Trusted Data", "Governance"],
          },
          {
            sector: "FMCG",
            title: "Standardizing ERP and integration architecture for a multi-market organization",
            tags: ["ERP", "Integration", "Operating Model"],
          },
          {
            sector: "Telecommunications",
            title: "Simplifying the technology landscape and strengthening transformation control",
            tags: ["Simplification", "API-led", "Transformation"],
          },
        ],
        quoteTitle: "What matters to us",
        quote:
          "Architecture should strengthen business steerability, improve decision quality, and create foundations the organization can trust through growth and change.",
        contactTitle: "If you want architecture to play a more strategic role in your organization — let’s talk.",
        contactText:
          "We support companies that want to connect strategy, technology, and data more effectively and build an environment ready for growth, transformation, and more confident decisions.",
        contactButton: "Get in touch",
        companyLabel: "Company",
        emailLabel: "Email",
        phoneLabel: "Phone",
        linkedinLabel: "LinkedIn",
        footer: "All rights reserved.",
        policy: "Privacy Policy • Cookies • GDPR",
        learnMore: "Learn more",
      },
    }),
    []
  );

  const t = content[lang];
  const pseudoLogos = ["FINANCIAL", "FMCG", "TELCO", "PHARMA", "DATA", "TRANSFORMATION"];

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#171717]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f6f1e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-lg font-semibold tracking-[0.18em]">{t.brand}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-black/45">{t.tagline}</div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex gap-8 text-sm text-black/65">
              <a href="#sectors" className="transition hover:text-black">{t.nav.sectors}</a>
              <a href="#services" className="transition hover:text-black">{t.nav.services}</a>
              <a href="#impact" className="transition hover:text-black">{t.nav.impact}</a>
              <a href="#contact" className="transition hover:text-black">{t.nav.contact}</a>
            </nav>
            <button
              onClick={() => setLang(lang === "pl" ? "en" : "pl")}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-black/75 transition hover:bg-black hover:text-white"
            >
              <Globe className="h-4 w-4" />
              {lang === "pl" ? "EN" : "PL"}
            </button>
          </div>
        </div>
      </header>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.35em] text-[#8d6d2f]">{t.heroEyebrow}</div>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              {t.heroText}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {t.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-black/75 transition hover:bg-black hover:text-white"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            {t.metrics.map((metric, idx) => (
              <div
                key={metric.value}
                className={`rounded-[28px] border border-black/10 p-8 shadow-sm ${
                  idx === 1 ? "bg-[#171717] text-white" : "bg-white"
                }`}
              >
                <div
                  className={`text-sm uppercase tracking-[0.28em] ${
                    idx === 1 ? "text-[#d4af37]" : "text-[#8d6d2f]"
                  }`}
                >
                  {metric.value}
                </div>
                <p className={`mt-3 text-xl font-medium leading-8 ${idx === 1 ? "text-white/85" : ""}`}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs font-medium uppercase tracking-[0.35em] text-black/35">{t.logosTitle}</div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
            {pseudoLogos.map((item) => (
              <div key={item} className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-black/35">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sectors" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-[0.35em] text-[#8d6d2f]">{t.nav.sectors}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t.sectorsTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-black/65">{t.sectorsText}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.sectors.map((sector) => (
              <div
                key={sector.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{sector.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">{sector.desc}</p>
                <div className="mt-8 text-sm font-medium text-[#8d6d2f]">{t.learnMore}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#171717] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]">{t.nav.services}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t.servicesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-white/68">{t.servicesLead}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                  <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">{service.phase}</div>
                  <div className="mt-5 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-[#f2df9b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="impact" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-[0.35em] text-[#8d6d2f]">{t.nav.impact}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t.impactTitle}</h2>
            </div>
            <div className="max-w-xl text-base leading-7 text-black/60">{t.quote}</div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.impactStories.map((story) => (
              <div key={story.title} className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
                <div className="text-sm uppercase tracking-[0.25em] text-[#8d6d2f]">{story.sector}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{story.title}</h3>
                <div className="mt-8 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-xs font-medium uppercase tracking-[0.35em] text-[#8d6d2f]">{t.quoteTitle}</div>
          <p className="mt-8 text-3xl font-medium leading-[1.35] tracking-tight md:text-5xl">“{t.quote}”</p>
        </div>
      </section>

      <section id="contact" className="bg-[#171717] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]">{t.nav.contact}</div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{t.contactTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{t.contactText}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
            <div className="space-y-5 text-sm text-white/72">
              <div>
                <div className="text-white/45">{t.companyLabel}</div>
                <div className="mt-1 text-lg text-white">CloudEA - AI-enabled Strategy &amp; Architecture</div>
              </div>
              <div>
                <div className="text-white/45">{t.emailLabel}</div>
                <div className="mt-1 text-lg text-white">global@cloud-ea.com</div>
              </div>
              <div>
                <div className="text-white/45">{t.phoneLabel}</div>
                <div className="mt-1 text-lg text-white">+48 512088561</div>
              </div>
              <div>
                <div className="text-white/45">{t.linkedinLabel}</div>
                <div className="mt-1 text-lg text-white">linkedin.com/company/cloudea1</div>
              </div>
            </div>
            <button className="mt-8 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-[#171717] transition hover:-translate-y-0.5">
              {t.contactButton}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-6 py-6 text-sm text-white/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>© 2026 CloudEA - AI-enabled Enterprise Strategy &amp; Architecture. {t.footer}</div>
          <div>{t.policy}</div>
        </div>
      </footer>
    </div>
  );
}
