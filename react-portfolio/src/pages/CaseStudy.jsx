import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { getProject } from "../data/projects.js";
import { caseStudies } from "../data/caseStudies/index.js";
import { ButtonLink, Container } from "../components/ui.jsx";
import StackList from "../components/StackList.jsx";
import NotFound from "./NotFound.jsx";

export default function CaseStudy() {
    const { slug } = useParams();
    const project = getProject(slug);
    const study = caseStudies[slug];

    useEffect(() => {
        if (project) document.title = `${project.title} | Ephy Macharia`;
    }, [project]);

    if (!project || !study) return <NotFound />;
    const { Content, meta } = study;

    return (
        <article className="pt-10 pb-20 md:pt-14">
            <Container>
                <Link
                    to={{ pathname: "/", hash: "work" }}
                    className="inline-flex items-center gap-2 text-[0.95rem] text-muted transition-colors hover:text-ink"
                >
                    <FiArrowLeft aria-hidden="true" /> All projects
                </Link>

                <header className="mt-10 grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <p className="text-muted">{project.kind}</p>
                        <h1 className="mt-2 text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
                            {project.title}
                        </h1>
                        <p className="mt-6 max-w-[52ch] text-[clamp(1.15rem,2vw,1.35rem)] leading-relaxed">
                            {project.summary}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {project.links.code && <ButtonLink href={project.links.code}>Source code on GitHub</ButtonLink>}
                            {project.links.live && (
                                <ButtonLink href={project.links.live} variant="secondary">
                                    Live site
                                </ButtonLink>
                            )}
                        </div>
                    </div>
                    <dl className="space-y-4 border-l-2 border-accent pl-6 lg:col-span-4 lg:col-start-9 lg:self-end">
                        {meta.map((m) => (
                            <div key={m.label}>
                                <dt className="text-sm text-muted">{m.label}</dt>
                                <dd className="font-semibold leading-snug">{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                </header>

                {project.facts && (
                    <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 rounded-[2rem] bg-accent-soft p-6 sm:p-10 lg:grid-cols-4">
                        {project.facts.map((f) => (
                            <div key={f.value} className="flex flex-col-reverse justify-end">
                                <dt className="mt-2 text-sm leading-snug text-muted">{f.label}</dt>
                                <dd className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-none tracking-[-0.03em]">
                                    {f.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                )}

                {!project.screenshots && project.image && (
                    <img
                        src={project.image}
                        alt={project.imageAlt ?? `Screenshot of ${project.title}`}
                        className="mt-16 w-full rounded-2xl border border-line"
                    />
                )}
            </Container>

            {project.screenshots && (
                <div className="mt-16" role="region" aria-label="App screenshots">
                    <ul
                        tabIndex={0}
                        className="flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-6 sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
                    >
                        {/* Phone screens get a device frame; wide (desktop) screens a light border */}
                        {project.screenshots.map((s) => (
                            <li
                                key={s.caption}
                                className={`shrink-0 snap-start ${s.wide ? "w-[85vw] max-w-[44rem]" : "w-[62vw] max-w-[15rem]"}`}
                            >
                                <img
                                    src={s.src}
                                    alt={s.alt}
                                    loading="lazy"
                                    className={
                                        s.wide
                                            ? "aspect-[2/1] w-full rounded-xl border border-line object-cover object-top"
                                            : "aspect-[640/1330] w-full rounded-[1.25rem] border-[5px] border-ink object-cover object-top"
                                    }
                                />
                                <p className="mt-3 text-sm text-muted">{s.caption}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <Container className="mt-10">
                <Content />
                <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10 md:py-14">
                    <h2 className="text-xl font-bold leading-snug">Built with</h2>
                    <StackList stack={project.stack} className="text-[0.95rem]" />
                </section>
                <div className="flex flex-wrap gap-3 border-t border-line pt-10">
                    <ButtonLink to={{ pathname: "/", hash: "work" }} variant="secondary">
                        See more projects
                    </ButtonLink>
                    <ButtonLink to={{ pathname: "/", hash: "contact" }}>Get in touch</ButtonLink>
                </div>
            </Container>
        </article>
    );
}
