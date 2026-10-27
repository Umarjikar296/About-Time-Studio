'use client';

import { useState } from 'react';

const copy = {
  en: {
    nav: ['Work', 'Services', 'About', 'Contact'],
    eyebrow: 'INDEPENDENT WEB STUDIO · BERLIN & BEYOND',
    headlineA: 'A little less', headlineB: 'ordinary.', headlineC: 'A lot more', headlineD: 'you.',
    intro: 'We make thoughtful, personality-filled websites for small businesses ready to show up properly online.',
    cta: 'Let’s make something', secondary: 'See what we do ↓', sticker: 'GOOD IDEAS\nLOOK GOOD ONLINE',
    ticker: 'GOOD DESIGN. FAIR PRICES. NO AGENCY NONSENSE.',
    workLabel: '01 / SELECTED CONCEPTS', workTitle: 'A few ideas in the wild.', workIntro: 'A peek at the kind of digital worlds we can create. These are concept projects, made to explore what’s possible.',
    concept: 'CONCEPT PROJECT', view: 'A direction, not a client project ↗',
    servicesLabel: '02 / THE OFFER', servicesTitle: 'Small business. Big main-character energy.', servicesIntro: 'No bloated process or mystery pricing. Just a thoughtful website that does its job and looks good doing it.',
    starter: 'THE ONE-PAGER', starterDesc: 'A confident online home for a business that needs the essentials, done well.', starterPrice: '€299', starterItems: ['One custom-designed page', 'Responsive mobile-first layout', 'Contact form or enquiry link', 'Basic on-page SEO setup', 'Two rounds of refinements'], starterCta: 'Start with the essentials', popular: 'THE SMALL-BIZ SITE', popularDesc: 'A little more room to tell your story, explain your offer and earn trust.', popularPrice: '€599', popularItems: ['Up to 5 core pages', 'Responsive custom design', 'Contact / enquiry form', 'Basic on-page SEO setup', 'Two rounds of refinements'], popularCta: 'Let’s talk about your site', pricingNote: 'Starting prices for clearly scoped projects. Hosting, domain, paid tools, copywriting and additional features may cost extra. Final quote confirmed before work begins.',
    processLabel: '03 / HOW IT HAPPENS', processTitle: 'Clear steps. Good communication. No drama.', steps: [['01 / TALK','We get to know your business, goals and must-haves.'],['02 / SHAPE','We map out the structure and visual direction together.'],['03 / BUILD','Your site comes to life, with feedback along the way.'],['04 / LAUNCH','We check the details and get your new site ready for the world.']],
    aboutLabel: '04 / A NOTE FROM THE STUDIO', aboutTitle: 'Good websites shouldn’t be out of reach.', aboutBody: 'ABOUT TIME STUDIOS exists for small businesses that deserve a thoughtful online presence without a big-agency budget. We bring a practical, design-minded approach to building websites that feel clear, considered and genuinely yours.', aboutNote: 'Independent by choice. Collaborative by nature.',
    contactLabel: '05 / YOUR TURN', contactTitle: 'Got a good thing going? Let’s get it online.', contactIntro: 'Tell us a little about your project. No pressure, no awkward sales call—just a starting point.', name: 'Your name', email: 'Email address', business: 'Business name', project: 'What do you need?', budget: 'Approximate budget', details: 'A little about your project', send: 'Send project enquiry', choose: 'Choose an option', onepage: 'One-page website', multipage: 'Multi-page website', refresh: 'Redesign / refresh', notSure: 'Not sure yet', budgetOptions: ['Under €500', '€500–€1,000', '€1,000–€2,000', '€2,000+', 'Need advice'], formNote: 'This demo form opens your email app. Connect a form service or backend before launch for reliable submissions.',
    footerLine: 'Good things take time. Better websites take a little less.', footer: 'Independent web design studio · Berlin, Germany', legal: 'Legal notice', privacy: 'Privacy', required: 'Please complete your name, a valid email address and project type.',
  },
  de: {
    nav: ['Arbeiten', 'Leistungen', 'Über uns', 'Kontakt'],
    eyebrow: 'UNABHÄNGIGES WEBSTUDIO · BERLIN & ÜBERALL',
    headlineA: 'Weniger', headlineB: 'gewöhnlich.', headlineC: 'Viel mehr', headlineD: 'du.',
    intro: 'Wir gestalten durchdachte Websites mit Persönlichkeit für kleine Unternehmen, die online richtig sichtbar werden wollen.',
    cta: 'Lass uns etwas starten', secondary: 'Leistungen entdecken ↓', sticker: 'GUTE IDEEN\nGEHÖREN INS NETZ',
    ticker: 'GUTES DESIGN. FAIRE PREISE. KEIN AGENTUR-BLABLA.',
    workLabel: '01 / AUSGEWÄHLTE KONZEPTE', workTitle: 'Ein paar Ideen in freier Wildbahn.', workIntro: 'Ein Einblick in digitale Welten, die wir gestalten können. Das sind Konzeptprojekte, die zeigen, was möglich ist.',
    concept: 'DESIGNKONZEPT', view: 'Eine Idee, kein Kundenprojekt ↗',
    servicesLabel: '02 / UNSER ANGEBOT', servicesTitle: 'Kleines Business. Großer Auftritt.', servicesIntro: 'Keine aufgeblähten Prozesse und keine Preisrätsel. Sondern eine durchdachte Website, die funktioniert und gut aussieht.',
    starter: 'DIE ONE-PAGE-WEBSITE', starterDesc: 'Ein überzeugender Online-Auftritt mit allem, was dein Unternehmen wirklich braucht.', starterPrice: '299 €', starterItems: ['Eine individuell gestaltete Seite', 'Responsives, mobiloptimiertes Layout', 'Kontaktformular oder Anfrage-Link', 'Grundlegende Onpage-SEO-Einrichtung', 'Zwei Korrekturrunden'], starterCta: 'Mit dem Wesentlichen starten', popular: 'DIE BUSINESS-WEBSITE', popularDesc: 'Mehr Raum für deine Geschichte, dein Angebot und das Vertrauen deiner Kundschaft.', popularPrice: '599 €', popularItems: ['Bis zu 5 Kernseiten', 'Individuelles responsives Design', 'Kontakt- / Anfrageformular', 'Grundlegende Onpage-SEO-Einrichtung', 'Zwei Korrekturrunden'], popularCta: 'Lass uns über deine Website reden', pricingNote: 'Einstiegspreise für klar definierte Projekte. Hosting, Domain, kostenpflichtige Tools, Texte und Zusatzfunktionen können extra kosten. Das finale Angebot bestätigen wir vor Projektbeginn.',
    processLabel: '03 / SO LÄUFT’S', processTitle: 'Klare Schritte. Gute Kommunikation. Kein Drama.', steps: [['01 / KENNENLERNEN','Wir sprechen über dein Unternehmen, deine Ziele und Wünsche.'],['02 / KONZEPT','Gemeinsam legen wir Struktur und visuelle Richtung fest.'],['03 / UMSETZUNG','Deine Website entsteht – mit Feedback zwischendurch.'],['04 / LAUNCH','Wir prüfen die Details und machen deinen Auftritt startklar.']],
    aboutLabel: '04 / EIN WORT AUS DEM STUDIO', aboutTitle: 'Gute Websites sollten erreichbar sein.', aboutBody: 'ABOUT TIME STUDIOS ist für kleine Unternehmen da, die einen durchdachten Online-Auftritt verdienen – auch ohne großes Agenturbudget. Wir verbinden einen praktischen Ansatz mit gutem Design und gestalten Websites, die klar, durchdacht und wirklich deine sind.', aboutNote: 'Unabhängig aus Überzeugung. Gemeinsam im Prozess.',
    contactLabel: '05 / DU BIST DRAN', contactTitle: 'Du hast etwas Gutes vor? Bringen wir es online.', contactIntro: 'Erzähl uns ein bisschen von deinem Projekt. Ganz ohne Druck und Verkaufsgespräch – einfach als erster Schritt.', name: 'Dein Name', email: 'E-Mail-Adresse', business: 'Name des Unternehmens', project: 'Was brauchst du?', budget: 'Ungefähres Budget', details: 'Erzähl uns kurz von deinem Projekt', send: 'Projektanfrage senden', choose: 'Bitte auswählen', onepage: 'One-Page-Website', multipage: 'Mehrseitige Website', refresh: 'Website überarbeiten', notSure: 'Noch unsicher', budgetOptions: ['Unter 500 €', '500–1.000 €', '1.000–2.000 €', '2.000 €+', 'Ich brauche Beratung'], formNote: 'Dieses Demo-Formular öffnet dein E-Mail-Programm. Vor dem Launch sollte ein Formulardienst oder Backend angebunden werden.',
    footerLine: 'Gute Dinge brauchen Zeit. Gute Websites ein bisschen weniger.', footer: 'Unabhängiges Webdesign-Studio · Berlin, Deutschland', legal: 'Impressum', privacy: 'Datenschutz', required: 'Bitte gib deinen Namen, eine gültige E-Mail-Adresse und den Projekttyp an.',
  },
};

