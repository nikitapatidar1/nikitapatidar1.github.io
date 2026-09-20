"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  CheckCircle2,
  CircleAlert,
  Code2,
  Database,
  Download,
  GitFork,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  LoaderCircle,
  Moon,
  Phone,
  Send,
  ServerCog,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  capabilities,
  certifications,
  education,
  experience,
  navigation,
  Project,
  projects,
  siteConfig,
  skills,
} from "@/app/data";

const iconLinkClass = "icon-link";

function Logo() {
  return (
    <a href="#home" className="brand" aria-label="Nikita Patidar - back to home">
      <span className="brand-mark">NP</span>
      <span><strong>Nikita.</strong><small>Full Stack Developer</small></span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow"><span>{eyebrow}</span></p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="hero-visual reveal" aria-label="Animated full-stack development interface">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="code-window">
        <div className="window-bar">
          <div className="traffic"><i /><i /><i /></div>
          <span>nikita.dev / workspace</span>
          <Code2 size={16} />
        </div>
        <div className="code-layout">
          <aside aria-hidden="true">
            <span className="active"><Braces size={16} /> app.tsx</span>
            <span><ServerCog size={16} /> server.ts</span>
            <span><Database size={16} /> schema.prisma</span>
          </aside>
          <div className="code-lines" aria-hidden="true">
            <p><em>01</em><span className="purple">const</span> <span className="blue">developer</span> = &#123;</p>
            <p><em>02</em>&nbsp;&nbsp;name: <span className="green">&quot;Nikita&quot;</span>,</p>
            <p><em>03</em>&nbsp;&nbsp;craft: [</p>
            <p><em>04</em>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">&quot;React&quot;</span>, <span className="green">&quot;Node.js&quot;</span>,</p>
            <p><em>05</em>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">&quot;TypeScript&quot;</span>,</p>
            <p><em>06</em>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">&quot;PostgreSQL&quot;</span></p>
            <p><em>07</em>&nbsp;&nbsp;],</p>
            <p><em>08</em>&nbsp;&nbsp;focus: <span className="green">&quot;useful products&quot;</span></p>
            <p><em>09</em>&#125;;</p>
            <p><em>10</em><span className="purple">export default</span> developer;</p>
          </div>
        </div>
        <div className="terminal"><span>$</span> systems ready <i /> <small>4 services connected</small></div>
      </div>
      <div className="current-card">
        <span><i /> CURRENTLY BUILDING</span>
        <strong>Full-stack products</strong>
        <small>at Eyvy Solution</small>
      </div>
      <div className="stack-float">TS</div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="browser-frame">
        <div className="browser-top"><span /><span /><span /><div>portfolio / {project.number}</div></div>
        <div className="browser-image">
          <Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 900px) 100vw, 58vw" />
        </div>
      </div>
    );
  }
  if (project.visual === "analytics") {
    return (
      <div className="project-art analytics-art" role="img" aria-label="Abstract WhatsApp analytics dashboard with charts and emoji insights">
        <div className="art-top"><span>CHAT / INSIGHTS</span><strong>12.4k messages</strong></div>
        <div className="bars"><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="word-cloud"><b>weekend</b><span>meeting</span><em>project</em><small>coffee</small><strong>hello!</strong></div>
        <div className="emoji-row"><span>{"\u{1F602} 284"}</span><span>{"\u2764\uFE0F 197"}</span><span>{"\u{1F44D} 143"}</span></div>
      </div>
    );
  }
  return (
    <div className="project-art vision-art" role="img" aria-label="Abstract computer vision camera frame detecting multiple faces">
      <div className="camera-meta"><span><i /> LIVE</span><small>CAM_01 / 30 FPS</small></div>
      <div className="face face-one"><span>face 98%</span><i /><i /></div>
      <div className="face face-two"><span>face 96%</span><i /><i /></div>
      <div className="scan-line" />
      <div className="corner tl" /><div className="corner tr" /><div className="corner bl" /><div className="corner br" />
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      {project && (
        <DialogContent className="project-dialog">
          <DialogHeader>
            <p className="eyebrow"><span>{project.category}</span></p>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
          <div className="dialog-grid">
            <div><h3>Features</h3><ul>{project.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul></div>
            <div><h3>Role</h3><p>{project.role}</p><h3>Tech stack</h3><div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          </div>
          {project.github && <a className="button primary compact" href={project.github} target="_blank" rel="noreferrer"><GitFork size={17} /> View on GitHub <ArrowUpRight size={16} /></a>}
        </DialogContent>
      )}
    </Dialog>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem("nikita-theme") as "dark" | "light" | null;
    const next = saved || "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0.01 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.08 });
    reveals.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const move = (event: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("nikita-theme", next);
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      honey: String(data.get("_honey") ?? "").trim(),
    };
    const errors: Record<string, string> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name) errors.name = "Please enter your full name.";
    if (!values.email) errors.email = "Please enter your email address.";
    else if (!emailPattern.test(values.email)) errors.email = "Please enter a valid email address.";
    if (!values.subject) errors.subject = "Please enter a subject.";
    if (!values.message) errors.message = "Please enter your message.";

    setFormErrors(errors);
    setFormStatus("idle");
    if (Object.keys(errors).length > 0 || values.honey) return;

    setFormStatus("submitting");
    try {
      const response = await fetch(siteConfig.contactForm.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          _subject: "New Portfolio Contact Message",
          _template: "table",
          _honey: values.honey,
        }),
      });

      if (!response.ok) throw new Error("FormSubmit request failed");
      form.reset();
      setFormErrors({});
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="cursor-glow" aria-hidden="true" />
      <header className="site-header">
        <div className="nav-wrap">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero section-grid">
          <div className="hero-noise" />
          <div className="hero-copy reveal is-visible">
            <div className="status-badge"><i /> Available for Full Stack Opportunities</div>
            <h1>Hi, I&apos;m <span>Nikita Patidar.</span></h1>
            <p className="hero-line">I build secure, scalable and <em>user-focused</em> digital products.</p>
            <p className="hero-summary">Full Stack Developer with 2+ years of experience building responsive React interfaces, secure Node.js APIs, real-time applications and optimized database solutions.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <ArrowDownRight size={18} /></a>
              {siteConfig.resumeUrl ? (
                <a className="button secondary" href={siteConfig.resumeUrl} download="Nikita-Patidar-Resume.pdf">Download resume <Download size={18} /></a>
              ) : (
                <a className="button secondary" href={`mailto:${siteConfig.email}?subject=Resume request`}>Request resume <Mail size={18} /></a>
              )}
            </div>
            <div className="hero-foot">
              <div className="socials">
                <a className={iconLinkClass} href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitFork size={19} /></a>
                <a className={iconLinkClass} href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={19} /></a>
                <a className={iconLinkClass} href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail size={19} /></a>
              </div>
              <span className="availability"><b>2+</b> years building<br />for the web</span>
            </div>
          </div>
          <CodeVisual />
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={17} /></a>
        </section>

        <section id="about" className="section-pad">
          <div className="section-wrap">
            <SectionHeading eyebrow="01 / About" title="Engineering ideas into reliable digital products." intro="I'm a Full Stack Developer based in Indore with more than two years of combined full-time engineering and backend development experience. I care about clean architecture, responsive design, API security and products that solve real user problems." />
            <div className="about-grid">
              {capabilities.map(([number, title, text]) => <article className="capability-card reveal" key={title}><span>{number}</span><Sparkles size={21} /><h3>{title}</h3><p>{text}</p></article>)}
              <aside className="profile-card reveal">
                <p className="eyebrow"><span>At a glance</span></p>
                <dl>
                  <div><dt>Location</dt><dd>Indore, India</dd></div>
                  <div><dt>Languages</dt><dd>Hindi & English</dd></div>
                  <div><dt>Current role</dt><dd>Full Stack Developer</dd></div>
                  <div><dt>Primary stack</dt><dd>MERN</dd></div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad alt-section">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 / Experience" title="Building across the stack, where performance meets polish." />
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item reveal" key={item.company}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-meta"><p>{item.period}</p><span>{item.place}</span></div>
                  <div className="timeline-content"><p className="company">{item.company}</p><h3>{item.role}</h3><p className="role-summary">{item.summary}</p><ul>{item.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad">
          <div className="section-wrap">
            <SectionHeading eyebrow="03 / Skills" title="A practical toolkit for modern product engineering." intro="Technologies chosen for the problem, not for the trend. My strongest work connects resilient APIs with thoughtful interfaces." />
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items], index) => (
                <article className={`skill-card reveal ${index === 4 ? "wide" : ""}`} key={category}>
                  <div className="skill-title"><span>0{index + 1}</span><h3>{category}</h3></div>
                  <div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="section-wrap">
            <SectionHeading eyebrow="04 / Selected work" title="Products with real workflows, not just pretty screens." intro="A selection spanning travel infrastructure, identity security, conversational AI, analytics and computer vision." />
            <div className="featured-projects">
              {projects.slice(0, 3).map((project, index) => (
                <article className={`featured-project reveal ${index % 2 ? "reverse" : ""}`} key={project.number}>
                  <ProjectVisual project={project} />
                  <div className="project-copy">
                    <div className="project-kicker"><span>{project.number}</span>{project.category}</div>
                    <h3>{project.title}</h3><p>{project.description}</p>
                    <div className="tags">{project.tech.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <div className="project-actions"><button className="text-link" onClick={() => setSelectedProject(project)}>View details <ArrowRight size={17} /></button><span className="unavailable" title="Add the live URL in app/data.ts">Live URL coming soon</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="secondary-projects">
              {projects.slice(3).map((project) => (
                <article className="secondary-project reveal" key={project.number}>
                  <ProjectVisual project={project} />
                  <div className="secondary-copy"><div className="project-kicker"><span>{project.number}</span>{project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><button className="text-link" onClick={() => setSelectedProject(project)}>View details <ArrowRight size={17} /></button><a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><GitFork size={19} /></a></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-pad alt-section">
          <div className="section-wrap">
            <SectionHeading eyebrow="05 / Learning" title="A foundation built in software, systems and AI." />
            <div className="learning-grid">
              <div className="education-list">
                {education.map((item) => <article className="education-card reveal" key={item.degree}><span className="year">{item.period}</span><div><p>{item.school}</p><h3>{item.degree}</h3><strong>{item.specialization}</strong><small>{item.result}</small><em>Focus: {item.focus}</em></div></article>)}
              </div>
              <div className="certifications">
                <p className="eyebrow"><span>Certifications</span></p>
                {certifications.map((item, index) => <article className="cert-card reveal" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.issuer}</p><small>{item.topics}</small></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="section-wrap contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow"><span>06 / Contact</span></p><h2>Let&apos;s build something <em>meaningful.</em></h2><p>I&apos;m open to full-time opportunities and collaborations involving full-stack development, backend systems and modern web applications.</p>
              <div className="contact-cards"><a href={`mailto:${siteConfig.email}`}><Mail /><span><small>Email</small>{siteConfig.email}</span><ArrowUpRight /></a><a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}><Phone /><span><small>Phone</small>{siteConfig.phone}</span><ArrowUpRight /></a><div><MapPin /><span><small>Location</small>{siteConfig.location}</span></div></div>
              <div className="social-row"><a href={siteConfig.github} target="_blank" rel="noreferrer"><GitFork /> GitHub</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness /> LinkedIn</a></div>
            </div>
            <form className="contact-form reveal" onSubmit={submitForm} noValidate>
              <div className="honeypot" aria-hidden="true"><label htmlFor="contact-company">Company website</label><input id="contact-company" name="_honey" type="text" tabIndex={-1} autoComplete="off" /></div>
              <div className="form-row">
                <label htmlFor="contact-name">Full Name<input id="contact-name" name="name" required autoComplete="name" placeholder="Your full name" aria-invalid={Boolean(formErrors.name)} aria-describedby={formErrors.name ? "contact-name-error" : undefined} onChange={() => setFormErrors((current) => ({ ...current, name: "" }))} />{formErrors.name && <span className="field-error" id="contact-name-error">{formErrors.name}</span>}</label>
                <label htmlFor="contact-email">Email Address<input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? "contact-email-error" : undefined} onChange={() => setFormErrors((current) => ({ ...current, email: "" }))} />{formErrors.email && <span className="field-error" id="contact-email-error">{formErrors.email}</span>}</label>
              </div>
              <label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" required placeholder="What would you like to discuss?" aria-invalid={Boolean(formErrors.subject)} aria-describedby={formErrors.subject ? "contact-subject-error" : undefined} onChange={() => setFormErrors((current) => ({ ...current, subject: "" }))} />{formErrors.subject && <span className="field-error" id="contact-subject-error">{formErrors.subject}</span>}</label>
              <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" required rows={6} placeholder="Tell me a little about the opportunity or project..." aria-invalid={Boolean(formErrors.message)} aria-describedby={formErrors.message ? "contact-message-error" : undefined} onChange={() => setFormErrors((current) => ({ ...current, message: "" }))} />{formErrors.message && <span className="field-error" id="contact-message-error">{formErrors.message}</span>}</label>
              <button className="button primary" type="submit" disabled={formStatus === "submitting"}>{formStatus === "submitting" ? <><LoaderCircle className="submit-spinner" size={17} /> Sending...</> : <>Send Message <Send size={17} /></>}</button>
              <div className={`form-notification ${formStatus === "success" ? "success" : formStatus === "error" ? "error" : ""}`} role="status" aria-live="polite">
                {formStatus === "success" && <><CheckCircle2 aria-hidden="true" /><span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span></>}
                {formStatus === "error" && <><CircleAlert aria-hidden="true" /><span>Sorry, your message could not be sent. Please try again or <a href={`mailto:${siteConfig.contactForm.recipientEmail}`}>email me directly</a>.</span></>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-wrap"><Logo /><p>Designed and built by Nikita Patidar.<br />&copy; {new Date().getFullYear()} All rights reserved.</p><a className="back-top" href="#home">Back to top <ArrowUpRight size={16} /></a></div>
      </footer>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

