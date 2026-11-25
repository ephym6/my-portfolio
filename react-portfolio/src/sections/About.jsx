import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/profile.js";
import { Container } from "../components/ui.jsx";

export function About() {
    return (
        <section id="about" aria-labelledby="about-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
            <Container className="grid gap-8 md:grid-cols-12 md:gap-10">
                <h2
                    id="about-title"
                    className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] md:col-span-4"
                >
                    About
                </h2>
                <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed md:col-span-8">
                    <p>
                        I'm a Computer Science student at Strathmore University in Nairobi. I like
                        owning a problem end to end: preparing the data, training the model, and
                        building the app that people actually use.
                    </p>
                    <p>
                        Most of my work sits between web development and machine learning. I've
                        built full-stack apps with React, Node.js and Spring Boot, trained an
                        on-device plant classifier for Android, built an AI analytics dashboard at
                        a hackathon, and in 2026 joined Brno University of Technology's BISSIT
                        programme to work on detecting phishing login forms with machine learning.
                    </p>
                    <p>
                        I enjoy working in teams, and I care about the parts that make a project
                        hold up: tidy Git workflows, tests, and being honest about what a model can
                        and can't do.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 py-20 md:py-28">
            <Container>
                <div className="rounded-[2rem] bg-ink px-6 py-12 text-paper sm:px-10 md:px-14 md:py-16">
                    <h2 id="contact-title" className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                        Get in touch
                    </h2>
                    <p className="mt-4 max-w-[52ch] text-lg text-paper/75">
                        I'm looking for software engineering internships, and I'm always happy to
                        talk about projects or opportunities.
                    </p>
                    <a
                        href={`mailto:${profile.email}`}
                        className="mt-8 inline-block [overflow-wrap:anywhere] text-[clamp(1.1rem,4.6vw,2.75rem)] font-bold tracking-[-0.03em] underline decoration-paper/30 decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-paper"
                    >
                        {profile.email}
                    </a>
                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <a
                            href={profile.cv}
                            download
                            className="inline-flex items-center rounded-full bg-paper px-5 py-2.5 text-[0.95rem] font-semibold leading-none text-ink transition-opacity hover:opacity-85"
                        >
                            Download CV
                        </a>
                        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-paper/75 hover:text-paper">
                            <FiLinkedin aria-hidden="true" /> LinkedIn
                        </a>
                        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-paper/75 hover:text-paper">
                            <FiGithub aria-hidden="true" /> GitHub
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
