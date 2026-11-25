import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile.js";
import { ButtonLink, Container } from "../components/ui.jsx";

const facts = [
    { label: "Based in", value: profile.location },
    { label: "Studying", value: "BSc Informatics and Computer Science, Strathmore University" },
    { label: "Looking for", value: "Software engineering internships" },
];

const socials = [
    { label: "GitHub", href: profile.links.github, icon: FiGithub },
    { label: "LinkedIn", href: profile.links.linkedin, icon: FiLinkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
];

export default function Hero() {
    return (
        <section aria-labelledby="hero-name" className="pt-14 pb-20 md:pt-24 md:pb-28">
            <Container>
                <h1
                    id="hero-name"
                    className="text-[clamp(3.6rem,14.5vw,11.5rem)] font-extrabold leading-[0.86] tracking-[-0.05em]"
                >
                    <span className="name-line"><span>Ephy</span></span>
                    <span className="name-line md:pl-[0.55em]"><span>Macharia</span></span>
                </h1>

                <div className="hero-after mt-10 grid gap-12 md:mt-14 md:grid-cols-12">
                    <div className="md:col-span-7">
                        <p className="max-w-[34ch] text-[clamp(1.3rem,2.3vw,1.65rem)] font-medium leading-snug tracking-[-0.01em]">
                            Software engineer building full-stack web apps and machine-learning
                            systems, from training the model to shipping the app around it.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <ButtonLink href="#work">See my work</ButtonLink>
                            <ButtonLink href={profile.cv} variant="secondary" download>
                                Download CV
                            </ButtonLink>
                        </div>
                        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
                                    >
                                        <Icon aria-hidden="true" className="h-4 w-4" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <dl className="space-y-5 border-l-2 border-accent pl-6 md:col-span-4 md:col-start-9 md:self-end">
                        {facts.map((f) => (
                            <div key={f.label}>
                                <dt className="text-sm text-muted">{f.label}</dt>
                                <dd className="font-semibold leading-snug">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