const projects = [
  { number: '01', type: 'CAFÉ / HOSPITALITY', title: 'Daily Ritual', description: 'A warm, characterful home for your neighbourhood coffee spot.', className: 'project-cafe', mark: 'daily ritual.', detail: 'GOOD COFFEE.\nNO BIG SPEECH.' },
  { number: '02', type: 'BEAUTY / WELLNESS', title: 'Soft Form', description: 'A calm digital space for a studio that helps people feel good.', className: 'project-beauty', mark: 'soft form', detail: 'MAKE ROOM\nFOR YOURSELF.' },
  { number: '03', type: 'LOCAL SERVICES', title: 'Good Hands', description: 'A clear, confident first impression for a business built on trust.', className: 'project-service', mark: 'GOOD HANDS®', detail: 'LOCAL PEOPLE.\nSOLID WORK.' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [lang, setLang] = useState('en');
  const [submitted, setSubmitted] = useState(false);
  const t = copy[lang];

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const project = String(form.get('project') || '').trim();
    if (!name || !email.includes('@') || !project) { setSubmitted('error'); return; }
    const subject = encodeURIComponent(`Website enquiry — ${String(form.get('business') || name)}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nBusiness: ${form.get('business') || '-'}\nProject: ${project}\nBudget: ${form.get('budget') || '-'}\n\nDetails:\n${form.get('details') || '-'}`);
    window.location.href = `mailto:hello@abouttime.studio?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="ABOUT TIME STUDIOS home">
          <img src="/logo.png" alt="About Time Studios logo" className="brand-logo-img" width="44" height="44" />
          <span className="brand-text">
            <span className="brand-title">ABOUT TIME</span>
            <span className="brand-subtitle" aria-hidden="true">
              <span>S</span><span>T</span><span>U</span><span>D</span><span>I</span><span>O</span><span>S</span>
            </span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">{t.nav[0]}</a><a href="#services">{t.nav[1]}</a><a href="#about">{t.nav[2]}</a><a href="#contact">{t.nav[3]}</a>
        </nav>
        <div className="header-actions"><div className="lang-switch" aria-label="Language selector"><button className={lang === 'en' ? 'active' : ''} onClick={() => {setLang('en'); document.documentElement.lang='en';}}>EN</button><span>/</span><button className={lang === 'de' ? 'active' : ''} onClick={() => {setLang('de'); document.documentElement.lang='de';}}>DE</button></div><a className="header-cta" href="#contact">{lang === 'en' ? 'Start a project' : 'Projekt starten'} <Arrow /></a></div>
      </header>

      <section className="hero" id="home">
        <div className="hero-topline"><span className="eyebrow"><span className="status-dot" />{t.eyebrow}</span><span className="hero-index">[ 001 — 026 ]</span></div>
        <div className="hero-grid">
          <div className="hero-copy"><h1>{t.headlineA}<br/><span className="outline-word">{t.headlineB}</span><br/>{t.headlineC}<br/><span className="blue-word">{t.headlineD}<span className="period">✳</span></span></h1><p className="hero-intro">{t.intro}</p><div className="hero-buttons"><a className="button button-dark" href="#contact">{t.cta} <Arrow /></a><a className="text-link" href="#work">{t.secondary}</a></div></div>
          <div className="hero-art" aria-label="Playful abstract studio artwork"><div className="art-grid"/><div className="art-sun"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-block block-one">WEB<br/>THINGS</div><div className="art-block block-two">GOOD<br/>STUFF.</div><div className="art-star">✳</div><div className="art-sticker">{t.sticker.split('\n').map((line, i) => <span key={i}>{line}</span>)}</div><span className="art-caption">FIG. 01 — A GOOD PLACE TO START</span></div>
        </div>
        <div className="hero-bottom"><span>SCROLL A LITTLE</span><span className="scroll-line"/><span>MADE WITH INTENTION <b>✳</b></span></div>
      </section>

      <div className="ticker" aria-label={t.ticker}><div className="ticker-track">{Array.from({length: 4}, (_, i) => <span key={i}>{t.ticker} <b>✳</b> </span>)}</div></div>

      <section className="section work-section" id="work"><div className="section-heading"><div><span className="eyebrow blue-eyebrow">{t.workLabel}</span><h2>{t.workTitle}</h2></div><p>{t.workIntro}</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-visual ${project.className}`}><div className="project-top"><span>{project.number} / 03</span><span>{t.concept}</span></div><div className="project-display"><span className="project-mark">{project.mark}</span><span className="project-detail">{project.detail.split('\n').map((line, i) => <span key={i}>{line}</span>)}</span><span className="project-scribble">✳</span></div><div className="project-bottom"><span>WEB DESIGN / DIRECTION</span><span>↗</span></div></div><div className="project-meta"><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div><span className="concept-tag">CONCEPT</span></div></article>)}</div><p className="concept-disclaimer">{t.view}</p></section>

      <section className="section services-section" id="services"><div className="section-heading"><div><span className="eyebrow">{t.servicesLabel}</span><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div><div className="pricing-grid"><article className="price-card"><div className="price-card-top"><span className="price-label">01 / START HERE</span><span className="price-spark">✳</span></div><h3>{t.starter}</h3><p className="price-description">{t.starterDesc}</p><div className="price-amount">{t.starterPrice}<span> / {lang === 'en' ? 'starting at' : 'ab'}</span></div><div className="price-rule"/><ul>{t.starterItems.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul><a className="button button-outline" href="#contact">{t.starterCta} <Arrow /></a></article><article className="price-card price-card-featured"><div className="price-card-top"><span className="price-label">02 / ROOM TO GROW</span><span className="featured-pill">{lang === 'en' ? 'MORE FLEX' : 'MEHR FLEX'}</span></div><h3>{t.popular}</h3><p className="price-description">{t.popularDesc}</p><div className="price-amount">{t.popularPrice}<span> / {lang === 'en' ? 'starting at' : 'ab'}</span></div><div className="price-rule"/><ul>{t.popularItems.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul><a className="button button-blue" href="#contact">{t.popularCta} <Arrow /></a></article></div><p className="pricing-note">* {t.pricingNote}</p></section>

      <section className="process-section"><div className="section process-inner"><div className="process-heading"><span className="eyebrow">{t.processLabel}</span><h2>{t.processTitle}</h2><div className="process-doodle">↘</div></div><div className="steps-grid">{t.steps.map((step) => <article className="step-card" key={step[0]}><span className="step-number">{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div></div></section>

      <section className="section about-section" id="about"><div className="about-art"><div className="about-circle">AT<span>/</span></div><span className="about-note note-top">INDEPENDENT<br/>BY DESIGN</span><span className="about-note note-bottom">SMALL STUDIO.<br/>BIG CARE.</span><span className="about-cross">✳</span></div><div className="about-copy"><span className="eyebrow blue-eyebrow">{t.aboutLabel}</span><h2>{t.aboutTitle}</h2><p>{t.aboutBody}</p><div className="about-signoff"><span className="signoff-line"/><span>{t.aboutNote}</span></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-inner"><div className="contact-copy"><span className="eyebrow">{t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactIntro}</p><div className="contact-aside"><span className="contact-aside-star">✳</span><span>{lang === 'en' ? 'Have a question first?' : 'Erst mal eine Frage?'}</span><a href="mailto:hello@abouttime.studio">hello@abouttime.studio <Arrow /></a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>{t.name} *<input name="name" autoComplete="name" required placeholder={lang === 'en' ? 'Jane Smith' : 'Max Mustermann'}/></label><label>{t.email} *<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label></div><label>{t.business}<input name="business" autoComplete="organization" placeholder={lang === 'en' ? 'Your business (if applicable)' : 'Dein Unternehmen (optional)'}/></label><div className="form-row"><label>{t.project} *<select name="project" required defaultValue=""><option value="" disabled>{t.choose}</option><option>{t.onepage}</option><option>{t.multipage}</option><option>{t.refresh}</option><option>{t.notSure}</option></select></label><label>{t.budget}<select name="budget" defaultValue=""><option value="">{t.choose}</option>{t.budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></label></div><label>{t.details}<textarea name="details" rows="4" placeholder={lang === 'en' ? 'The idea, the timeline, the big dream…' : 'Die Idee, der Zeitplan, der große Traum …'}/></label>{submitted === 'error' && <p className="form-feedback error">{t.required}</p>}{submitted === true && <p className="form-feedback">{lang === 'en' ? 'Your email app should open with the enquiry prepared. Please send it to complete your enquiry.' : 'Dein E-Mail-Programm sollte sich mit der vorbereiteten Anfrage öffnen. Sende die E-Mail, um die Anfrage abzuschließen.'}</p>}<button className="button button-blue form-submit" type="submit"><span>{t.send}</span> <Arrow /></button><p className="form-note">{t.formNote}</p></form></div></section>

      <footer className="site-footer"><div className="footer-top"><a href="#home" className="brand footer-brand" aria-label="ABOUT TIME STUDIOS home"><img src="/logo.png" alt="About Time Studios logo" className="brand-logo-img" width="44" height="44" /><span className="brand-text"><span className="brand-title">ABOUT TIME</span><span className="brand-subtitle" aria-hidden="true"><span>S</span><span>T</span><span>U</span><span>D</span><span>I</span><span>O</span><span>S</span></span></span></a><p>{t.footerLine}</p><a className="back-top" href="#home">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ABOUT TIME STUDIOS</span><span>{t.footer}</span><div><a href="mailto:hello@abouttime.studio">EMAIL</a><a href="#legal-note">{t.legal.toUpperCase()}</a><a href="#legal-note">{t.privacy.toUpperCase()}</a></div></div><p id="legal-note" className="legal-placeholder">{lang === 'en' ? 'Before launch: add your verified legal notice (Impressum) and privacy policy. Do not publish placeholder legal details.' : 'Vor dem Launch: ein vollständiges Impressum und eine Datenschutzerklärung ergänzen. Keine Platzhalterangaben veröffentlichen.'}</p></footer>
    </main>
  );
}

